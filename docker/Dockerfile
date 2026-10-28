FROM python:3.11-slim-bookworm

WORKDIR /app

COPY pyproject.toml uv.lock ./
RUN python -m pip install --no-cache-dir "uv==0.13.1" \
    && uv sync --frozen --no-dev --no-install-project

COPY src/ ./src/

RUN chown -R 65532:65532 /app

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD /app/.venv/bin/python -c "import pathlib; cmdline=pathlib.Path('/proc/1/cmdline').read_bytes().replace(b'\x00', b' '); raise SystemExit(0 if b'src.main' in cmdline else 1)"

USER 65532:65532

CMD ["/app/.venv/bin/python", "-m", "src.main"]
