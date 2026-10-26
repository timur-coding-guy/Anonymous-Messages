import os
import httpx
from dotenv import load_dotenv
import hashlib

load_dotenv()

class Database:
    def __init__(self):
        self.db_url = os.getenv("TURSO_DATABASE_URL")
        self.auth_token = os.getenv("TURSO_AUTH_TOKEN")
        self.hash_salt = os.getenv("HASH_SALT", "")
        self.cache = {}
        self.encrypted_id_cache = {}
        
        if self.db_url and self.auth_token:
            self.http_url = self.db_url.replace("libsql://", "https://").replace("turso://", "https://")
            self.client = httpx.Client(timeout=30.0)
            self._init_tables()
        else:
            self.client = None
    
    def _encrypt_id(self, user_id: int) -> str:
        if user_id in self.encrypted_id_cache:
            return self.encrypted_id_cache[user_id]
        encrypted = hashlib.sha256((str(user_id) + self.hash_salt).encode()).hexdigest()
        self.encrypted_id_cache[user_id] = encrypted
        return encrypted
    
    def _execute_sql(self, sql: str, params: tuple = ()):
        if not self.client:
            return []
        
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
        
        if data.get("results") and len(data["results"]) > 0:
            result = data["results"][0]
            if result.get("response", {}).get("result"):
                return result["response"]["result"].get("rows", [])
        return []
    
    def _init_tables(self):
        if not self.client:
            return
        
        self._execute_sql("""
            CREATE TABLE IF NOT EXISTS users (
                id TEXT PRIMARY KEY,
                language TEXT NOT NULL
            )
        """)
    
    def user_exists(self, user_id: int) -> bool:
        if not self.client:
            return False
        
        if user_id in self.cache:
            return True
        
        encrypted_id = self._encrypt_id(user_id)
        rows = self._execute_sql(
            "SELECT 1 FROM users WHERE id = ?",
            (encrypted_id,)
        )
        exists = len(rows) > 0
        if exists:
            self.cache[user_id] = {}
        return exists
    
    def register_user(self, user_id: int, language: str = "en"):
        if not self.client:
            return
        
        encrypted_id = self._encrypt_id(user_id)
        self._execute_sql(
            "INSERT OR REPLACE INTO users (id, language) VALUES (?, ?)",
            (encrypted_id, language)
        )
        self.cache[user_id] = {"language": language}
    
    def get_user_language(self, user_id: int) -> str:
        if not self.client:
            return "en"
        
        if user_id in self.cache and "language" in self.cache[user_id]:
            return self.cache[user_id]["language"]
        
        encrypted_id = self._encrypt_id(user_id)
        rows = self._execute_sql(
            "SELECT language FROM users WHERE id = ?",
            (encrypted_id,)
        )
        if rows and len(rows) > 0:
            row = rows[0]
            if isinstance(row, list) and len(row) > 0:
                result = row[0]
                if isinstance(result, dict):
                    result = result.get("value", result)
                language = str(result) if result else "en"
                self.cache[user_id] = {"language": language}
                return language
            elif isinstance(row, dict):
                result = row.get("value", "en")
                language = str(result) if result else "en"
                self.cache[user_id] = {"language": language}
                return language
        return "en"
    
    def update_user_language(self, user_id: int, language: str):
        if not self.client:
            return
        
        encrypted_id = self._encrypt_id(user_id)
        self._execute_sql(
            "UPDATE users SET language = ? WHERE id = ?",
            (language, encrypted_id)
        )
        if user_id in self.cache:
            self.cache[user_id]["language"] = language
    
    def delete_user(self, user_id: int):
        if not self.client:
            return
        
        encrypted_id = self._encrypt_id(user_id)
        self._execute_sql(
            "DELETE FROM users WHERE id = ?",
            (encrypted_id,)
        )
        if user_id in self.cache:
            del self.cache[user_id]
        if user_id in self.encrypted_id_cache:
            del self.encrypted_id_cache[user_id]
