# Anonymous Messages Telegram Bot

Telegram bot for sending anonymous messages between users. Features multi-language support (English, Russian, Ukrainian), encrypted user data storage via Turso, and message forwarding without logging content. Created with AI.

## Features

- Anonymous messaging via unique shareable links
- Multi-language interface (English, Russian, Ukrainian)
- Encrypted user data storage (SHA-256 hashed IDs)
- Support for text, photos, voice messages, and GIFs
- No message logging or content storage
- GitHub Pages for Terms of Service and Privacy Policy

## Prerequisites

- Python 3.10 or higher
- uv package manager
- Telegram Bot Token from [@BotFather](https://t.me/botfather)
- Turso database URL and auth token

## Installation

### macOS/Linux

```bash
# Install uv if not already installed
curl -LsSf https://astral.sh/uv/install.sh | sh

# Clone the repository
git clone https://github.com/timur-coding-guy/Anonymous-Messages/
cd Anonymous-Messages
# Install dependencies
uv sync

# Copy environment file and configure
cp .env.example .env
# Edit .env with your TELEGRAM_BOT_TOKEN, TURSO_DATABASE_URL, TURSO_AUTH_TOKEN, GITHUB_PAGES_URL, and HASH_SALT
```

### Windows (PowerShell)

```powershell
# Install uv if not already installed
powershell -c "irm https://astral.sh/uv/install.ps1 | iex"

# Clone the repository
git clone https://github.com/timur-coding-guy/Anonymous-Messages/
cd Anonymous-Messages

# Install dependencies
uv sync

# Copy environment file and configure
copy .env.example .env
# Edit .env with your TELEGRAM_BOT_TOKEN, TURSO_DATABASE_URL, TURSO_AUTH_TOKEN, GITHUB_PAGES_URL, and HASH_SALT
```

## Configuration

Create a `.env` file in the project root:

```
TELEGRAM_BOT_TOKEN=your_bot_token
TURSO_DATABASE_URL=libsql://your-database.turso.io
TURSO_AUTH_TOKEN=your_auth_token
GITHUB_PAGES_URL=https://yourusername.github.io/your-repo-name
HASH_SALT=your_random_secret_salt_here
```

### Setting up Turso

```bash
# Install Turso CLI
curl -sSfL https://get.tur.so/install.sh | bash

# Create database
turso db create your-name-of-database-you-want

# Get database URL
turso db show your-name-of-database --http-url

# Create auth token
turso db tokens create your-name-of-database
```

## Running the Bot

### Local Development

```bash
# Run the bot
uv run python -m src.main
```

### Docker

```bash
# Build and run with Docker Compose
cd docker
docker compose up -d --build
```

## GitHub Pages Setup

1. Create a GitHub repository
2. Enable GitHub Pages in repository settings (use docs/ folder)
3. Upload the `docs/` folder contents
4. Add your GitHub Pages URL to `.env`:
   ```
   GITHUB_PAGES_URL=https://yourusername.github.io/repository-name
   ```

## Project Structure

```
anon-messages/
├── src/
│   ├── __init__.py
│   ├── main.py          # Entry point
│   ├── bot.py           # Telegram bot logic
│   ├── database.py      # Turso database operations
│   └── locales.py       # Translations
├── tests/
│   └── __init__.py
├── docs/
│   ├── index.html
│   ├── terms.html       # Terms of Service
│   └── privacy.html     # Privacy Policy
├── docker/
│   ├── Dockerfile
│   ├── docker-compose.yml
├── .env.example
├── .gitignore
├── .dockerignore
├── pyproject.toml
├── .python-version
├── LICENSE
├── uv.lock
└── README.md

```
