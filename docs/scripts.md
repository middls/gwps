## ![GWPS Frontend Boilerplate](rr-logo.png) GWPS Frontend Boilerplate

# Скрипты
Для написания скриптов можно использовать ES6. Главным файлом (точкой входа) является ```src/js/main.js```.

Скрпиты для компонентов размещать в папке компонента и описывать только логику компонента.

Компоненты можно описывать в виде плагина, используя вспомогательный файл ```Plugin.js```

Пример плагина:

```javascript
//Импортируем нужные инструменты

import Plugin,  { init } from  "@/modules/_utils/Plugin";

class  Accordion extends Plugin {

defaults()  {

return {

//Опции по умолчанию, например

itemsSelector: `[data-item]`

};

}

init()  {

//Инициализация плагина

}

buildCache()  {

//Описываем внутренние переменные

this.items =  this.element.querySelectorAll(this.options.itemSelector)

}

bindEvents()  {

//Навешиваем события на нужные элементы

}

//Пользовательские функции

}

export default  init(Accordion, "accordion");
```
Затем в main.js  подключаем наш плагин

```javascript
//Импортируем  плагин

import Accordion from  "../components/accordion/accordion.js";



//Вызываем  плагин

Accordion(".accordion");
```