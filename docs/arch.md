## ![GWPS Frontend Boilerplate](rr-logo.png) GWPS Frontend Boilerplate

# Архитекрура

Проект состоит из следующих файлов/папок:


├─ build  – готовая сборка

├─ config – таски/конфиги сбощика

├─ src - исходники

│   ├─ components - компоненты

│   │   ├─ config - конфигурация сайта

│   │   ├─ icon - компонент SVG  иконки

│   │   ├─ sprite - компонент PNG  спрайта

│   │   ├─ ui-guide - компонент UI  Kit

│   │   ├─ javascript - компонент подключения скриптов на страницу

│   ├─ fonts  - шрифты

│   ├─ icons - SVG  иконки

│   ├─ js - скрпиты

│   │   ├─ core - вспомогательные скрипты

│   │   ├─ helpers - полифилы

│   │   ├─ main.js - главный скрипт (точка входа)

│   ├─ layouts - схемы страницы

│   │   ├─ _default.pug - схема по умолчанию

│   ├─ pages - страницы

│   │   ├─ index.pug - Главная страница

│   ├─ public - Публичная папка

│   │   ├─ favicons - фавиконки

│   │   ├─ images - изображения

│   │   ├─ .htaccess - настройки веб-сервера

│   ├─ scss - стили

│   │   ├─ helpers - вспомогательные стили/переменные/миксины

│   │   ├─ _common.scss - главный файл пользовательских стилей

│   │   ├─ _fonts.scss - подключение шрифтов

│   │   ├─ main.scss - главный файл стилей (точка входа)

│   ├─ sprite - PNG иконки из которых генерируется спрайт

├─ tmp - Папка для временных файлов генерируемых сборщиком

├─ tools - Вспомогательные инструменты для сборщика

├─ .babelrc - конфиг babel

├─ .browserlistrc - конфиг browserlist

├─ .editorconfig - конфиг редактора

├─ .gitignore

├─ .gitlab-ci.yml.template  - конфиг gitlab-ci

├─ ci-notify.sh  - скрипт  уведомлений gitlab-ci

├─ backend.js - заглушка для бекэнда

├─ gulpfile.babel.js  - точка  входа  сборщика

├─ package.json

├─ postcss.config.js - конфиг postcss

├─ settings.js - настройка переменных (не завершено)

├─ sw-precache-config.js - конфиг сервис воркера

├─ webpack.config.babel.js - конфиг webpack