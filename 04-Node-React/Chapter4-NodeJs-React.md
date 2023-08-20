h# Node

## 01. Введение. Установка. Настройка окружения.

### Глоссарий

`node.js` - программная платформа
` package.json`` - файл конфигурации для проектов на nodeюоы
 `npm`` - node package manager
`модуль`` - фрагмент кода

`repl`` - read evaluate print loop. Интератиный интерпретатор node.

### Node.js

- Асинхронная - работает не в блокирующем режиме и можно делать много опреаицй без блокировок
- событийно оринетированная - использует цикл событий для обработки событий (event driven). Функции подписаны на события, и когда происходят события, то event listener будут это обрабатывать, захватывать.
- Написана на движке V8, который использует также Google Chrome.
- JavaScript - удобно, не надо учить другие языки.
- широкое применение - апи, iot, серверы, и другие приложения

### npm

Node Package Manager
Позволяет лекго утсанавливать различные модули.

Устанавливая Node.js обычно автоматически ставится и npm. Npm достает пакеты из единого репозитория.

```bash
npm install
```

Устанавливает пакеты из репозитория в каталог `node_modules`. Список пакетов прописан в файле `package.json`.

### nvm

Node Version Manager
Можно управлять версиями ноды через nvm

- `nvm -v` - версия nvm
- `nvm list-remote` - список доступных версий node
- `nvm install 18.17` - установить версию node.js v18.17

### Инициализация проекта

```bash
npm init
```

или `npm init -y` (на все вопросы по ответ умолчанию) - это инициализация текущего каталога, как каталога проекта. При этом моздается файл `package.json` в текущей директории.

#### Установка пакетов

Установим, напрмиер, **jest** - пакет для тестирования.

```bash
npm install jest
```

Установка пакета `jest`. При этом этот пакет добавляется в `package.json` и сам покет копируется в каталог `node_modules`. При этом устанавливается сам пакет и все его зависимости.

##### dev dependencies

Dev dependencies - нужны только для работы в процессе разработки на текущем компьютере или другим разработчикам этой программы.
В финальный билд на продакшен дев-депенденсис не загружаются.

#### ESLint

```bash
npm install --save-dev eslint
```

EsLint - линтер, который помогает писать код по определенным международным стандартам.
Инициализация

```bash
npx eslint --init
```

При инициализации надо будет ответить на несколько вопросов.
Рекомендация использовать стиль Airbnb, как наиболее распространенный.

После инициализации созадстся файл `.eslintrc.json`.

#### Prettier

Для автоматического испроавления можно установить prettier.
Prettier - форматировщик кода.

```bash
npm install --save-dev prettier
```

По умолчанию eslint и prettier не дружат. Их надо подружить.
Устанавливает третий пакет

```bash
npm install --save-dev eslint-config-prettier
```

Но еще надо попроавить конфиг `.eslintrc.json`

```json
"extends": ["prettier"]
```

Теперь можно установить дополнение `ESLint` и `Prettier - Code Formatter` из катклога дополнений в VSCode.
Теперь надо зайти `Preferences` -> ` Setting` VSCode ввести слово

- поиск по слову `format` и найти настройки.
  - Editor Format On-Save [x]
- поиск по слову `formatter` -
  - раздел Formatte - устновить как Prettier

#### `.eslintrc`

- `rules` - правила, которые можно изменять

Например, отключим проверку на то, чтобы не было вывода в консоль и проверку на соответствие типов в prop-types:

```json
"rules": {
    "react/prop-types": "off",
    "no-console": "off",
}
```

#### Удаление модуля

```bash
npm uninstall jest
```

Удаление пакета и зависимостей

### `package-lock.json`

можно заливать а можно и не заливать в гит. Официально нужно заливать. Он фиксирует версии пакетов установленных.

## Репозиторий для домаших работ

Пушим домашки каждую в свою ветку.

```bash
git push origin homework-1
```

Через pull-request заливаем домашки в master ветку

Требование к именам коммитов:

- refactor:
- feat:
- docs: added doc
- init: created package.json

Надо дабавить в коллабораторы `@temir-cs`

Создаем пулл request и в ревьюверы установить препоавателя.

## homework-1

- создать репозиторий
- создать ветку
- настроить проект как на лекции
- eslint, prettier
- isPrime.js - есть такой файл. Он оперделяет является лич ило простое `node isPrime 5`

`git reset --hard HEAD~2` - откатиться на 2 коммита назад в мастере
`git push origin master` - залить в мастер
`git push origin master --frorse` - залить в мастер силовым методом

## 02 Введение в React

Реакт библиотека для создания польваотельских интерфейсов.
На голос JS это очень долго и дорого.
В реакте все основано на компонентах

- компнентный подход
  - Переиспользуемые компоненты
  - свои состояния
  - своя логика
  - переиспользуется в разичных частях программы
- Virtual DOM (V-DOM)
  перерерисовываются только необходимые части страницы. Определяется разница между текущим и будущим состоянием и перерсовыается только разница.
- однонаправленный поток данных
  Используется концепция проксов и стейтов. Данные идут сверху вниз.

Примеры

- facebook
- netflix
- airbnb

### Компоненты

Любой интерфейс состоит из компонент
Весь калькулятор это один компонент, который, в свою очередь, состояит из других компонентов.
Можно разложить на дерево компонентов.

- app
  - navbar
  - mainpage
    - header
    - section
      - ...
    - table
  - footer

1. Компоненты переиспользуемые. Из легче импортировать. Реализуется принцип DRY.
2. Разделение ответствености. Не заставляем одну сущность выполнять слишком много действий.

React компонент состоит из css, html и js.

React это своеобразная реализация декларативного подхода.

- При императивном подходе мы шаг за шагом указываем что делать компьютеру. Сначала создаем элемент, потом его добавляем, потом обавляем классы, и т.д.
- при декларативном подходе пишем что хотим видеть - такой компонет с такими данными и получаем его

С помощью реакта мы строим свои собственные элементы.
Angular - фреймворк от компании гугл. Vue - тоже фреймворк. А React это больше бибилиотека, которая позволяет строить интерфейсы. Он гибче. Его функционал расширяется дополнительными библиотеками.

### Установка React приложения

```shell
npx create-react-app my-react-app
```

Т.к. приложение нужно `create-react-app` только один раз, мы его не устанавливаем, а только запускаем приложение, без утсановки. С установкой было бы `npm create-react-app`.
Таким образом скачается `create-react-app` и запустится. Локально в пакеты не добавятся. Потом приложение удалится.

Линтеры и преттиеры настраиваются отдельно.

```shell
cd my-react-app
npm install --save-dev eslint
npx eslint --init
npm install --save-dev prettier
npm install --save-dev eslint-config-prettier
```

Добавляем `prettier` в файл **eslintrc**:

```json
"extends": [
        "plugin:react/recommended",
        "airbnb",
        "prettier"
    ],
```

### Запуск React приложения

Команды прописанная внутри файла **package.json** в разделе `scripts` являются скриптами, которые запускаются при помощи команды `npx run имя_скрипта`.
Скрипт `start` запускается командой `npm run start` или `npm run`.

Запустим сервер разработки:

```shell
npm run start
```

По-умолчанию создается много дополнительных файлов, которые не нужны на первых порах. И также линтер будет ругаться на некоторые несооответствия. Устраним их:

1. Починим под линтер

   - изменяем расширение файла
     `/src/index.js` - `index.jsx`
   - изменяем расширение файла
     ` /src/App.js` -> `App.jsx`
   - добавляем в файл `/src/App.jsx` строчку импорта бибилотеки React:

     ```javascript
     import React from "react";
     ```

2. Можно удалить все файлы, кроме:

   - `/public/index.html`
   - `/src/`
     - `App.css`
     - `App.jsx`
     - `index.css`
     - `index.jsx`

И надо удалить из файлов неиспользуемые компоненты, которые только что удалили.

#### App.jsx

В итоге файл **App.jsx** примет следующий вид:

```jsx
import React from "react";
import "./App.css";

function App() {
  return <div className="App">Hello React!</div>;
}

export default App;
```

#### Index.jsx

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
```

### точка входа

`/src/index.jsx` - точка входа.
react dom - часть реакта, отвесающий ра манипуляцию дом
`index.css` - импорт css файла через jsx интерпретатор. Работает только для css внутри jsx.

root =

```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
```

```javascript
// <div id='root'> - точка входа в приложение реакт
const root = ReactDOM.createRoot(document.getElementById("root"));
```

Потом вызываем меод рендер, где что=то похожее на html
.Можно удалить StrictMode/
App - наш главный компонент, из файлв `App.jsx`

```javascript
root.render(<App />);
```

`App.jsx`
Каждый компонент в реакт будет функцией.

```javascript
import React from "react";
import "./App.css";

function App() {
  return <h2>Hello React!</h2>;
}

export default App;
```

Функция возвращает html в специальном формате, который понимает интерпретатор jsx.
JSX - специальный формат, который позволяет использовать частично css и html

JSX - JavaScript Xml. Перед выполнения он транскрибирвется в JavaScript например, при помощи Babel.
Babel компилирует JSX в React.createElement()

```javascript
const element = <h1 className="greeting">Привет, мир!</h1>;
```

### Создание компонент

`/components/ExpenseItem.jsx`
Из одного компонента, должен возвращаться один компонент, т.е. только один тег, вк отором может быть много вложенных, а не несколько дивов, напрмиер.
Если возвращается несколько элементов, то можно использовать пустой компонент

```jsx
function SomeElements() {
  return (
    <>
      <p>Первый элемент</p>
      <p>Второй элемент</p>
    </p>
  );
}
```

В результате вернется элемент, в котором содержится несколько тегов, которые будут рендерится как два отдельных тега.

### prop.Types

Чтобы отключить проверку типов в реакте eslinter'ом нужно отключить проверку propTypes в `eslint.json`:

```json
"rules": {
  "react/prop-types": "off"
}
```

## Props, State

### css

```jsx
import "./Component.css";

// ...

return <div className="big_div_class"> </div>;
```

### props

props - properties? используются для передачи от родительских компоненов к дочерним компонентам.

Parent -> (pass Props) -> Child
Child -> (emit events) -> Parent

Родитель передает потомку props, а потомок может выстреливать ивенты, которые хэндлит родитель.

Таким образом реализвется отнонапавленный поток данных от родителей к потомкам.

Почему обязательно возвращает только один элемент из компонента?
Как бы это выглядело, если бы мы писали на JavaScript, а не на JSX?

```javascript
function App() {
  return React.createELement(
    "div",
    { className: "App" },
    React.createElement("h2", {}, "Мои финансы"),
    React.createElement(Expenses, { expenses: expenses })
  );
}
```

JSX - синтксический сахар, реализиующий сахар.
А наша функция возвращает всегда один результат. Т.к. JSX реализуется как функция, то и там должны возвращаться только один результат.

### State

https://ru.legacy.reactjs.org/docs/hooks-state.html

Состояние - относится к структуре данных, которые содержат данные, необходимые для рендеринга и поведения компонента, и которые могут меняться со времене.

Когда состояние меняется, то Реакт перерисовыает компонент, чтобы отразить компоненты.
State у каждого компонента свой.

| Props                                 | State                                  |
| ------------------------------------- | -------------------------------------- |
| read-only                             | can by asynchronous                    |
| cannot be modified inside componensts | state can be changed inside components |

В случае ивета выстреливает событие.
Клик по нажатию на кнопку.

```jsx
<div onClick={() => {console.log("Click!!!")}}>
```

Хуки - специальные функции, котоыре помогают делать побочные эффекты.
Все хуки начинабтся с ключевого слова `use` (конвенция).

`useState` используется для добавляния состояния

```jsx
import { useState } from "react";

function Component({ title }) {
  const [title, setTitle] = useState(title);


  fucntion clickHandler() {
    setTitle('Новое название');
  }

  return <button onClick={clickHandler}>{title}</button>;
}
```

```jsx
import { useState } from "react";

function Component({ title }) {
  const [text, setText] = useState(title);


  funсtion clickHandler() {
    setText('Новое название');
  }

  return <button onClick={clickHandler}>{text}</button>;
}
```

`setText` - функция для обновления `text`. Она триггерит обновление компонента.
При этом обновляется только `text`, а не `title`.
`useState` - единственные легальный способ ререндерить компонент.

## Прочитать

[Использование хука состояния](https://ru.legacy.reactjs.org/docs/hooks-state.html)

## Anna

Подход к написанию useState.
Канут глупый компонент, который принимает пропсы и их рендерит.
Включая коллбеки, которые он вешает на кнопки.
Таким образом можно управлять компонентом выше.

## 4

Если езменяется state или props, то компонент перерендивается.
Ререндер умный и фактически в бразуере будет меняться только то, что файтически изменилось в браузуре. Ререндер - не само приложение перересовывает, а запуск алгорита перерасчета и затем обновления того что обновилось.

Передача данных вверх.
Обратная связь реализуется через функцию родителя, которую вызывает потомок и передает ей данные.
Название функции передается потомку от родителя через пропсы.

Когда обновляем стейт от предыдущего стейта, надо useState делать от функции, в которую передаем предыдущее состояние единственным аргументом.
Иначе из-за асинхронности могут возникнуть проблемы.

```jsx
setUserInput((prevInput) => ({ ...prevInput, enteredAmount: value }));
```

Statefull компоненты - умные компоненты со стейтом.
Компонент оберка со стейтом - statefull
Просто принимает даннве и их отображает - stateless.

## 05

Многие перешли на `vite`

vite react
примерно то же что и npx create-react-app
но не загружает модули
Делает почти мгновенно

```bash
npm create vite@latest
```

SWC (Speedy Web Compiler) - это вместо Babel. Babel работал на javascript, то SWC работает на Rust.

У vite немного по другому расположены файлы в проекте.

Если еомпонент оборачиваем вокруг другого. То все что сежду открывающим и закрываюзим тегом помещается в `props.children`

```jsx
return <div className={`card ${props.className}`}>{props.children}</div>;
```

После распаковки компонент у них у всех будут свои классы.

### Фрагменты, порталы, ref

Можно обрачивать ретурн компонента в `<> </>` -это то
`<React.Fragment><React.Fragment/>`

```jsx
function Fragment(props) {
  return {props.children};
}
```

Если каким то еде=лементом перерываем, то семантически неверно, чтобы перекрывабщий жлемент лежал нутри перекрываемых элементов. И надо перекрывабщий жлемент выносить сверху в дом дереве.

Порталы помогают преенести компоненты в любое место страницы
index.html

```html
<div id="overlay-root"></div>
```

```jsx
import ReactDOM from "react-dom";
//...
return (
  <>
  {ReactDOM.createPortal(<div>...</div>, document.getElementById('overlay-root'))}
  {ReactDOM.createPortal(<div>...</div>, document.getLementById('modal-root'))}
  </div>
);
```

Чаще всего порталы нежны для модальных окон или для семантики

#### ref

```jsx
import {useRef} from 'react';
...

const nameInputRef = useRef();
console.log(nameInputRef.current);
...
return (<imput name="username" ref={nameInputRef}>)
```

Если мы напрфмую управляем html, то мы нивелируем плюсы реакта. Но иногда проще использовать ref.
По правилам реакта управлять DOM деревом через ref плохо

## 06 `useEffect` `useContext`

если что-то не ставиться можно удалить package.lock.json

### useEffect

effect - sideEffect

```jsx
useEffect(() => {
  const storageUserStatus = localStorage.getItem("isLoggedIn");

  if (storageUserStatus === "true") {
    setIsLoggedIn(true);
  }
}, []);
```

ырнутри этой функции мы провалимся только тогода изменится массив зависимостей

Кгда sideEffect
Функция отрбаотает после компонента, tckb bpvtybkbcm pfdbcbvjcnb/
Если в зависимостях ничего нет, то функция отработает только оидн раз. (если константа, то тоже отрабоатет один раз)

return фнукция работает каждый раз, когда отработает useEffect. Уборщицв работает перед последним вызовом useEffect.
Или во время компонент вычищается (выходим со страницы).
Маунт - первое появление компонента
Уборщица отрабатывает и вов ремя АнМайнта - когда компонент исчезает со страницы

Не надо добавлять в массив зависимостей

- стейты,
- localStorage и т.д. api браузера и т.д.
- переменные вне компонента, т.к. они не отслеживатся в компонентп

### Context

В Реакте можно передавать данные через контекст апи.
Контекст - механизм, который помогает передавать данные между компонентами

```js
import React from "react";

const AuthContext = React.createContext({<значение по-умолчанию>});
```

```js
import React from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
});

export default AuthContext;
```

AuthContext - не копонент, Provider - уже компонент

```jsx
import AuthContext from "./context/auth-context";
...
  return (
    <AuthContext.Provider value={{ isLoggedIn: false }}>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </AuthContext.Provider>
  );
```

```jsx
return (
  <AuthContext.Consumer>
    {(contextData) => {
      <nav className="nav">
        <ul>
          {contextData.isLoggedIn && (
            <li>
              <a href="/">Users</a>
            </li>
          )}
          {contextData.isLoggedIn && (
            <li>
              <a href="/">Admin</a>
            </li>
          )}
          {contextData.isLoggedIn && (
            <li>
              <button onClick={onLogout}>Logout</button>
            </li>
          )}
        </ul>
      </nav>;
    }}
  </AuthContext.Consumer>
);
```

### Хуки

https://ru.legacy.reactjs.org/docs/hooks-overview.html
Хуки - это функции, с помощтью которых можно подцепиться к состоянию и методам жизненного цикла Реакт из функциональных компонентов.
Хуки не работают внутри классов - они дают возможность использовать React без классов.

#### useEffect

https://it-dev-journal.ru/articles/kak-bystro-ponyat-huk-use-effect-v-react

В реакт компоненты проходят различные жизненные стадии.

- **монтирования** - компонент создается и всавляется в модель DOM
- **обновление** - компонент повторно визуализируется из-за обновлений его пропсов или состояния
- **размонтирования** - компонент удаляется из модели DOM

##### useEffect c пустым массивом зависимостей

Если передать пустой массив зависимостей, это значит что эффект запустится только один раз, когда компонент монтируется. Это полехно для одноразовых инициплизаций или подписки на события, котоыре не изменяются со временем.
Вариантом использования для этого может быть получение данных из API:

```jsx
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://mock-api.com")
      .then((response) => response.json())
      .then((apiData) => setData(apiData));
  }, []);

  return <div>{data && data.message}</div>;
}

export default App;
```

В этом примере при монтировании компонента проихсодит обращение к внешнему ресурсу и данные помещаются в сотояние. При получении данны проихсодит изменение состояния компонента, компонент перерисовывается и выводятся данные, которые были получени в useEffect.

##### useEffect с массивом зависимостей

Когда используется `useEffect(() => {}, [a, b])`, то функция в useEffect выполняется при монтировании компонента и при изменении значений в переменных в массиве зависимостей.
Примером может быть функция поиска:

```jsx
import { useState, useEffect } from "react";

function FilterableLsit({ items }) {
  const [filter, setFilter] = useState();
  const [filteredItems, setFilteredItems] = useState(items);

  useEffect(() => {

    const filtered = items.filter(item => item.toLowerCase().includes(filter.toLowerCase()));
    setFilteredItems(filterd.length === 0 ? items : filtered);

  }, [filter, items]);

  return
  <div>
    <input type="text" value={filter} onChange={(e) => setFilter(e.target.value)}>

    <ul>
      {filteredItems.map(item => <li key={item}>{item}</li>)}
    </ul>
  </div>;
}

export default FilterableList;
```

В этом примере хук useEffect будет запускаться при монтировании, а также при каждом изменении фильтра или переданных значений `items`.

##### useEffect без массива зависимостей

Использование useEffect без массива зависимостей приведет выполнению эффекта при каждом рендеринге компонента (при изменении состояний или пропсов). Это может привести к поблемам с производительностью и неожиданному поведению, особенно если в эффекте обновляется состояние компонента.

#### Полное руководство по Контексту. useContext

https://medium.com/nuances-of-programming/%D0%BF%D0%BE%D0%BB%D0%BD%D0%BE%D0%B5-%D1%80%D1%83%D0%BA%D0%BE%D0%B2%D0%BE%D0%B4%D1%81%D1%82%D0%B2%D0%BE-%D0%BF%D0%BE-react-context-2021-dc8fd08db68e

Реакт контекст позволяет без использования props передавать и потреблять данные в любом компоненте приложения.
Возможные примеры использования:

- изменение темы приложения
- пользвательские данные, прошедшего аутентификацию пользователя
- зависящие от местоположения пользвоателя данные (язык, регион, валюте, время)

В Реакт Контекст следует размещать данные, не требующие частого обновления. Это из-за того, что Контекст предназначен для упрощения процесса использования данных. И не предназначен для управления данными. Конекст реакта можно рассматривать как аналог глаальных переменных в других языках програмирования.

Реакт контекст помогает избавиться от пробрасывания props (**props drilling**).

```jsx
function App({ theme }) {
  return (
    <>
      <Header thene={theme} />
      <Main theme={theme}/>
      <Sidebar theme={theme}/>
      <Footer theme={theme} />
    </Sidebar>
  );
}

function Header ({theme}) {
  return (
    <>
      <User theme={theme}/>
      <Login theme={theme}/>
      <Menu theme={theme}/>
    </>
  );
}
```

##### Как использовать React Context

1. Создать контекст, используя `React.createContext`

   ```javascript
   // userContext.js
   import React from "react";

   const userContext = React.createContext();

   export default userContext;
   ```

2. Использовать поставщика, созданного контекста (**context provider**) в качестве оболочки дерева компонентов.
3. Посестить любое необходимое значение в _context provider_ используя prop value.

4. Прочесть любой значение в любом компоненте при помощи **context consumer**.

```jsx
import React from "react";
import userContext from "userContext.js";

function App() {

  return (
    {
      <userContext.Provider value="Reed">
        <User />
      <userContext.Provider/>
    }
  );
}

function User () {
  return (
    <>
      <userContext.Consumer>
        {(value) => <div>{value}</div>}
      </userContext.Consumer>
    </>
  );
}

export default App;
```

##### Хук `useContext`

В Реакте начиная с версии 16.8 появился хук `useCotext`.

```jsx
improt React, {useContext} from 'react';
import userContext from 'userCotext.js';

function App() {
  return (
    <userContext.Provider value="Reeds">
      <User />
    </userContext.Provider>
  );
}

function User () {
  const value = React.useContext(userContext);
  return (
    <div>{value}</div>
  );
}
```

## Идеи для проектов по реакту

https://medium.com/nuances-of-programming/5-%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%BE%D0%B2-%D0%BD%D0%B0-react-%D0%B4%D0%BB%D1%8F-%D0%BD%D0%B0%D1%87%D0%B8%D0%BD%D0%B0%D1%8E%D1%89%D0%B8%D1%85-7c25e02ea714

### Подключение иконок

```shell
npm install react-icons
```

react-icons.github.io/react-icons/

```jsx
import { AiOutlineClose } from "react-icons/ai";
```

Далее надо импортировать файл и работать с ним как c компонентом React.

### UID generator

```js
const uid = () =>
  String(Date.now().toString(32) + Math.random().toString(16)).replace(
    /\./g,
    ""
  );
```

## 07

Можно вынести весь контекст с провайдером в отдельный компонент внтрь контекста

```jsx
// auth-context.jsx

/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onlogout: () => {},
  onLogin: () => {},
});

function AuthContextProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storageUserStatus = localStorage.getItem("isLoggedIn");

    if (storageUserStatus === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
export { AuthContextProvider };
```

```jsx
//index.jsx

import React from "react";
import ReactDOM from "react-dom/client";

import { AuthContextProvider } from "./context/auth-context";

import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
);
```

### Правила хуков

- useState
- useEffect
- useContext
- useRef

1. Хуки должны быть строго внутри компонентов
2. Хуки не могут вызываться внутри коллбеков.
   Всегда используются на самом внешнем уровне.
3. Старайтесь в `useEffect` класть как можно больше зависимостей.
   Чтобы не было бесконечных циклов.
   Проверять перед тем как скомпилировать проверять все что используем.
   Если может поменяться и не браузерная шутка, то закидываем в массив зависимостей.

### DOM дерево Мемоизация, useCallback

Даэже если функция компонента отработала, не факт что перерисовалось дом дерево элементов в браузере.
Мы сожем оптимизировать механизм работы функций компонентов.

Когда компонент **перерендиватеся** только тогда когда у него поменялось либо **стейт**, либо **пропс**.

Мы можем обернуть компонента в React.memo при экспорте:

```jsx
export default React.memo(Component);
```

Мемоизация хорошо работает с примитивами при передаче их в пропсах.
При передаче ссылочных данных (ака коллбеков, функций) они изменяются и мемоизация не работает

```jsx
useCallback(() => {}, []);
```

useCallback изменяет функцию, только когда, когда изменяется массив зависимостей. И позволяет не изенятся ей, когда компонет перевызывается. Тогда мемоизация будетработать нормально для компонентов, которым передаются функции в пропсах.

В примере ниже функция запомнится и не будет изменяться, т.к. запомнится замыкание и allowToggle не изменится. Для избежания случая нужно внести фддщцЕщппду в массив зависимостей.

```jsx
const toggleParagraphHandler = useCallback(() => {
  if (allowToggle) {
    setShowParagraph((prevState) => !prevState);
  }
}, []); // добавить allowToggle

const allowShowHandler = () => {
  setAllowToggle(true);
};
```

useCallback запоминает функцияю для каждого варианта параметра из списка зависимостей. И высзвает дял каждой комбинации роано 1 раз.

### useMemo

Возвращает значение, зависящее от массива параметров.
useCallback - возвращает мемоизировенную функцию
useMemo - возвраает мемоизированное значение

Как оптимизрвоать - useCallback useMemo

### Классовые компоненты

В целом лекция дл ознакомления. Сорее всего классовые компоненты не будут так часто использоваться как хуки.
Раньше на заре развития реакта (до 16.7) использовались классовые компоненты.

Для исползования классовых компонент надо импорировать класс `Component` из модуля `react`. Или же после ипорта `import React from 'react';` наследовать класс компнента от `React.Component`.

```jsx
import React from "react";
class User extends React.Component {
  render() {
    return <li className="user">{this.props.name}</li>;
  }
}
```

Метод класса `render` отвечает за то как будет выглятеть компонент, по аналогии с функции `return` в функциональном компоненте.

Чаще всего компоненты которые без стейта - как функции.
компоненты со стейтом - классовые компоненты.

Для задания состояния в классов используется `this.state`.
Для изменения состояния есть метод `this.setState()`, который принимает объект или функцию, принимающую предыдущее состояние стейта и возвращающее новое состояние изменившихся полей.
В `setState` не надо передавать значения всех полей, а только тех полей, значения которых изменяются.

Никогда не надо обновлять стейт напрямую!

```jsx
class Users extends React.Component {
  constructor() {
    super();
    this.state = {
      showUsers: true,
    };
  }

  toggleUsersHandler() {
    this.setState((prevState) => ({
      showUsers: !prevState.showUsers,
    }));
  }

  render() {
    const usersList = (
      <ul>
        {DUMMY_USERS.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className="users">
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? "Скрыть" : "Показать"} юзеров
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

export default Users;
```

У реакт компонента есть жизненный цикл.
Если мы в функциональных компонентах использовали `useEffect(() => {}, [])` с `[]` пустым массивом зависимостей в начале жизненного цикла, то
внутри классовых компонентов исползуются методы жизненного цикла.

| классовый метод           | функциональный метод                   | этап жизненного цикла                                |
| ------------------------- | -------------------------------------- | ---------------------------------------------------- |
| `constructor(props)`      |                                        | initialization                                       |
| `componentWillMount()`    |                                        |                                                      |
| `render()`                |                                        |                                                      |
| `componentDidMount()`     | `useEffect(()=>{}, [])`                | монтирование, useEffect с пустыми зависимостями      |
| `shouldComponentUpdate()` |                                        | state/props updated - стоит ли компоненту обновиться |
| `componentWillUpdate()`   |                                        |                                                      |
| `render()`                |                                        |                                                      |
| `componentDidUpdate()`    | `useEffect(() => {}, [zavisimost])`    |                                                      |
| `componentWillUnmount()`  | `useEffect(() = { return (() => {})})` | Размонтирование. Аналог return в useEffect.          |

- `constuctor(`
- `componentWillMount()`
- `render`
- `componentDidMount()` - поведение useEffect(f, []) с пустым массивом зависимостей
- `shouldComponentUpdate()` - при изменении пропсов - иначе не рендерится
- `componentWillUpdate()`
- `render()`
- `componentDidUpdate()` - `useEfect(f, [zavisimost])`
- `componentWillUnmount()` - перед тем как компонент был размонтирован, `useEfect( () => {return ()=>{...}}, [])` - имитирует поведение функции уборщицы в `useEffect`.

Методы жизненного цикла нужны для работы с побочными эффектами (т.е. вместо useEffect). Классовые компоненты не могут использовать хуки.

В чем прикол классовых компонентов - error - boundary.
На данный момент в функциональных компонентах нет возможности эмулировать поведение `componentDidCatch`.
![Alt text](image.png)

#### componentDidUpdate()

При обновлении пропсов или стейте вызывается метод класса `componentDidUpdate()`, который принимает на вход два аргуманта:

1. `prevProps` - предыдыущие пропсы
2. `prevState` - предыдыущее состояние

Важно, что при изменении состояния в этом методе может привести к повторному вызову этогом метода и мы можем плучить бесконечный цикл, если не будет выполнять проверку.

```jsx
componentDidUpdate(prevProps, prevState) {
  if (prevState.searchTerm !== this.state.searchTerm) {
    this.setState({
      filteredUsers: DUMMY_USERS.filter((user) =>
        user.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
      ),
    });
  }
}
```

В классовых компонентах вызов метода `componentDidUpdate` происходит всегда при изменении компонента. Поэтому надо сделать защите от перевызова при изменении компонента внутри.

#### Использование контекста

В классовом компоненте нельзя использовать хуки.
В методе рендер будем оборачивать возвращаемый результат в `Context.Consumer`

```jsx
<UsersContext.Consumer>
  {(context) => {
    <>
      <div className="finder">
        <input type="search" onChange={this.searchChangeHandler.bind(this)} />
      </div>
      <Users users={this.state.filteredUsers} />
    </>;
  }}
</UsersContext.Consumer>
```

Но если нам не нужен контекст в `render`, а нужен в других функциях, то можно использовать такое поле класса, как `contextType`:

```jsx
import UsersContext from '../context/user-context.js';

class UserFinder extends React.Component {
  ...
}

UserFinder.contextType = UsersContext;
```

Если связать поле класса `contextType` с контекстом, то в методах класса можно будет обращаться к полю класса `this.context` для полуения ключей контекста.

```jsx
componentDidMount() {
  this.setState({
    filteredUsers: this.context.users,
  });
}
```
