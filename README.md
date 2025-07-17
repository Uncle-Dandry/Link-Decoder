# Link Decoder

## English

**Originally the idea behind this application was to decode the broken links from my open Chrome tabs suspended by the Tab Suspender extension.** This app provides a quick way to recover your tabs from those garbled URLs.

**Link Decoder** is a small web app that transforms encoded or “broken” URLs (for example, links wrapped by Chrome extensions, email tracking, or automatic archive parameters) back into their original form. Simply paste one or more broken links into the left pane, press **Decode**, and you get a clickable list of restored URLs with **Copy** buttons.

### Description

- **What it does**: Parses each input line as a URL, looks for a `url=` parameter and decodes it, or otherwise returns the line unchanged.  
- **Why it’s useful**: Many browser extensions and services wrap or suspend tabs in encoded URLs. This tool lets you batch‑recover the real destinations at a glance.

### Use Cases

- Recover tabs lost when using Tab Suspender or similar tab‑management extensions.  
- Decode wrapping/tracking links in emails, forums or analytics URLs.  
- Extract clean targets from redirect parameters in bulk.  

---

## Русский

**Изначальный смысл приложения — расшифровка сломанных ссылок моих открытых вкладок, приостановленных Chrome расширением Tab Suspender.** Это приложение — быстрый способ вернуть ваши вкладки из таких «сломанных» URL.

**Link Decoder** — простое веб‑приложение, восстанавливающее исходные адреса из закодированных или обёрнутых ссылок (например, ссылки, приостановленные расширениями, переданные через параметры `url=` в перенаправлениях и т. п.). Вставьте одну или несколько ссылок в левую область, нажмите **Decode**, и справа появится список кликабельных восстановленных URL с кнопками **Copy**.

### Описание

- **Что делает**: Для каждой строки ввода пытается разобрать её как URL, ищет параметр `url=`, декодирует его или возвращает строку как есть, если параметр не найден.  
- **Зачем нужно**: Многие расширения и сервисы оборачивают или приостанавливают вкладки, превращая адреса в громоздкие закодированные ссылки. Этот инструмент позволяет их быстро восстановить.

### Сферы применения

- Восстановление вкладок, потерянных при использовании Tab Suspender и других расширений управления вкладками.  
- Декодирование ссылок‑обёрток и трекеров в письмах, форумах, аналитических URL.  
- Массовое извлечение чистых адресов из редиректов.

---