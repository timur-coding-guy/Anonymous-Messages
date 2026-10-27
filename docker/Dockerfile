FROM python:3.11-slim

WORKDIR /app

COPY pyproject.toml uv.lock ./
RUN pip install --no-cache-dir uv \
    && uv sync --frozen --no-dev --no-install-project

COPY src/ ./src/

CMD ["/app/.venv/bin/python", "-m", "src.main"]
