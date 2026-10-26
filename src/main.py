import asyncio
import logging
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))

from bot import create_application, init_bot_username

logging.basicConfig(level=logging.CRITICAL)

async def main():
    application = create_application()
    await application.initialize()
    await application.start()
    await init_bot_username(application)
    await application.updater.start_polling()
    
    try:
        await asyncio.Event().wait()
    finally:
        await application.updater.stop()
        await application.stop()
        await application.shutdown()

if __name__ == "__main__":
    asyncio.run(main())
