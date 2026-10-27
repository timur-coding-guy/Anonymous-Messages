# Anonymous Messages Bot

A self-hosted Telegram bot for sending messages to other users through personal links. The bot interface is available in English, Russian, and Ukrainian. Created with AI.

## Features

- Personal links for receiving anonymous messages
- Text, photos, voice messages, and GIFs
- User IDs stored as salted SHA-256 hashes, with language preferences in Turso
- Message content is forwarded through Telegram and is not stored in the bot's database
- Localized terms, privacy, and cookie pages in [`docs/`](./docs/)

## Requirements

- Python 3.10 or later
- [uv](https://docs.astral.sh/uv/getting-started/installation/)
- A Telegram bot token from [@BotFather](https://t.me/BotFather)
- A [Turso](https://turso.tech/) database and authentication token

## Setup

Clone the repository and install its dependencies:

```bash
git clone https://github.com/timur-coding-guy/Anonymous-Messages.git
cd Anonymous-Messages
uv sync
```

Create a `.env` file from the example:

```bash
# macOS/Linux
cp .env.example .env

# Windows PowerShell
Copy-Item .env.example .env
```

Set the following values in `.env`:

```dotenv
TELEGRAM_BOT_TOKEN=your_telegram_bot_token
TURSO_DATABASE_URL=libsql://your-database-name.turso.io
TURSO_AUTH_TOKEN=your_turso_auth_token
HASH_SALT=your_long_random_secret
GITHUB_PAGES_URL=https://yourusername.github.io/your-repository
```

`TELEGRAM_BOT_TOKEN`, `TURSO_DATABASE_URL`, and `TURSO_AUTH_TOKEN` are required to run the bot. Keep `HASH_SALT` private and unchanged after users have been added: changing it makes existing database records inaccessible. `GITHUB_PAGES_URL` should point to the deployed `docs/` site so the bot can link to its legal pages.

Create a Turso database and get its URL and token using the [Turso CLI](https://docs.turso.tech/cli/introduction):

```bash
turso db create your-database-name
turso db show your-database-name --http-url
turso db tokens create your-database-name
```

The bot creates its `users` table on startup.

## Run

Start the bot locally:

```bash
uv run python -m src.main
```

Or, after creating and configuring `.env`, build and start it with Docker Compose from the repository root:

```bash
docker compose -f docker/docker-compose.yml up -d --build
```

View container logs with `docker compose -f docker/docker-compose.yml logs -f`; stop the service with `docker compose -f docker/docker-compose.yml down`.

## Publish the policy pages

The bot links to the privacy policy and terms on your GitHub Pages site. In the repository settings, enable GitHub Pages and select the `main` branch and `/docs` folder as the publishing source. Set `GITHUB_PAGES_URL` in `.env` to the resulting site URL.

## Project structure

```text
.
├── .dockerignore
├── .env.example
├── docker/
│   ├── Dockerfile
│   └── docker-compose.yml
├── docs/                 # GitHub Pages site and policies
├── src/
│   ├── bot.py
│   ├── database.py
│   ├── locales.py
│   └── main.py
├── tests/
├── pyproject.toml
└── uv.lock
```
