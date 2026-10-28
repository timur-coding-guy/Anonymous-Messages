import os
import httpx
from dotenv import load_dotenv
import hashlib
import time
from collections import OrderedDict

load_dotenv()

_CACHE_MISS = object()

class Database:
    CACHE_MAX_ENTRIES = 5000
    CACHE_TTL_SECONDS = 60
    NEGATIVE_CACHE_TTL_SECONDS = 10

    def __init__(self):
        self.db_url = os.getenv("TURSO_DATABASE_URL")
        self.auth_token = os.getenv("TURSO_AUTH_TOKEN")
        self.hash_salt = os.getenv("HASH_SALT", "")
        self.cache = OrderedDict()
        
        if self.db_url and self.auth_token:
            self.http_url = self.db_url.replace("libsql://", "https://").replace("turso://", "https://")
            self.client = httpx.Client(timeout=30.0)
            self._init_tables()
        else:
            self.client = None
    
    def _encrypt_id(self, user_id: int) -> str:
        return hashlib.sha256((str(user_id) + self.hash_salt).encode()).hexdigest()
    
    def _execute_sql(self, sql: str, params: tuple = ()):
        if not self.client:
            raise RuntimeError("Database is not configured")
        
        headers = {
            "Authorization": f"Bearer {self.auth_token}",
            "Content-Type": "application/json",
        }
        
        stmt = {
            "sql": sql
        }
        
        if params:
            stmt["args"] = [{"type": "text", "value": str(param)} for param in params]
        
        payload = {
            "requests": [
                {
                    "type": "execute",
                    "stmt": stmt
                },
                {
                    "type": "close"
                }
            ]
        }
        
        response = self.client.post(
            f"{self.http_url}/v2/pipeline",
            headers=headers,
            json=payload
        )
        
        response.raise_for_status()
        data = response.json()
        results = data.get("results")
        if not isinstance(results, list) or not results:
            raise RuntimeError("Unexpected response from database")

        result = results[0]
        if not isinstance(result, dict):
            raise RuntimeError("Unexpected response from database")
        if result.get("type") == "error":
            raise RuntimeError(result.get("error", "Database query failed"))

        execution = result.get("response", {})
        if not isinstance(execution, dict):
            raise RuntimeError("Unexpected response from database")
        if execution.get("type") == "error":
            raise RuntimeError(execution.get("error", "Database query failed"))

        sql_result = execution.get("result")
        if not isinstance(sql_result, dict) or not isinstance(sql_result.get("rows"), list):
            raise RuntimeError("Unexpected response from database")
        return sql_result["rows"]
    
    def _init_tables(self):
        if not self.client:
            return
        
        self._execute_sql("""
            CREATE TABLE IF NOT EXISTS users (
                id TEXT PRIMARY KEY,
                language TEXT NOT NULL
            )
        """)
    
    def _get_cached_user(self, user_id: int):
        cached = self.cache.get(user_id, _CACHE_MISS)
        if cached is _CACHE_MISS:
            return _CACHE_MISS

        expires_at, language = cached
        if expires_at <= time.monotonic():
            del self.cache[user_id]
            return _CACHE_MISS

        self.cache.move_to_end(user_id)
        return language

    def _cache_user(self, user_id: int, language):
        ttl = (
            self.NEGATIVE_CACHE_TTL_SECONDS
            if language is None
            else self.CACHE_TTL_SECONDS
        )
        self.cache[user_id] = (time.monotonic() + ttl, language)
        self.cache.move_to_end(user_id)
        while len(self.cache) > self.CACHE_MAX_ENTRIES:
            self.cache.popitem(last=False)

    def get_user(self, user_id: int):
        cached_language = self._get_cached_user(user_id)
        if cached_language is not _CACHE_MISS:
            return cached_language

        rows = self._execute_sql(
            "SELECT language FROM users WHERE id = ?",
            (self._encrypt_id(user_id),)
        )
        if not rows:
            self._cache_user(user_id, None)
            return None

        row = rows[0]
        if isinstance(row, list) and row:
            value = row[0]
            if isinstance(value, dict):
                value = value.get("value")
        elif isinstance(row, dict):
            value = row.get("value")
        else:
            raise RuntimeError("Unexpected user record from database")

        if not isinstance(value, str) or not value:
            raise RuntimeError("User record has no valid language")

        self._cache_user(user_id, value)
        return value

    def user_exists(self, user_id: int) -> bool:
        return self.get_user(user_id) is not None
    
    def register_user(self, user_id: int, language: str = "en"):
        encrypted_id = self._encrypt_id(user_id)
        self._execute_sql(
            "INSERT OR REPLACE INTO users (id, language) VALUES (?, ?)",
            (encrypted_id, language)
        )
        self._cache_user(user_id, language)
    
    def get_user_language(self, user_id: int) -> str:
        return self.get_user(user_id) or "en"
    
    def update_user_language(self, user_id: int, language: str):
        encrypted_id = self._encrypt_id(user_id)
        self._execute_sql(
            "UPDATE users SET language = ? WHERE id = ?",
            (language, encrypted_id)
        )
        self._cache_user(user_id, language)
    
    def delete_user(self, user_id: int):
        encrypted_id = self._encrypt_id(user_id)
        self._execute_sql(
            "DELETE FROM users WHERE id = ?",
            (encrypted_id,)
        )
        self.cache.pop(user_id, None)
