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
        hero_desc: "A Telegram bot that lets you send anonymous messages through unique links. Message content is never stored.",
        hero_note: "To use this bot, you need to host it yourself with your own Telegram bot token and database.",
        feature1_title: "Hashed user IDs",
        feature1_desc: "Your Telegram ID is hashed with SHA-256 and salt before storage, rather than stored directly.",
        feature2_title: "No message storage",
        feature2_desc: "Messages pass through Telegram's servers directly. Your database never stores message content or metadata.",
        feature3_title: "Multi-language support",
        feature3_desc: "Available in English, Russian, and Ukrainian.",
        cookie_text: "This site selects a language from your browser settings without accessing your location. Choose Accept to save your language between visits, or Reject to select it from your browser settings next time. ",
        cookie_learn: "Learn more",
        cookie_reject: "Reject",
        cookie_accept: "Accept",
        privacy_title: "Privacy Policy",
        privacy_updated: "Last updated: October 27, 2026",
        privacy_h1: "1. Information We Collect",
        privacy_p1: "We collect only the information necessary to operate the service:",
        privacy_li1: "Hashed User ID: Your Telegram user ID is hashed using SHA-256 with an additional salt before storage",
        privacy_li2: "Language Preference: Your selected language (two-letter code: en, ru, ua)",
        privacy_li16: "Browser Preferences: The website stores your selected language and storage choice in your browser after you accept",
        privacy_h2: "2. Information We Do NOT Collect",
        privacy_important: "Important:",
        privacy_p2: "We do NOT store or log:",
        privacy_li3: "Message content",
        privacy_li4: "Message metadata",
        privacy_li5: "Usernames or real names",
        privacy_li6: "IP addresses",
        privacy_li7: "Any identifying information beyond hashed user IDs",
        privacy_h3: "3. Data Storage and Security",
        privacy_p3: "We protect stored data as follows:",
        privacy_li8: "User IDs are hashed using SHA-256 with salt before storage",
        privacy_li9: "The data is stored in a Turso database.",
        privacy_li10: "No message content is ever stored in our database",
        privacy_h4: "4. Data Retention",
        privacy_p4: "We retain only the minimum data necessary for service operation:",
        privacy_li11: "Hashed user IDs and language preferences are retained until you request deletion.",
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
        privacy_p8: "Your data may be stored and processed on servers located outside your country. By using the service, you consent to such transfers.",
        privacy_h9: "9. Changes to Privacy Policy",
        privacy_p9: "We may update this privacy policy from time to time. The latest version will be available on this page.",
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
        terms_p5: "The service is designed with privacy in mind. We store only hashed user IDs and language preferences. Message content is not logged or stored. For details, please see our privacy policy.",
        terms_h6: "6. Disclaimer of Warranties",
        terms_p6: "The service is provided \"as is\" without warranties of any kind, either express or implied. We do not guarantee uninterrupted or error-free operation of the service.",
        terms_h7: "7. Limitation of Liability",
        terms_p7: "In no event shall we be liable for any indirect, incidental, special, or consequential damages arising from the use or inability to use the service.",
        terms_h8: "8. Modifications to Terms",
        terms_p8: "We reserve the right to modify these terms at any time. Continued use of the service after modifications constitutes acceptance of the updated terms.",
        terms_h9: "9. Termination",
        terms_p9: "We reserve the right to suspend or terminate access to the service for any user who violates these terms or engages in prohibited activities.",
        cookie_title: "Cookie and Browser Storage Policy",
        cookie_updated: "Last updated: October 27, 2026",
        cookie_h1: "1. Browser Storage",
        cookie_p1: "This website does not use cookies or access your location. When no language preference is saved, it selects a language locally from your browser settings. Your language choice is saved in local storage only after you accept.",
        cookie_h2: "2. Browser Storage We Use",
        cookie_p2: "The following items are stored in your browser's local storage:",
        cookie_table_name: "Storage Item",
        cookie_table_type: "Storage Type",
        cookie_table_purpose: "Purpose",
        cookie_table_duration: "Retention",
        cookie_row1_name: "language",
        cookie_row1_type: "Local storage",
        cookie_row1_purpose: "Stores your selected language after you accept",
        cookie_row1_duration: "Until cleared in your browser",
        cookie_row2_name: "cookieConsent",
        cookie_row2_type: "Local storage",
        cookie_row2_purpose: "Stores your choice to accept or reject language storage",
        cookie_row2_duration: "Until cleared in your browser",
        cookie_h3: "3. Third-Party Tracking",
        cookie_p3: "We do not use third-party storage, analytics, marketing, or tracking scripts on this website.",
        cookie_h4: "4. Your Choice",
        cookie_p4: "The website selects a language locally from your browser settings. A banner lets you choose whether to save your language preference between visits:",
        cookie_li1: "Accept: Your selected language is saved in local storage and restored on future visits",
        cookie_li2: "Reject: Your language is not saved; it is selected again from your browser settings on your next visit",
        cookie_h5: "5. Managing Browser Storage",
        cookie_p5: "You can clear this website's local storage through your browser settings. This will remove your saved language and choice, and the banner will appear again on your next visit.",
        cookie_li3: "View the data stored by this website",
        cookie_li4: "Clear this website's stored data",
        cookie_h6: "6. Updates to This Policy",
        cookie_p6: "We may update this policy from time to time. The latest version will be available on this page."
    },
    ru: {
        nav_home: "Главная",
        nav_privacy: "Политика конфиденциальности",
        nav_terms: "Условия использования",
        nav_cookies: "Политика использования cookie",
        footer_privacy: "Конфиденциальность",
        footer_terms: "Условия",
        footer_cookies: "Файлы cookie",
        hero_title: "Отправляйте сообщения, не раскрывая личность",
        hero_desc: "Telegram-бот для отправки анонимных сообщений по уникальным ссылкам. Содержимое сообщений не сохраняется.",
        hero_note: "Чтобы использовать этого бота, вам нужно разместить его самостоятельно с собственным токеном бота Telegram и базой данных.",
        feature1_title: "Хешированные ID пользователей",
        feature1_desc: "Перед сохранением ваш ID в Telegram хешируется с помощью SHA-256 и соли, а не хранится в исходном виде.",
        feature2_title: "Сообщения не сохраняются",
        feature2_desc: "Сообщения проходят напрямую через серверы Telegram. Ваша база данных никогда не хранит содержимое сообщений или метаданные.",
        feature3_title: "Поддержка нескольких языков",
        feature3_desc: "Бот доступен на английском, русском и украинском языках.",
        cookie_text: "Сайт выбирает язык по настройкам браузера, не определяя ваше местоположение. Нажмите «Принять», чтобы сохранять выбранный язык между посещениями, или «Отклонить», чтобы при следующем посещении язык снова определился по настройкам браузера. ",
        cookie_learn: "Узнать больше",
        cookie_reject: "Отклонить",
        cookie_accept: "Принять",
        privacy_title: "Политика конфиденциальности",
        privacy_updated: "Последнее обновление: 27 октября 2026",
        privacy_h1: "1. Информация, которую мы собираем",
        privacy_p1: "Мы собираем минимальную информацию, необходимую для работы сервиса:",
        privacy_li1: "Хешированный ID пользователя: ваш ID в Telegram хешируется с помощью SHA-256 и дополнительной соли перед сохранением",
        privacy_li2: "Выбранный язык: язык интерфейса (двухбуквенный код: en, ru или ua)",
        privacy_li16: "Настройки браузера: после вашего согласия сайт сохраняет выбранный язык и ваше решение в локальном хранилище браузера",
        privacy_h2: "2. Информация, которую мы не собираем",
        privacy_important: "Важно:",
        privacy_p2: "Мы не храним и не записываем:",
        privacy_li3: "Содержимое сообщений",
        privacy_li4: "Метаданные сообщений",
        privacy_li5: "Имена пользователей или реальные имена",
        privacy_li6: "IP-адреса",
        privacy_li7: "Любую информацию, позволяющую установить личность, кроме хешированных ID пользователей",
        privacy_h3: "3. Хранение и безопасность данных",
        privacy_p3: "Мы защищаем сохранённые данные следующим образом:",
        privacy_li8: "ID пользователей хешируются с помощью SHA-256 и соли перед сохранением",
        privacy_li9: "Данные хранятся в базе данных Turso.",
        privacy_li10: "Содержимое сообщений никогда не хранится в нашей базе данных",
        privacy_h4: "4. Хранение данных",
        privacy_p4: "Мы храним только минимальные данные, необходимые для работы сервиса:",
        privacy_li11: "Хешированные ID пользователей и выбранный язык хранятся до тех пор, пока вы не запросите удаление данных",
        privacy_li12: "Содержимое сообщений не хранится",
        privacy_h5: "5. Обмен данными",
        privacy_p5: "Мы не передаем ваши данные третьим лицам. Сообщения передаются напрямую через инфраструктуру Telegram.",
        privacy_h6: "6. Ваши права",
        privacy_p6: "Вы имеете право:",
        privacy_li13: "Запросить удаление ваших данных из нашей базы данных",
        privacy_li14: "Изменить языковые предпочтения в любое время",
        privacy_li15: "Прекратить использование сервиса в любое время",
        privacy_h7: "7. Конфиденциальность детей",
        privacy_p7: "Сервис не предназначен для детей младше 13 лет. Мы сознательно не собираем информацию о детях младше 13 лет.",
        privacy_h8: "8. Международная передача данных",
        privacy_p8: "Ваши данные могут храниться и обрабатываться на серверах за пределами вашей страны. Используя сервис, вы соглашаетесь на такую передачу данных.",
        privacy_h9: "9. Изменения в политике конфиденциальности",
        privacy_p9: "Мы можем время от времени обновлять эту политику конфиденциальности. Актуальная версия будет доступна на этой странице.",
        terms_title: "Условия использования",
        terms_updated: "Последнее обновление: 27 октября 2026",
        terms_h1: "1. Принятие условий",
        terms_p1: "Используя Telegram-бот Anonymous Messages, вы соглашаетесь с условиями использования. Если вы с ними не согласны, пожалуйста, не пользуйтесь сервисом.",
        terms_h2: "2. Описание сервиса",
        terms_p2: "Бот Anonymous Messages предоставляет платформу для отправки анонимных сообщений друг другу через Telegram. Сервис позволяет пользователям генерировать уникальные ссылки и получать сообщения анонимно.",
        terms_h3: "3. Ответственность пользователей",
        terms_p3: "Пользователи соглашаются:",
        terms_li1: "Использовать сервис только в законных целях",
        terms_li2: "Не отправлять оскорбительные, угрожающие или унижающие сообщения",
        terms_li3: "Не распространять вредоносные, незаконные или неприемлемые материалы",
        terms_li4: "Уважать конфиденциальность и права других пользователей",
        terms_li5: "Не пытаться использовать уязвимости сервиса или нарушить его безопасность",
        terms_h4: "4. Запрещённый контент",
        terms_p4: "Строго запрещено:",
        terms_li6: "Разжигание ненависти или дискриминационные высказывания",
        terms_li7: "Угрозы насилием или причинением вреда",
        terms_li8: "Преследование или травля",
        terms_li9: "Незаконная деятельность или материалы",
        terms_li10: "Спам или нежелательные рекламные сообщения",
        terms_li11: "Вредоносные программы или код",
        terms_h5: "5. Конфиденциальность и данные",
        terms_p5: "Сервис разработан с учётом конфиденциальности. Мы храним только хешированные ID пользователей и выбранный язык. Содержимое сообщений не записывается и не сохраняется. Подробнее см. в политике конфиденциальности.",
        terms_h6: "6. Отказ от гарантий",
        terms_p6: "Сервис предоставляется \"как есть\" без каких-либо гарантий, явных или подразумеваемых. Мы не гарантируем бесперебойную или безошибочную работу сервиса.",
        terms_h7: "7. Ограничение ответственности",
        terms_p7: "Мы не несём ответственности за косвенные, случайные, особые или последующие убытки, возникшие в результате использования сервиса или невозможности им пользоваться.",
        terms_h8: "8. Изменения условий",
        terms_p8: "Мы оставляем за собой право изменять эти условия в любое время. Продолжая пользоваться сервисом после внесения изменений, вы принимаете обновлённые условия.",
        terms_h9: "9. Прекращение",
        terms_p9: "Мы оставляем за собой право приостановить или прекратить доступ к сервису для любого пользователя, который нарушает эти условия или занимается запрещенной деятельностью.",
        cookie_title: "Политика использования cookie",
        cookie_updated: "Последнее обновление: 27 октября 2026",
        cookie_h1: "1. Хранение данных в браузере",
        cookie_p1: "Сайт не использует файлы cookie и не определяет ваше местоположение. Если выбранный язык не сохранён, сайт локально выбирает его по настройкам браузера. Выбранный язык сохраняется в локальном хранилище только после вашего согласия.",
        cookie_h2: "2. Данные в локальном хранилище",
        cookie_p2: "В локальном хранилище браузера сохраняются следующие данные:",
        cookie_table_name: "Название",
        cookie_table_type: "Тип хранения",
        cookie_table_purpose: "Назначение",
        cookie_table_duration: "Срок хранения",
        cookie_row1_name: "language",
        cookie_row1_type: "Локальное хранилище",
        cookie_row1_purpose: "Сохраняет выбранный язык после нажатия «Принять»",
        cookie_row1_duration: "До очистки данных браузера",
        cookie_row2_name: "cookieConsent",
        cookie_row2_type: "Локальное хранилище",
        cookie_row2_purpose: "Сохраняет ваш выбор — разрешить или запретить сохранение языка",
        cookie_row2_duration: "До очистки данных браузера",
        cookie_h3: "3. Стороннее отслеживание",
        cookie_p3: "Сайт не использует сторонние хранилища, аналитику, маркетинговые или отслеживающие скрипты.",
        cookie_h4: "4. Ваш выбор",
        cookie_p4: "Сайт локально выбирает язык по настройкам браузера. В баннере можно выбрать, сохранять ли язык между посещениями:",
        cookie_li1: "Принять: выбранный язык сохранится в локальном хранилище и восстановится при следующем посещении",
        cookie_li2: "Отклонить: язык не сохраняется; при следующем посещении он снова будет выбран по настройкам браузера",
        cookie_h5: "5. Управление данными браузера",
        cookie_p5: "Вы можете очистить локальное хранилище сайта в настройках браузера. Это удалит сохранённый язык и ваш выбор, а при следующем посещении баннер появится снова.",
        cookie_li3: "Просмотреть данные, сохранённые сайтом",
        cookie_li4: "Очистить данные, сохранённые этим сайтом",
        cookie_h6: "6. Обновления этой политики",
        cookie_p6: "Мы можем время от времени обновлять эту политику. Актуальная версия будет доступна на этой странице."
    },
    ua: {
        nav_home: "Головна",
        nav_privacy: "Політика конфіденційності",
        nav_terms: "Умови використання",
        nav_cookies: "Політика використання файлів cookie",
        footer_privacy: "Конфіденційність",
        footer_terms: "Умови",
        footer_cookies: "Файли cookie",
        hero_title: "Надсилайте повідомлення, не розкриваючи особу",
        hero_desc: "Telegram-бот для надсилання анонімних повідомлень за унікальними посиланнями. Вміст повідомлень не зберігається.",
        hero_note: "Щоб використовувати цього бота, вам потрібно розмістити його самостійно з власним токеном бота Telegram та базою даних.",
        feature1_title: "Хешовані ID користувачів",
        feature1_desc: "Перед збереженням ваш ID у Telegram хешується за допомогою SHA-256 і солі, а не зберігається у вихідному вигляді.",
        feature2_title: "Повідомлення не зберігаються",
        feature2_desc: "Повідомлення проходять напряму через сервери Telegram. Ваша база даних ніколи не зберігає вміст повідомлень або метадані.",
        feature3_title: "Підтримка кількох мов",
        feature3_desc: "Бот доступний англійською, російською та українською мовами.",
        cookie_text: "Сайт вибирає мову за налаштуваннями браузера, не визначаючи ваше місцезнаходження. Натисніть «Прийняти», щоб зберігати вибрану мову між відвідуваннями, або «Відхилити», щоб наступного разу мова знову визначалася за налаштуваннями браузера. ",
        cookie_learn: "Дізнатися більше",
        cookie_reject: "Відхилити",
        cookie_accept: "Прийняти",
        privacy_title: "Політика конфіденційності",
        privacy_updated: "Останнє оновлення: 27 жовтня 2026",
        privacy_h1: "1. Інформація, яку ми збираємо",
        privacy_p1: "Ми збираємо мінімальну інформацію, необхідну для роботи сервісу:",
        privacy_li1: "Хешований ID користувача: ваш ID у Telegram хешується за допомогою SHA-256 із додатковою сіллю перед збереженням",
        privacy_li2: "Вибрана мова: мова інтерфейсу (двосимвольний код: en, ru або ua)",
        privacy_li16: "Налаштування браузера: після вашої згоди сайт зберігає вибрану мову та ваш вибір у локальному сховищі браузера",
        privacy_h2: "2. Інформація, яку ми не збираємо",
        privacy_important: "Важливо:",
        privacy_p2: "Ми не зберігаємо й не записуємо:",
        privacy_li3: "Вміст повідомлень",
        privacy_li4: "Метадані повідомлень",
        privacy_li5: "Імена користувачів або реальні імена",
        privacy_li6: "IP-адреси",
        privacy_li7: "Будь-яку інформацію, за якою можна встановити особу, крім хешованих ID користувачів",
        privacy_h3: "3. Зберігання та безпека даних",
        privacy_p3: "Ми захищаємо збережені дані таким чином:",
        privacy_li8: "ID користувачів хешуються за допомогою SHA-256 із сіллю перед збереженням",
        privacy_li9: "Дані зберігаються в базі даних Turso.",
        privacy_li10: "Вміст повідомлень ніколи не зберігається в нашій базі даних",
        privacy_h4: "4. Зберігання даних",
        privacy_p4: "Ми зберігаємо тільки мінімальні дані, необхідні для роботи сервісу:",
        privacy_li11: "Хешовані ID користувачів і вибрана мова зберігаються, доки ви не попросите видалити дані",
        privacy_li12: "Вміст повідомлень не зберігається",
        privacy_h5: "5. Обмін даними",
        privacy_p5: "Ми не передаємо ваші дані третім особам. Повідомлення передаються напряму через інфраструктуру Telegram.",
        privacy_h6: "6. Ваші права",
        privacy_p6: "Ви маєте право:",
        privacy_li13: "Запросити видалення ваших даних з нашої бази даних",
        privacy_li14: "Змінити мовні переваги в будь-який час",
        privacy_li15: "Припинити використання сервісу в будь-який час",
        privacy_h7: "7. Конфіденційність дітей",
        privacy_p7: "Сервіс не призначений для дітей віком до 13 років. Ми свідомо не збираємо інформацію про дітей віком до 13 років.",
        privacy_h8: "8. Міжнародна передача даних",
        privacy_p8: "Ваші дані можуть зберігатися й оброблятися на серверах за межами вашої країни. Користуючись сервісом, ви погоджуєтеся на таку передачу даних.",
        privacy_h9: "9. Зміни в політиці конфіденційності",
        privacy_p9: "Ми можемо час від часу оновлювати цю політику конфіденційності. Актуальна версія буде доступна на цій сторінці.",
        terms_title: "Умови використання",
        terms_updated: "Останнє оновлення: 27 жовтня 2026",
        terms_h1: "1. Прийняття умов",
        terms_p1: "Користуючись Telegram-ботом Anonymous Messages, ви погоджуєтеся з умовами використання. Якщо ви з ними не згодні, будь ласка, не користуйтеся сервісом.",
        terms_h2: "2. Опис сервісу",
        terms_p2: "Бот Anonymous Messages надає платформу для надсилання анонімних повідомлень один одному через Telegram. Сервіс дозволяє користувачам генерувати унікальні посилання та отримувати повідомлення анонімно.",
        terms_h3: "3. Відповідальність користувачів",
        terms_p3: "Користувачі погоджуються:",
        terms_li1: "Використовувати сервіс тільки в законних цілях",
        terms_li2: "Не надсилати образливі, загрозливі чи принизливі повідомлення",
        terms_li3: "Не поширювати шкідливі, незаконні чи неприйнятні матеріали",
        terms_li4: "Поважати конфіденційність та права інших користувачів",
        terms_li5: "Не намагатися використовувати вразливості сервісу або порушувати його безпеку",
        terms_h4: "4. Заборонений вміст",
        terms_p4: "Суворо заборонено:",
        terms_li6: "Висловлювання, що розпалюють ненависть, або дискримінаційні матеріали",
        terms_li7: "Погрози насильством або заподіянням шкоди",
        terms_li8: "Переслідування або цькування",
        terms_li9: "Незаконна діяльність або матеріали",
        terms_li10: "Спам або небажані рекламні повідомлення",
        terms_li11: "Шкідливе програмне забезпечення або код",
        terms_h5: "5. Конфіденційність та дані",
        terms_p5: "Сервіс розроблено з урахуванням конфіденційності. Ми зберігаємо лише хешовані ID користувачів і вибрану мову. Вміст повідомлень не записується й не зберігається. Докладніше див. у Політиці конфіденційності.",
        terms_h6: "6. Відмова від гарантій",
        terms_p6: "Сервіс надається «як є», без будь-яких явних або непрямих гарантій. Ми не гарантуємо його безперебійну чи безпомилкову роботу.",
        terms_h7: "7. Обмеження відповідальності",
        terms_p7: "Ми не несемо відповідальності за непрямі, випадкові, особливі чи побічні збитки, що виникли внаслідок використання сервісу або неможливості ним користуватися.",
        terms_h8: "8. Зміни умов",
        terms_p8: "Ми залишаємо за собою право змінювати ці умови будь-коли. Продовжуючи користуватися сервісом після внесення змін, ви приймаєте оновлені умови.",
        terms_h9: "9. Припинення",
        terms_p9: "Ми залишаємо за собою право призупинити або припинити доступ до сервісу для будь-якого користувача, який порушує ці умови або займається забороненою діяльністю.",
        cookie_title: "Політика використання файлів cookie",
        cookie_updated: "Останнє оновлення: 27 жовтня 2026",
        cookie_h1: "1. Зберігання даних у браузері",
        cookie_p1: "Сайт не використовує файли cookie та не визначає ваше місцезнаходження. Якщо вибрану мову не збережено, сайт локально вибирає її за налаштуваннями браузера. Вибрана мова зберігається в локальному сховищі лише після вашої згоди.",
        cookie_h2: "2. Дані в локальному сховищі",
        cookie_p2: "У локальному сховищі браузера зберігаються такі дані:",
        cookie_table_name: "Назва",
        cookie_table_type: "Тип зберігання",
        cookie_table_purpose: "Призначення",
        cookie_table_duration: "Термін зберігання",
        cookie_row1_name: "language",
        cookie_row1_type: "Локальне сховище",
        cookie_row1_purpose: "Зберігає вибрану мову після натискання «Прийняти»",
        cookie_row1_duration: "До очищення даних браузера",
        cookie_row2_name: "cookieConsent",
        cookie_row2_type: "Локальне сховище",
        cookie_row2_purpose: "Зберігає ваш вибір — дозволити чи заборонити збереження мови",
        cookie_row2_duration: "До очищення даних браузера",
        cookie_h3: "3. Стороннє відстеження",
        cookie_p3: "Сайт не використовує сторонні сховища, аналітику, маркетингові або відстежувальні скрипти.",
        cookie_h4: "4. Ваш вибір",
        cookie_p4: "Сайт локально вибирає мову за налаштуваннями браузера. У банері можна вибрати, чи зберігати мову між відвідуваннями:",
        cookie_li1: "Прийняти: вибрана мова збережеться в локальному сховищі та відновиться під час наступного відвідування",
        cookie_li2: "Відхилити: мова не зберігатиметься; під час наступного відвідування її знову буде вибрано за налаштуваннями браузера",
        cookie_h5: "5. Керування даними браузера",
        cookie_p5: "Ви можете очистити локальне сховище сайту в налаштуваннях браузера. Це видалить збережену мову та ваш вибір, а під час наступного відвідування банер з'явиться знову.",
        cookie_li3: "Переглянути дані, збережені сайтом",
        cookie_li4: "Очистити дані, збережені цим сайтом",
        cookie_h6: "6. Оновлення цієї політики",
        cookie_p6: "Ми можемо час від часу оновлювати цю політику. Актуальна версія буде доступна на цій сторінці."
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
    updateCookieBannerSpace();
    if (localStorage.getItem('cookieConsent') === 'accepted') {
        localStorage.setItem('language', lang);
    }
}

function updateCookieBannerSpace() {
    const banner = document.getElementById('cookieBanner');
    const content = document.querySelector('.content');
    if (banner && content && banner.classList.contains('show')) {
        content.style.setProperty('--cookie-banner-space', `${banner.offsetHeight + 24}px`);
    }
}

function initLanguage() {
    const savedLang = localStorage.getItem('cookieConsent') === 'accepted'
        ? localStorage.getItem('language')
        : null;
    const browserLanguages = navigator.languages && navigator.languages.length
        ? navigator.languages
        : [navigator.language];
    const browserLang = browserLanguages
        .map(language => language.toLowerCase().split('-')[0])
        .map(language => language === 'uk' ? 'ua' : language)
        .find(language => translations[language]);

    setLanguage(savedLang && translations[savedLang] ? savedLang : browserLang || 'en');
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
        updateCookieBannerSpace();
    }

    const acceptBtn = document.getElementById('acceptCookies');
    const rejectBtn = document.getElementById('rejectCookies');

    if (acceptBtn) {
        acceptBtn.addEventListener('click', () => {
            localStorage.setItem('cookieConsent', 'accepted');
            localStorage.setItem('language', document.documentElement.lang);
            cookieBanner.classList.remove('show');
            const content = document.querySelector('.content');
            if (content) content.style.removeProperty('--cookie-banner-space');
        });
    }

    if (rejectBtn) {
        rejectBtn.addEventListener('click', () => {
            localStorage.setItem('cookieConsent', 'rejected');
            localStorage.removeItem('language');
            cookieBanner.classList.remove('show');
            const content = document.querySelector('.content');
            if (content) content.style.removeProperty('--cookie-banner-space');
        });
    }
}

initLanguageSelector();
initLanguage();
window.addEventListener('resize', updateCookieBannerSpace);
