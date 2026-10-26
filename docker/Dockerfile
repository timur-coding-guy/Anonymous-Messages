FROM python:3.11-slim

WORKDIR /app

COPY pyproject.toml ./
RUN pip install --no-cache-dir uv && uv pip install --system -r <(uv pip compile pyproject.toml)

COPY src/ ./src/
COPY .env.example .env

CMD ["python", "-m", "src.main"]
