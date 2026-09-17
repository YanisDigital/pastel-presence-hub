# Анна Шевченко — лендинг психолога (демо)

Портфолио-проект: одностраничный сайт психолога в стиле «Quiet Editorial». Персонаж, отзывы, адрес и контакты вымышлены — сайт работает в демо-режиме (`IS_DEMO` в `src/config.ts`): ссылки на мессенджеры неактивны, форма записи ничего не отправляет.

**Live:** https://yanisdigital.github.io/pastel-presence-hub/

## Стек

React 18 · TypeScript · Vite · Tailwind CSS · shadcn/ui (Radix) · Fraunces + Manrope · UA/RU локализация

## Запуск

```bash
npm ci
npm run dev
```

`npm run build` — продакшн-сборка в `dist/`, `npm test` — vitest.

## Деплой

Пуш в `main` запускает workflow `.github/workflows/deploy.yml`, который собирает сайт и публикует его на GitHub Pages. Базовый путь `/pastel-presence-hub/` задан в `vite.config.ts`; при переносе на другой домен поменяйте его и абсолютный `og:image` в `index.html`.

## Лицензии

Шрифты Fraunces и Manrope — SIL Open Font License. Портрет и обложка сгенерированы ИИ — реальных людей на сайте нет.
