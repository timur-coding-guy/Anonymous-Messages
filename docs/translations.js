const translations = {
    en: {
        nav_home: "Home",
        nav_privacy: "Privacy Policy",
        nav_terms: "Terms of Service",
        nav_cookies: "Cookie Policy",
        footer_privacy: "Privacy",
        footer_terms: "Terms",
        footer_cookies: "Cookies",
        hero_title: "Send messages without revealing your identity",
        hero_desc: "A Telegram bot that lets you send anonymous messages through secure, encrypted links. No message content is ever stored.",
        hero_note: "To use this bot, you need to host it yourself with your own Telegram bot token and database.",
        feature1_title: "Encrypted user IDs",
        feature1_desc: "Your Telegram ID is hashed with SHA-256 and salt before storage. It cannot be reversed to identify you.",
        feature2_title: "No message storage",
        feature2_desc: "Messages pass through Telegram's servers directly. Your database never stores message content or metadata.",
        feature3_title: "Multi-language support",
        feature3_desc: "Available in English, Russian, and Ukrainian. Recipients see messages in their chosen language.",
        cookie_text: "We use cookies to save your language preference. By continuing, you agree to our use of cookies. ",
        cookie_learn: "Learn more",
        cookie_reject: "Reject",
        cookie_accept: "Accept",
        privacy_title: "Privacy Policy",
        privacy_updated: "Last updated: October 27, 2026",
        privacy_h1: "1. Information We Collect",
        privacy_p1: "We collect minimal information necessary to operate the service:",
        privacy_li1: "Encrypted User ID: Your Telegram user ID is encrypted using SHA-256 hashing with additional salt before storage",
        privacy_li2: "Language Preference: Your selected language (two-letter code: en, ru, ua)",
        privacy_h2: "2. Information We Do NOT Collect",
        privacy_important: "Important:",
        privacy_p2: "We do NOT store or log:",
        privacy_li3: "Message content",
        privacy_li4: "Message metadata",
        privacy_li5: "Usernames or real names",
        privacy_li6: "IP addresses",
        privacy_li7: "Any identifying information beyond encrypted user IDs",
        privacy_h3: "3. Data Storage and Security",
        privacy_p3: "All stored data is encrypted:",
        privacy_li8: "User IDs are hashed using SHA-256 with salt before storage",
        privacy_li9: "Data is stored in Turso database with encryption at rest",
        privacy_li10: "No message content is ever stored in our database",
        privacy_h4: "4. Data Retention",
        privacy_p4: "We retain only the minimum data necessary for service operation:",
        privacy_li11: "Encrypted user IDs and language preferences are retained indefinitely unless you request deletion",
        privacy_li12: "No message content is retained",
        privacy_h5: "5. Data Sharing",
        privacy_p5: "We do not share your data with third parties. Messages are transmitted directly through Telegram's infrastructure.",
        privacy_h6: "6. Your Rights",
        privacy_p6: "You have the right to:",
        privacy_li13: "Request deletion of your data from our database",
        privacy_li14: "Change your language preference at any time",
        privacy_li15: "Stop using the service at any time",
        privacy_h7: "7. Children's Privacy",
        privacy_p7: "The service is not intended for children under 13. We do not knowingly collect information from children under 13.",
        privacy_h8: "8. International Data Transfers",
        privacy_p8: "Your data may be stored and processed in servers located outside your country. By using the service, you consent to such transfers.",
        privacy_h9: "9. Changes to Privacy Policy",
        privacy_p9: "We may update this privacy policy from time to time. We will notify users of significant changes through the bot.",
        terms_title: "Terms of Service",
        terms_updated: "Last updated: October 27, 2026",
        terms_h1: "1. Acceptance of Terms",
        terms_p1: "By using the Anonymous Messages Telegram bot, you agree to these Terms of Service. If you do not agree to these terms, please do not use the service.",
        terms_h2: "2. Description of Service",
        terms_p2: "The Anonymous Messages bot provides a platform for users to send anonymous messages to each other via Telegram. The service allows users to generate unique links and receive messages anonymously.",
        terms_h3: "3. User Responsibilities",
        terms_p3: "Users agree to:",
        terms_li1: "Use the service for lawful purposes only",
        terms_li2: "Not send harassing, threatening, or abusive content",
        terms_li3: "Not share or distribute harmful, illegal, or inappropriate content",
        terms_li4: "Respect the privacy and rights of other users",
        terms_li5: "Not attempt to exploit or compromise the service's security",
        terms_h4: "4. Prohibited Content",
        terms_p4: "The following content is strictly prohibited:",
        terms_li6: "Hate speech or discriminatory content",
        terms_li7: "Threats of violence or harm",
        terms_li8: "Harassment or bullying",
        terms_li9: "Illegal activities or content",
        terms_li10: "Spam or unsolicited commercial messages",
        terms_li11: "Malware or malicious code",
        terms_h5: "5. Privacy and Data",
        terms_p5: "The service is designed with privacy in mind. Only encrypted user IDs and language preferences are stored. Message content is not logged or stored. For detailed information, please refer to our Privacy Policy.",
        terms_h6: "6. Disclaimer of Warranties",
        terms_p6: "The service is provided \"as is\" without warranties of any kind, either express or implied. We do not guarantee uninterrupted or error-free operation of the service.",
        terms_h7: "7. Limitation of Liability",
        terms_p7: "In no event shall we be liable for any indirect, incidental, special, or consequential damages arising from the use or inability to use the service.",
        terms_h8: "8. Modifications to Terms",
        terms_p8: "We reserve the right to modify these terms at any time. Continued use of the service after modifications constitutes acceptance of the updated terms.",
        terms_h9: "9. Termination",
        terms_p9: "We reserve the right to suspend or terminate access to the service for any user who violates these terms or engages in prohibited activities.",
        cookie_title: "Cookie Policy",
        cookie_updated: "Last updated: October 27, 2026",
        cookie_h1: "1. What Are Cookies",
        cookie_p1: "Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences.",
        cookie_h2: "2. Cookies We Use",
        cookie_p2: "We use the following types of cookies on this website:",
        cookie_table_name: "Cookie Name",
        cookie_table_type: "Type",
        cookie_table_purpose: "Purpose",
        cookie_table_duration: "Duration",
        cookie_row1_name: "language",
        cookie_row1_type: "Functional (First-party)",
        cookie_row1_purpose: "Stores your selected language preference (en, ru, or ua)",
        cookie_row1_duration: "1 year",
        cookie_row2_name: "cookieConsent",
        cookie_row2_type: "Functional (First-party)",
        cookie_row2_purpose: "Stores your cookie consent preference (accepted or rejected)",
        cookie_row2_duration: "1 year",
        cookie_h3: "3. Third-Party Cookies",
        cookie_p3: "We do not use any third-party cookies on this website. No analytics, marketing, or tracking scripts are used.",
        cookie_h4: "4. Cookie Consent",
        cookie_p4: "When you first visit our website, you will see a cookie consent banner asking you to accept or reject cookies. You have the following options:",
        cookie_li1: "Accept: We will set functional cookies to remember your language preference",
        cookie_li2: "Reject: No cookies will be set. Your language will default to English on each visit",
        cookie_h5: "5. Managing Cookies",
        cookie_p5: "You can manage cookies through your browser settings. Most browsers allow you to:",
        cookie_li3: "View what cookies are stored",
        cookie_li4: "Delete existing cookies",
        cookie_li5: "Block cookies from specific websites",
        cookie_li6: "Block all cookies (this may affect website functionality)",
        cookie_h6: "6. Updates to This Policy",
        cookie_p6: "We may update this cookie policy from time to time. We will notify users of significant changes by updating the \"Last updated\" date at the top of this page.",
        cookie_h7: "7. Contact Us",
        cookie_p7: "If you have questions about our use of cookies, please contact us through the Telegram bot."
    },
    ru: {
        nav_home: "Главная",
        nav_privacy: "Политика конфиденциальности",
        nav_terms: "Условия использования",
        nav_cookies: "Политика куки",
        footer_privacy: "Конфиденциальность",
        footer_terms: "Условия",
        footer_cookies: "Файлы cookie",
        hero_title: "Отправляйте сообщения, не раскрывая личность",
        hero_desc: "Telegram-бот, который позволяет отправлять анонимные сообщения через защищенные зашифрованные ссылки. Содержимое сообщений никогда не сохраняется.",
        hero_note: "Чтобы использовать этого бота, вам нужно разместить его самостоятельно с собственным токеном бота Telegram и базой данных.",
        feature1_title: "Зашифрованные ID пользователей",
        feature1_desc: "Ваш Telegram ID хешируется с помощью SHA-256 и соли перед сохранением. Он не может быть расшифрован для идентификации.",
        feature2_title: "Без хранения сообщений",
        feature2_desc: "Сообщения проходят напрямую через серверы Telegram. Ваша база данных никогда не хранит содержимое сообщений или метаданные.",
        feature3_title: "Поддержка нескольких языков",
        feature3_desc: "Доступен на английском, русском и украинском языках. Получатели видят сообщения на выбранном ими языке.",
        cookie_text: "Мы используем куки для сохранения вашего языка. Продолжая, вы соглашаетесь с использованием куки. ",
        cookie_learn: "Узнать больше",
        cookie_reject: "Отклонить",
        cookie_accept: "Принять",
        privacy_title: "Политика конфиденциальности",
        privacy_updated: "Последнее обновление: 27 октября 2026",
        privacy_h1: "1. Информация, которую мы собираем",
        privacy_p1: "Мы собираем минимальную информацию, необходимую для работы сервиса:",
        privacy_li1: "Зашифрованный ID пользователя: Ваш Telegram ID шифруется с помощью хеширования SHA-256 с дополнительной солью перед сохранением",
        privacy_li2: "Предпочтение языка: Ваш выбранный язык (двухбуквенный код: en, ru, ua)",
        privacy_h2: "2. Информация, которую мы НЕ собираем",
        privacy_important: "Важно:",
        privacy_p2: "Мы НЕ храним и не записываем:",
        privacy_li3: "Содержимое сообщений",
        privacy_li4: "Метаданные сообщений",
        privacy_li5: "Имена пользователей или реальные имена",
        privacy_li6: "IP-адреса",
        privacy_li7: "Любую идентифицирующую информацию кроме зашифрованных ID пользователей",
        privacy_h3: "3. Хранение и безопасность данных",
        privacy_p3: "Все хранимые данные зашифрованы:",
        privacy_li8: "ID пользователей хешируются с помощью SHA-256 с солью перед сохранением",
        privacy_li9: "Данные хранятся в базе данных Turso с шифрованием при хранении",
        privacy_li10: "Содержимое сообщений никогда не хранится в нашей базе данных",
        privacy_h4: "4. Хранение данных",
        privacy_p4: "Мы храним только минимальные данные, необходимые для работы сервиса:",
        privacy_li11: "Зашифрованные ID пользователей и языковые предпочтения хранятся бессрочно, пока вы не запросите удаление",
        privacy_li12: "Содержимое сообщений не хранится",
        privacy_h5: "5. Обмен данными",
        privacy_p5: "Мы не передаем ваши данные третьим лицам. Сообщения передаются напрямую через инфраструктуру Telegram.",
        privacy_h6: "6. Ваши права",
        privacy_p6: "Вы имеете право:",
        privacy_li13: "Запросить удаление ваших данных из нашей базы данных",
        privacy_li14: "Изменить языковые предпочтения в любое время",
        privacy_li15: "Прекратить использование сервиса в любое время",
        privacy_h7: "7. Конфиденциальность детей",
        privacy_p7: "Сервис не предназначен для детей младше 13 лет. Мы не намеренно собираем информацию от детей младше 13 лет.",
        privacy_h8: "8. Международная передача данных",
        privacy_p8: "Ваши данные могут храниться и обрабатываться на серверах, расположенных за пределами вашей страны. Используя сервис, вы даете согласие на такие передачи.",
        privacy_h9: "9. Изменения в политике конфиденциальности",
        privacy_p9: "Мы можем обновлять эту политику конфиденциальности время от времени. Мы уведомим пользователей о значительных изменениях через бота.",
        terms_title: "Условия использования",
        terms_updated: "Последнее обновление: 27 октября 2026",
        terms_h1: "1. Принятие условий",
        terms_p1: "Используя Telegram-бот Anonymous Messages, вы соглашаетесь с этими Условиями использования. Если вы не согласны с этими условиями, пожалуйста, не используйте сервис.",
        terms_h2: "2. Описание сервиса",
        terms_p2: "Бот Anonymous Messages предоставляет платформу для отправки анонимных сообщений друг другу через Telegram. Сервис позволяет пользователям генерировать уникальные ссылки и получать сообщения анонимно.",
        terms_h3: "3. Ответственность пользователей",
        terms_p3: "Пользователи соглашаются:",
        terms_li1: "Использовать сервис только в законных целях",
        terms_li2: "Не отправлять оскорбляющий, угрожающий или злоупотребляющий контент",
        terms_li3: "Не распространять вредный, незаконный или неприемлемый контент",
        terms_li4: "Уважать конфиденциальность и права других пользователей",
        terms_li5: "Не пытаться эксплуатировать или скомпрометировать безопасность сервиса",
        terms_h4: "4. Запрещенный контент",
        terms_p4: "Следующий контент строго запрещен:",
        terms_li6: "Речь ненависти или дискриминационный контент",
        terms_li7: "Угрозы насилия или вреда",
        terms_li8: "Харассмент или буллинг",
        terms_li9: "Незаконная деятельность или контент",
        terms_li10: "Спам или нежелательные коммерческие сообщения",
        terms_li11: "Вредоносное ПО или вредоносный код",
        terms_h5: "5. Конфиденциальность и данные",
        terms_p5: "Сервис разработан с учетом конфиденциальности. Хранятся только зашифрованные ID пользователей и языковые предпочтения. Содержимое сообщений не записывается и не хранится. Для подробной информации обратитесь к нашей Политике конфиденциальности.",
        terms_h6: "6. Отказ от гарантий",
        terms_p6: "Сервис предоставляется \"как есть\" без каких-либо гарантий, явных или подразумеваемых. Мы не гарантируем бесперебойную или безошибочную работу сервиса.",
        terms_h7: "7. Ограничение ответственности",
        terms_p7: "Ни при каких обстоятельствах мы не несем ответственности за любые косвенные, случайные, специальные или последующие убытки, возникшие в результате использования или невозможности использования сервиса.",
        terms_h8: "8. Изменения условий",
        terms_p8: "Мы оставляем за собой право изменять эти условия в любое время. Продолжение использования сервиса после изменений означает принятие обновленных условий.",
        terms_h9: "9. Прекращение",
        terms_p9: "Мы оставляем за собой право приостановить или прекратить доступ к сервису для любого пользователя, который нарушает эти условия или занимается запрещенной деятельностью.",
        cookie_title: "Политика куки",
        cookie_updated: "Последнее обновление: 27 октября 2026",
        cookie_h1: "1. Что такое куки",
        cookie_p1: "Куки - это небольшие текстовые файлы, которые сохраняются на вашем устройстве, когда вы посещаете наш веб-сайт. Они помогают нам обеспечить вам лучший опыт, запоминая ваши предпочтения.",
        cookie_h2: "2. Куки, которые мы используем",
        cookie_p2: "Мы используем следующие типы куки на этом веб-сайте:",
        cookie_table_name: "Название куки",
        cookie_table_type: "Тип",
        cookie_table_purpose: "Назначение",
        cookie_table_duration: "Срок хранения",
        cookie_row1_name: "language",
        cookie_row1_type: "Функциональные (Сторонние)",
        cookie_row1_purpose: "Сохраняет выбранный вами язык (en, ru или ua)",
        cookie_row1_duration: "1 год",
        cookie_row2_name: "cookieConsent",
        cookie_row2_type: "Функциональные (Сторонние)",
        cookie_row2_purpose: "Сохраняет ваше согласие на куки (принято или отклонено)",
        cookie_row2_duration: "1 год",
        cookie_h3: "3. Куки третьих лиц",
        cookie_p3: "Мы не используем куки третьих лиц на этом веб-сайте. Аналитика, маркетинг или отслеживающие скрипты не используются.",
        cookie_h4: "4. Согласие на куки",
        cookie_p4: "При первом посещении нашего веб-сайта вы увидите баннер согласия на куки с просьбой принять или отклонить куки. У вас есть следующие варианты:",
        cookie_li1: "Принять: Мы установим функциональные куки для запоминания вашего языка",
        cookie_li2: "Отклонить: Куки не будут установлены. Ваш язык будет по умолчанию английским при каждом посещении",
        cookie_h5: "5. Управление куки",
        cookie_p5: "Вы можете управлять куки через настройки браузера. Большинство браузеров позволяют:",
        cookie_li3: "Просмотреть, какие куки сохранены",
        cookie_li4: "Удалить существующие куки",
        cookie_li5: "Блокировать куки с определенных веб-сайтов",
        cookie_li6: "Блокировать все куки (это может повлиять на функциональность веб-сайта)",
        cookie_h6: "6. Обновления этой политики",
        cookie_p6: "Мы можем обновлять эту политику куки время от времени. Мы уведомим пользователей о значительных изменениях, обновив дату \"Последнее обновление\" вверху этой страницы.",
        cookie_h7: "7. Связаться с нами",
        cookie_p7: "Если у вас есть вопросы о нашем использовании куки, пожалуйста, свяжитесь с нами через Telegram-бот."
    },
    ua: {
        nav_home: "Головна",
        nav_privacy: "Політика конфіденційності",
        nav_terms: "Умови використання",
        nav_cookies: "Політика куки",
        footer_privacy: "Конфіденційність",
        footer_terms: "Умови",
        footer_cookies: "Файли cookie",
        hero_title: "Надсилайте повідомлення, не розкриваючи особу",
        hero_desc: "Telegram-бот, який дозволяє надсилати анонімні повідомлення через захищені зашифровані посилання. Вміст повідомлень ніколи не зберігається.",
        hero_note: "Щоб використовувати цього бота, вам потрібно розмістити його самостійно з власним токеном бота Telegram та базою даних.",
        feature1_title: "Зашифровані ID користувачів",
        feature1_desc: "Ваш Telegram ID хешується за допомогою SHA-256 та солі перед збереженням. Він не може бути розшифрований для ідентифікації.",
        feature2_title: "Без зберігання повідомлень",
        feature2_desc: "Повідомлення проходять напряму через сервери Telegram. Ваша база даних ніколи не зберігає вміст повідомлень або метадані.",
        feature3_title: "Підтримка кількох мов",
        feature3_desc: "Доступний англійською, російською та українською мовами. Отримувачі бачать повідомлення на обраній ними мові.",
        cookie_text: "Ми використовуємо куки для збереження вашої мови. Продовжуючи, ви погоджуєтесь з використанням куки. ",
        cookie_learn: "Дізнатися більше",
        cookie_reject: "Відхилити",
        cookie_accept: "Прийняти",
        privacy_title: "Політика конфіденційності",
        privacy_updated: "Останнє оновлення: 27 жовтня 2026",
        privacy_h1: "1. Інформація, яку ми збираємо",
        privacy_p1: "Ми збираємо мінімальну інформацію, необхідну для роботи сервісу:",
        privacy_li1: "Зашифрований ID користувача: Ваш Telegram ID шифрується за допомогою хешування SHA-256 з додатковою сіллю перед збереженням",
        privacy_li2: "Перевага мови: Ваша обрана мова (двобуквений код: en, ru, ua)",
        privacy_h2: "2. Інформація, яку ми НЕ збираємо",
        privacy_important: "Важливо:",
        privacy_p2: "Ми НЕ зберігаємо і не записуємо:",
        privacy_li3: "Вміст повідомлень",
        privacy_li4: "Метадані повідомлень",
        privacy_li5: "Імена користувачів або реальні імена",
        privacy_li6: "IP-адреси",
        privacy_li7: "Будь-яку ідентифікуючу інформацію крім зашифрованих ID користувачів",
        privacy_h3: "3. Зберігання та безпека даних",
        privacy_p3: "Усі збережені дані зашифровані:",
        privacy_li8: "ID користувачів хешуються за допомогою SHA-256 з сіллю перед збереженням",
        privacy_li9: "Дані зберігаються в базі даних Turso з шифруванням при зберіганні",
        privacy_li10: "Вміст повідомлень ніколи не зберігається в нашій базі даних",
        privacy_h4: "4. Зберігання даних",
        privacy_p4: "Ми зберігаємо тільки мінімальні дані, необхідні для роботи сервісу:",
        privacy_li11: "Зашифровані ID користувачів та мовні переваги зберігаються безстроково, поки ви не запитаєте видалення",
        privacy_li12: "Вміст повідомлень не зберігається",
        privacy_h5: "5. Обмін даними",
        privacy_p5: "Ми не передаємо ваші дані третім особам. Повідомлення передаються напряму через інфраструктуру Telegram.",
        privacy_h6: "6. Ваші права",
        privacy_p6: "Ви маєте право:",
        privacy_li13: "Запросити видалення ваших даних з нашої бази даних",
        privacy_li14: "Змінити мовні переваги в будь-який час",
        privacy_li15: "Припинити використання сервісу в будь-який час",
        privacy_h7: "7. Конфіденційність дітей",
        privacy_p7: "Сервіс не призначений для дітей молодше 13 років. Ми не навмисно збираємо інформацію від дітей молодше 13 років.",
        privacy_h8: "8. Міжнародна передача даних",
        privacy_p8: "Ваші дані можуть зберігатися та оброблятися на серверах, розташованих за межами вашої країни. Використовуючи сервіс, ви даєте згоду на такі передачі.",
        privacy_h9: "9. Зміни в політиці конфіденційності",
        privacy_p9: "Ми можемо оновлювати цю політику конфіденційності час від часу. Ми повідомимо користувачів про значні зміни через бота.",
        terms_title: "Умови використання",
        terms_updated: "Останнє оновлення: 27 жовтня 2026",
        terms_h1: "1. Прийняття умов",
        terms_p1: "Використовуючи Telegram-бот Anonymous Messages, ви погоджуєтесь з цими Умовами використання. Якщо ви не згодні з цими умовами, будь ласка, не використовуйте сервіс.",
        terms_h2: "2. Опис сервісу",
        terms_p2: "Бот Anonymous Messages надає платформу для надсилання анонімних повідомлень один одному через Telegram. Сервіс дозволяє користувачам генерувати унікальні посилання та отримувати повідомлення анонімно.",
        terms_h3: "3. Відповідальність користувачів",
        terms_p3: "Користувачі погоджуються:",
        terms_li1: "Використовувати сервіс тільки в законних цілях",
        terms_li2: "Не надсилати образливий, загрозливий або зловживаючий контент",
        terms_li3: "Не поширювати шкідливий, незаконний або неприйнятний контент",
        terms_li4: "Поважати конфіденційність та права інших користувачів",
        terms_li5: "Не намагатися експлуатувати або скомпрометувати безпеку сервісу",
        terms_h4: "4. Заборонений контент",
        terms_p4: "Наступний контент суворо заборонено:",
        terms_li6: "Мова ненависті або дискримінаційний контент",
        terms_li7: "Загрози насильства або шкоди",
        terms_li8: "Харасмент або булінг",
        terms_li9: "Незаконна діяльність або контент",
        terms_li10: "Спам або небажані комерційні повідомлення",
        terms_li11: "Шкідливе ПЗ або шкідливий код",
        terms_h5: "5. Конфіденційність та дані",
        terms_p5: "Сервіс розроблено з урахуванням конфіденційності. Зберігаються тільки зашифровані ID користувачів та мовні переваги. Вміст повідомлень не записується і не зберігається. Для детальної інформації зверніться до нашої Політики конфіденційності.",
        terms_h6: "6. Відмова від гарантій",
        terms_p6: "Сервіс надається \"як є\" без будь-яких гарантій, явних або подразумеваних. Ми не гарантуємо безперебійну або безпомилкову роботу сервісу.",
        terms_h7: "7. Обмеження відповідальності",
        terms_p7: "Ні за яких обставин ми не несемо відповідальності за будь-які непрямі, випадкові, спеціальні або наступні збитки, що виникли в результаті використання або неможливості використання сервісу.",
        terms_h8: "8. Зміни умов",
        terms_p8: "Ми залишаємо за собою право змінювати ці умови в будь-який час. Продовження використання сервісу після змін означає прийняття оновлених умов.",
        terms_h9: "9. Припинення",
        terms_p9: "Ми залишаємо за собою право призупинити або припинити доступ до сервісу для будь-якого користувача, який порушує ці умови або займається забороненою діяльністю.",
        cookie_title: "Політика куки",
        cookie_updated: "Останнє оновлення: 27 жовтня 2026",
        cookie_h1: "1. Що таке куки",
        cookie_p1: "Куки - це невеликі текстові файли, які зберігаються на вашому пристрої, коли ви відвідуєте наш веб-сайт. Вони допомагають нам забезпечити вам кращий досвід, запам'ятовуючи ваші переваги.",
        cookie_h2: "2. Куки, які ми використовуємо",
        cookie_p2: "Ми використовуємо наступні типи куки на цьому веб-сайті:",
        cookie_table_name: "Назва куки",
        cookie_table_type: "Тип",
        cookie_table_purpose: "Призначення",
        cookie_table_duration: "Термін зберігання",
        cookie_row1_name: "language",
        cookie_row1_type: "Функціональні (Сторонні)",
        cookie_row1_purpose: "Зберігає обрану вами мову (en, ru або ua)",
        cookie_row1_duration: "1 рік",
        cookie_row2_name: "cookieConsent",
        cookie_row2_type: "Функціональні (Сторонні)",
        cookie_row2_purpose: "Зберігає вашу згоду на куки (прийнято або відхилено)",
        cookie_row2_duration: "1 рік",
        cookie_h3: "3. Куки третіх осіб",
        cookie_p3: "Ми не використовуємо куки третіх осіб на цьому веб-сайті. Аналітика, маркетинг або відстежувальні скрипти не використовуються.",
        cookie_h4: "4. Згода на куки",
        cookie_p4: "При першому відвіді нашого веб-сайту ви побачите баннер згоди на куки з проханням прийняти або відхилити куки. У вас є наступні варіанти:",
        cookie_li1: "Прийняти: Ми встановимо функціональні куки для запам'ятовування вашої мови",
        cookie_li2: "Відхилити: Куки не будуть встановлені. Ваша мова буде за замовчуванням англійською при кожному відвіді",
        cookie_h5: "5. Керування куки",
        cookie_p5: "Ви можете керувати куки через налаштування браузера. Більшість браузерів дозволяють:",
        cookie_li3: "Переглянути, які куки збережені",
        cookie_li4: "Видалити існуючі куки",
        cookie_li5: "Блокувати куки з певних веб-сайтів",
        cookie_li6: "Блокувати всі куки (це може вплинути на функціональність веб-сайту)",
        cookie_h6: "6. Оновлення цієї політики",
        cookie_p6: "Ми можемо оновлювати цю політику куки час від часу. Ми повідомимо користувачів про значні зміни, оновивши дату \"Останнє оновлення\" на початку цієї сторінки.",
        cookie_h7: "7. Зв'язатися з нами",
        cookie_p7: "Якщо у вас є питання про наше використання куки, будь ласка, зв'яжіться з нами через Telegram-бот."
    }
};

const langFlags = {
    en: '🇬🇧',
    ru: '🇷🇺',
    ua: '🇺🇦'
};

function updateCurrentLangDisplay(lang) {
    const flag = document.getElementById('currentLangFlag');
    const code = document.getElementById('currentLangCode');
    if (flag) flag.textContent = langFlags[lang] || langFlags.en;
    if (code) code.textContent = (lang || 'en').toUpperCase();

    document.querySelectorAll('.lang-option').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
}

function setLanguage(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    updateCurrentLangDisplay(lang);
    localStorage.setItem('language', lang);
}

function initLanguage() {
    const savedLang = localStorage.getItem('language') || 'en';
    setLanguage(savedLang);
}

function initLanguageSelector() {
    const trigger = document.getElementById('langTrigger');
    const dropdown = document.getElementById('langDropdown');
    if (!trigger || !dropdown) return;

    trigger.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = dropdown.classList.toggle('show');
        trigger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    document.querySelectorAll('.lang-option').forEach(btn => {
        btn.addEventListener('click', () => {
            setLanguage(btn.getAttribute('data-lang'));
            dropdown.classList.remove('show');
            trigger.setAttribute('aria-expanded', 'false');
        });
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.language-selector')) {
            dropdown.classList.remove('show');
            trigger.setAttribute('aria-expanded', 'false');
        }
    });
}
const cookieBanner = document.getElementById('cookieBanner');
if (cookieBanner) {
    const hasConsent = localStorage.getItem('cookieConsent');

    if (!hasConsent) {
        cookieBanner.classList.add('show');
    }

    const acceptBtn = document.getElementById('acceptCookies');
    const rejectBtn = document.getElementById('rejectCookies');

    if (acceptBtn) {
        acceptBtn.addEventListener('click', () => {
            localStorage.setItem('cookieConsent', 'accepted');
            cookieBanner.classList.remove('show');
        });
    }

    if (rejectBtn) {
        rejectBtn.addEventListener('click', () => {
            localStorage.setItem('cookieConsent', 'rejected');
            localStorage.removeItem('language');
            cookieBanner.classList.remove('show');
        });
    }
}

initLanguageSelector();
initLanguage();
