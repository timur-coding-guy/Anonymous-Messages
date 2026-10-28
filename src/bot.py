import os
from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup
from telegram.ext import Application, CommandHandler, CallbackQueryHandler, MessageHandler, filters, ContextTypes, ConversationHandler
from database import Database
from locales import get_text

db = Database()
BOT_USERNAME = None

SELECTING_LANGUAGE = 1
SENDING_MESSAGE = 2

def build_language_keyboard(target_user_id: int = None):
    callback_prefix = f"onboard_link_{target_user_id}" if target_user_id is not None else "onboard"
    return InlineKeyboardMarkup([
        [
            InlineKeyboardButton("🇺🇦 Українська", callback_data=f"{callback_prefix}_ua"),
            InlineKeyboardButton("🇷🇺 Русский", callback_data=f"{callback_prefix}_ru"),
            InlineKeyboardButton("🇬🇧 English", callback_data=f"{callback_prefix}_en"),
        ]
    ])

async def show_document_consent(query, language: str, target_user_id: int = None):
    github_pages_url = os.getenv("GITHUB_PAGES_URL", "https://yourusername.github.io/anon-messages")
    accept_callback = (
        f"accept_link_{target_user_id}_{language}"
        if target_user_id is not None
        else f"accept_docs_{language}"
    )
    keyboard = [
        [
            InlineKeyboardButton(get_text("privacy", language), url=f"{github_pages_url}/privacy.html"),
            InlineKeyboardButton(get_text("terms", language), url=f"{github_pages_url}/terms.html"),
        ],
        [
            InlineKeyboardButton(get_text("agree_button", language), callback_data=accept_callback),
        ]
    ]
    await query.edit_message_text(
        get_text("start_welcome", language),
        reply_markup=InlineKeyboardMarkup(keyboard)
    )

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    user_id = update.effective_user.id
    user_language = db.get_user(user_id)
    
    if context.args:
        try:
            target_user_id = int(context.args[0])
        except (ValueError, IndexError):
            target_user_id = None

        if target_user_id is not None:
            if user_language is None:
                language = "en"
                await update.message.reply_text(
                    get_text("initial_language", language),
                    reply_markup=build_language_keyboard(target_user_id)
                )
                return
            
            language = user_language
            
            if target_user_id == user_id:
                await update.message.reply_text(get_text("cant_send_to_self", language))
                return
            
            if db.get_user(target_user_id) is None:
                await update.message.reply_text(get_text("user_not_found", language))
                return
            
            context.user_data["target_user_id"] = target_user_id
            keyboard = [
                [
                    InlineKeyboardButton(get_text("im_done", language), callback_data="im_done"),
                ]
            ]
            reply_markup = InlineKeyboardMarkup(keyboard)
            await update.message.reply_text(
                get_text("send_message", language),
                reply_markup=reply_markup
            )
            return
    
    if user_language is None:
        language = "en"
        await update.message.reply_text(
            get_text("initial_language", language),
            reply_markup=build_language_keyboard()
        )
    else:
        await show_main_menu(update, context, user_language, False)

async def show_main_menu(update: Update, context: ContextTypes.DEFAULT_TYPE, language: str, new_message: bool = False):
    user_id = update.effective_user.id
    username = update.effective_user.first_name or "User"
    
    keyboard = [
        [
            InlineKeyboardButton(get_text("your_link_button", language), callback_data="get_link"),
        ],
        [
            InlineKeyboardButton(get_text("settings_button", language), callback_data="settings"),
        ],
    ]
    
    reply_markup = InlineKeyboardMarkup(keyboard)
    
    if new_message:
        if update.callback_query:
            await context.bot.send_message(
                chat_id=update.effective_chat.id,
                text=get_text("main_menu", language, username=username),
                reply_markup=reply_markup
            )
        else:
            await update.message.reply_text(
                get_text("main_menu", language, username=username),
                reply_markup=reply_markup
            )
    else:
        if update.callback_query:
            await update.callback_query.edit_message_text(
                get_text("main_menu", language, username=username),
                reply_markup=reply_markup
            )
        else:
            await update.message.reply_text(
                get_text("main_menu", language, username=username),
                reply_markup=reply_markup
            )

async def show_settings(update: Update, context: ContextTypes.DEFAULT_TYPE, language: str):
    keyboard = [
        [
            InlineKeyboardButton(get_text("change_language_button", language), callback_data="change_language"),
        ],
        [
            InlineKeyboardButton(get_text("legal_button", language), callback_data="legal"),
        ],
        [
            InlineKeyboardButton(get_text("delete_account_button", language), callback_data="delete_account"),
        ],
        [
            InlineKeyboardButton(get_text("back", language), callback_data="back_main"),
        ],
    ]
    reply_markup = InlineKeyboardMarkup(keyboard)

    if update.callback_query:
        await update.callback_query.edit_message_text(
            get_text("settings", language),
            reply_markup=reply_markup
        )
    else:
        await update.message.reply_text(
            get_text("settings", language),
            reply_markup=reply_markup
        )

async def show_legal(update: Update, context: ContextTypes.DEFAULT_TYPE, language: str):
    github_pages_url = os.getenv("GITHUB_PAGES_URL", "https://yourusername.github.io/anon-messages")
    keyboard = [
        [
            InlineKeyboardButton(get_text("privacy", language), url=f"{github_pages_url}/privacy.html"),
            InlineKeyboardButton(get_text("terms", language), url=f"{github_pages_url}/terms.html"),
        ],
        [
            InlineKeyboardButton(get_text("back", language), callback_data="back_settings"),
        ],
    ]
    reply_markup = InlineKeyboardMarkup(keyboard)

    if update.callback_query:
        await update.callback_query.edit_message_text(
            get_text("documents", language),
            reply_markup=reply_markup
        )
    else:
        await update.message.reply_text(
            get_text("documents", language),
            reply_markup=reply_markup
        )

async def button_handler(update: Update, context: ContextTypes.DEFAULT_TYPE):
    query = update.callback_query
    await query.answer()
    user_id = update.effective_user.id
    data = query.data
    
    if data.startswith("onboard_link_"):
        _, _, target_user_id, selected_lang = data.split("_")
        await show_document_consent(query, selected_lang, int(target_user_id))
        return

    if data.startswith("onboard_"):
        selected_lang = data.rsplit("_", 1)[1]
        await show_document_consent(query, selected_lang)
        return

    if data.startswith("accept_link_"):
        _, _, target_user_id, selected_lang = data.split("_")
        target_user_id = int(target_user_id)

        if target_user_id == user_id:
            await query.delete_message()
            await context.bot.send_message(
                chat_id=update.effective_chat.id,
                text=get_text("cant_send_to_self", selected_lang)
            )
            return

        if db.get_user(target_user_id) is None:
            await query.delete_message()
            await context.bot.send_message(
                chat_id=update.effective_chat.id,
                text=get_text("user_not_found", selected_lang)
            )
            return

        db.register_user(user_id, selected_lang)
        context.user_data["target_user_id"] = target_user_id
        await query.delete_message()
        keyboard = [[InlineKeyboardButton(get_text("im_done", selected_lang), callback_data="im_done")]]
        await context.bot.send_message(
            chat_id=update.effective_chat.id,
            text=get_text("send_message", selected_lang),
            reply_markup=InlineKeyboardMarkup(keyboard)
        )
        return

    if data.startswith("accept_docs_"):
        selected_lang = data.split("_")[2]
        db.register_user(user_id, selected_lang)
        await query.delete_message()
        await show_main_menu(update, context, selected_lang, new_message=True)
        return

    language = db.get_user_language(user_id)
    
    if data == "get_link":
        link = f"https://t.me/{BOT_USERNAME}?start={user_id}"
        keyboard = [
            [
                InlineKeyboardButton(get_text("back", language), callback_data="back_main"),
            ]
        ]
        reply_markup = InlineKeyboardMarkup(keyboard)
        await query.edit_message_text(
            f"{get_text('your_link', language)}\n{link}",
            reply_markup=reply_markup
        )

    elif data == "settings":
        await show_settings(update, context, language)
    
    elif data == "legal":
        await show_legal(update, context, language)

    elif data == "change_language":
        keyboard = [
            [
                InlineKeyboardButton(get_text("lang_ua", language), callback_data="switch_ua"),
                InlineKeyboardButton(get_text("lang_ru", language), callback_data="switch_ru"),
                InlineKeyboardButton(get_text("lang_en", language), callback_data="switch_en"),
            ],
            [
                InlineKeyboardButton(get_text("back", language), callback_data="back_settings"),
            ]
        ]
        reply_markup = InlineKeyboardMarkup(keyboard)
        await query.edit_message_text(
            get_text("select_language", language),
            reply_markup=reply_markup
        )
    
    elif data.startswith("switch_"):
        selected_lang = data.split("_")[1]
        db.update_user_language(user_id, selected_lang)
        language = selected_lang
        await show_settings(update, context, language)
    
    elif data == "delete_account":
        keyboard = [
            [
                InlineKeyboardButton(get_text("yes_delete", language), callback_data="confirm_delete"),
            ],
            [
                InlineKeyboardButton(get_text("back", language), callback_data="back_settings"),
            ]
        ]
        reply_markup = InlineKeyboardMarkup(keyboard)
        await query.edit_message_text(
            get_text("delete_confirm", language),
            reply_markup=reply_markup
        )
    
    elif data == "confirm_delete":
        db.delete_user(user_id)
        context.user_data.pop("target_user_id", None)
        await query.edit_message_text(get_text("ok", language))
    
    elif data == "back_settings":
        await show_settings(update, context, language)
    
    elif data == "back_main":
        await show_main_menu(update, context, language)
    
    elif data == "im_done":
        context.user_data.pop("target_user_id", None)
        await query.edit_message_text(get_text("ok", language))
        await show_main_menu(update, context, language)


async def handle_message(update: Update, context: ContextTypes.DEFAULT_TYPE):
    user_id = update.effective_user.id
    sender_language = db.get_user_language(user_id)
    
    if "target_user_id" not in context.user_data:
        return
    
    target_user_id = context.user_data["target_user_id"]
    target_language = db.get_user_language(target_user_id)
    
    message_text = ""
    photo = None
    voice = None
    animation = None
    
    if update.message.photo:
        photo = update.message.photo[-1].file_id
        caption = update.message.caption or ""
        message_text = caption
    elif update.message.voice:
        voice = update.message.voice.file_id
    elif update.message.animation:
        animation = update.message.animation.file_id
        caption = update.message.caption or ""
        message_text = caption
    else:
        message_text = update.message.text or ""
    
    if photo:
        await context.bot.send_photo(
            chat_id=target_user_id,
            photo=photo,
            caption=f"{get_text('new_message_received', target_language)}{message_text}{get_text('swipe_to_reply', target_language)}"
        )
    elif voice:
        await context.bot.send_voice(
            chat_id=target_user_id,
            voice=voice,
            caption=f"{get_text('new_message_received', target_language)}{get_text('swipe_to_reply', target_language)}"
        )
    elif animation:
        await context.bot.send_animation(
            chat_id=target_user_id,
            animation=animation,
            caption=f"{get_text('new_message_received', target_language)}{message_text}{get_text('swipe_to_reply', target_language)}"
        )
    elif message_text:
        await context.bot.send_message(
            chat_id=target_user_id,
            text=f"{get_text('new_message_received', target_language)}{message_text}{get_text('swipe_to_reply', target_language)}"
        )
    
    keyboard = [
        [
            InlineKeyboardButton(get_text("im_done", sender_language), callback_data="im_done"),
        ]
    ]
    reply_markup = InlineKeyboardMarkup(keyboard)
    await update.message.reply_text(
        get_text("sent", sender_language),
        reply_markup=reply_markup
    )

async def init_bot_username(application):
    global BOT_USERNAME
    BOT_USERNAME = (await application.bot.get_me()).username

def create_application():
    token = os.getenv("TELEGRAM_BOT_TOKEN")
    if not token:
        raise ValueError("TELEGRAM_BOT_TOKEN not found in environment variables")
    
    application = Application.builder().token(token).build()
    
    application.add_handler(CommandHandler("start", start))
    application.add_handler(CallbackQueryHandler(button_handler))
    application.add_handler(MessageHandler(filters.PHOTO | filters.VOICE | filters.ANIMATION | filters.TEXT & ~filters.COMMAND, handle_message))
    
    return application
