h# Node

## 01. Введение. Установка. Настройка окружения.

### Глоссарий

`node.js` - программная платформа
`package.json`` - файл конфигурации для проектов на nodeюоы
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

Порталы помогают перенести компоненты в любое место страницы
`index.html`:

```html
<div id="overlay-root"></div>
```

```jsx
import createPortal from "react-dom";
//...
return (
  <>
  {createPortal(<div>...</div>, document.getElementById('overlay-root'))}
  {createPortal(<div>...</div>, document.getLementById('modal-root'))}
  </div>
);
```

Чаще всего порталы нужны для модальных окон или для семантики.

#### ref

```jsx
import {useRef} from 'react';
...

const nameInputRef = useRef();
console.log(nameInputRef.current);
...
return (<imput name="username" ref={nameInputRef}>)
```

Если мы напрямую управляем html, то мы нивелируем плюсы реакта. Но иногда проще использовать ref.
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

Для доступа к контексту внутри компонета надо обернуть его в контекст провайдер.
Провайдеру передаются поля (values), к которым может получить доступ компонент.
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

Внутри компонента надо получить через хук Контекст.

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

#### Компонент ContextProvider

Можно создать в файле с контекстом компонент ContextProvider, который будет возвращать компонент `<Context.Provider> { children } </ Context.Provider>`.

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

#### `render()` `this.props`

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

Для получения к переданным в компонент свойствам используется поле класса `this.props`. Оно еще не определено в конструкторе класса, но будет известно как только компонет замонируется. Поэтому стоит к нему обращться после этого времени жизненного цикла, т.е. в методе `compinentDidMount()` и после.

#### `this.setState()`

Для задания состояния в классов используется метод `this.state()`.
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

#### Error Bondary

На текущий момент есть в классовых компонентах, но нет в функционалных компонентах.

Бывает что в React приложении появляются ошибки и будут сгенерированы исключения.
В классовых компонентах можно перехватить исключения.

В таком случае создается компонент `ErrorBoundary`, который имеет метод `componentDidCatch(error)`:

```jsx
class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error) {
    console.log(`Error:`, error.message);
    this.setState({
      hasError: true,
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error">
          <h2>{error}</h2>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
```

На проектах может быть импользован отдельный **классовый** компонент `ErrorBoundary`, который будет компонентом-обёрткой и будет отлавливать ошибки в компонентах-потомках.
Вместо сообщения в консоли мы можем пользователю выводить осмысленный текст.

Чтобы сбросить ошибку надо проверять в методе `componentDidUpdate` на `state`. Или сделать ссылку, которая будет переводить в другой компонент, задаваить другое состояние и т.п.

#### `createRef` vs `useRef`

https://react.dev/reference/react/createRef
В классовых компонентах вместо хука `useREf` используется функция `createRef`:

```jsx
import { Component, createRef } from "react";

class Form extends Component {
  inputRef = createRef();

  // ...
}
```

### API

#### Как не надо подключаться к приложению

Не надо подключать браузерные приложения (Реакт) напрямую к базам данным.
Должны подключаться через бекенд приложения.

- логины пароли не скрыты в браузере
- проблемы с производительностьюууу

https://swapi.dev/

```jsx
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const transformedMovies = data.results.map((movie) => ({
      id: movie.episode_id,
      title: movie.title,
      openingText: movie.opening_crawl,
      releaseData: movie.releaseData,
    }));
    setMovies(transformedMovies);
  });
```

```jsx
const fetchMoviesHandler = async () => {
  const url = "https://swapi.dev/api/films/";
  const response = await fetch(url);
  const data = await response.json();

  const transformedMovies = data.results.map((movie) => ({
    id: movie.episode_id,
    title: movie.title,
    openingText: movie.opening_crawl,
    releaseData: movie.releaseData,
  }));

  setMovies(transformedMovies);
};
```

### 10. Собственные хуки

Vite использует SWC (swc.rs) Speedy Web Compiler, который написан на Rust. В отличие от Babel, который использует JS.

#### Хуки

Хуки могут быть использованы толкьо внутри компонентов и других хуков.
Хуки собранные из других хуков также должны использваться внутри компонентов.

Кастомные хуки должны всегда начинаться с ключевого слова **use**.
Файлу, в котором хранится хук можно авать разные названия, но самому хуку только начинающиеся с **use**.

```js
// use-counter.js

import React from "react";

const useCounter = () => {
  const [counter, setCounter] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return counter;
};

export default useCounter;
```

Хуку можно преедавать внутри любые параметры, напрмиер функцию, котаря вычисляет значение слудующего шага.

Хук внутри себя является простой функцией. Назвав его с ключевым словом **use** мы говорим реакту, что это будет хук и тогда уже можно использовать его внутри реакт компонентов. И конечно самописный хук нельзя использовать вне компонента.

Можно сделать хук, который будет вохвращать набор функция для работы с данными и сам стейт. ПОтом в разных компонентах можнов ыхывать эти функции, чтобы менять стейт.

Под частые операции пишутся хуки.

Напрмиер в нашем самописном хуке есть два стейта. До того как мы этот хук никуда не прикрепили, они не принадлежат ни одному из реакт компонентов. Как только мы наш хук использвали внутри компонента, то эти стейты прицепляются к компоненту, в котором мы использовали наш хук, и стали стейтами этого компонента.

Хуки надо стараться использовать на первом уровне функций компонента.

#### Передача параметров через контекст

Бывает что хук есть а данные для нео будут готовы только при нажатии на кнопку.
Тогда мы можем вернуть из хука функцию, а когда нажмется кнопка в компоненте мы юудем вызывать эту функцию с нужными нам параметрами.

Если внутри хука вызывается функция, которая получает данные от хука и определана во вне хука:

```jsx
// хук
function useHttp() => {
// sendTastRequest function
  const sendRequest = (requestConfig, transformData) => {
    // ..
    const data = await response.json();
    transformData(text, data);
  };
  return sendRequest;
};
```

, а мы хотим передать ей еще параметры при выходе, то в компоненте биндим её к контексту вызова, например:

```jsx
// Тело реакт компонента
const onСlickHandler = () => {
  // ...
  const sendTaskRequest = useHttp(); // получаем функцию из хука

  const transformData = (taskText, taskData) => {
    const createdTask = { id: taskData.name, text: taskText };
    props.onAddTask(createdTask);
  };
  // ...
  // вызываем функцию из хука и передаем в неё функцию с забинденными параметрами
  // {this: null,  text: taskText}
  sendTaskRequest(requestConfig, transformData.bind(null, taskText));
};
```

#### Зависимости для useEffect

По правилам хуков всегда надо добавлять зависимости, от которых зависит хук useEffect.
Иногда можно избежать зависимости, если компонент или функцию можно поместитть внутрь самого тела хука. Иначе при обхявлении зависимомсти надо следить за тем, чтобы эта зависимость не обновлялась каждый раз при обновлении компонента (как например все переменные передающиеся по ссылке, аля функции). В слечае если есть зависимости надо следаить за тем, чтобы они не обновлялись лишний раз и если они могут обносляться, что использовать useMemo и useCallback.

#### Статьи по кастомным хукам:

1. https://my-js.org/docs/cheatsheet/custom-hooks/
2. https://webtricks-master.ru/react-hooks/custom-hooks-na-primerah-pishem-svoj-useinput-usefetch-usetheme-react-hooks/
3. https://habr.com/ru/companies/otus/articles/729596/

### 11. Formik, Yup. Обработака Форм. Redux

Хорошая практика - двухсторонее связывание input.value и стейтов и value

#### Formik

formik.org

```shell
npm install formik yup --save-dev
```

Нужно для удобной валидации форм.
Чтобы не добавлять кучу стейтов используется библиотека **formik**.
Она помогает упростить работу с формами.

```jsx
import { useFormik } from "formik";
// ...
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      console.log("onSubmit.values:", values);
    },,
  });
  // ...
  <form onSubmit={formik.handleSubmit}>
    <input value={formik.values.firstName} onChange={formik.handleChange}>
    <button type="submit">Отправить</button>
  </form>
```

При сабмите имена в values берутся из названий переменных в initialValues, а не из поля name в input. При изменени элемента handleChange меняются пареенные с названиями совпадающими с полями `name` и/или `id` элемента.

##### валидация через yup

yup - библиотека для валидации

```jsx
import * as Yup from "yup";
// ...
const formik = useFormik({
  initialValues: {
    firstName: "",
    lastName: "",
    email: "",
  },
  onSubmit: (values) => {
    console.log("onSubmit.values:", values);
  },
  validationSchema: Yup.object({
    firstName: Yup.string()
      .max(15, "Слишком много буков в имени")
      .required("обязательно нужно имя"),
    leastName: Yup.string()
      .max(20, "фамилия до 20 символов")
      .required("нужна фамилия"),
    email: Yup.string()
      .email("неправильный формат емеила")
      .required("нежен емеил"),
  }),
});

//...

<form onSubmit={formik.handleSubmit}>
  <div className="input-container">
    <input
      type="text"
      id="firstName"
      name="firstName"
      placeholder="Имя"
      value={formik.values.firstName}
      onChange={formik.handleChange}
    />
    {formik.errors.firstName && <p>{formik.errors.firstName}</p>}
  </div>
</form>;
```

**formik.touched** - содержат имена свойств в кавычках, которые мы успели потрогать

`<input onBlur={formik.handleBlur}>` - отслеивает были ли форма кликнута пользователем

```jsx
<form onSubmit={formik.handleSubmit}>
  <div className="input-container">
    <input
      type="text"
      id="firstName"
      name="firstName"
      placeholder="Имя"
      value={formik.values.firstName}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
    />
    {formik.errors.firstName && formik.touched.firstName && (
      <p>{formik.errors.firstName}</p>
    )}
  </div>
```

#### Git

`git squash` - сжатие коммитов (несколько коммитов в один)
`git cherry pick` - перенос коммитов из одной ветки в другую

#### Redux

У контекста есть проблема - если в нем много всего находится, то его будет тяжело поддерживать.
Можно использовать много контекстов. Но по мере роста прилоежняи будет слишком много оборток контекстов.
Либо слищком большой контекст, либо много обёрток контекстов.

Redux - Отдельная бибилотека, которая даже не написана под реакт.

Приниципы редакс:

- Центральнео хранилище данных = Store
- есть компоненты, которым требуются данные
- есть редкутор функция
- есть actions

Компоненты подписываются на изменение Stora.
Клмпоненты влияют на стор. Они могут отправлять (dispatch) actions (действия).
Действия не могут напрямую влиять на Store. Они передаются в функцию-редуктор. Эта редуктор функция уже меняет (мутирует) Store через изменения State.

```shell
npm install redux
```

```shell
 npm install redux react-redux
```

Надо всегда возвращать новый стейт, а не изменять старый (мутировать). Могут возникнуть проблемы со ссылочными типами данных.

Лучше экшены возвращать и задавать не в виде строки, а в виде констант, которык можно импортировать и использовать.

```js
const INCREMENT = "increment";

export { INCREMENT };
```

#### store

```javascript
// inport redux from 'redux';   // ES6
const redux = require("redux"); // ES5

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type == "increment") {
    return { counter: state.counter + 1 };
  }
  if (action.type == "decrement") {
    return { counter: state.counter - 1 };
  }
  return state;
};

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
// console.log(store.getState());
```

#### react - redux

```shell
npm install react-redux
```

##### store

```jsx
import { createStore } from "redux";
const initialState = { counter: 0 };

const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return { ...state, counter: counter + 1 };
  }
  return state;
};

const store = createStore(counterReducer);

export default store;
```

##### Provider

Для доступа к store все приложение оборачивается в провайдер:

```jsx
import store from "./store/index.js";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
```

##### Реакт компонент

```jsx
import { useSelector, useDispatch } from "react-redux";
```

#### Links

1. [] https://habr.com/ru/articles/439104/
2. [] https://highload.today/redux-react/
3. [] https://blog.skillfactory.ru/glossary/redux/

### 12. Redux Toolkit

Будем работать с **Redux ToolKit**.
В нём некоторые вещи проще и быстрее создаются.

Задача редуктора - вернуть новый стейт. Сразу становится сложно, если сетйт - не простой объект, а содержит сложные структуры данных.

Redux-toolkit - библиотека, созданная от команды разработчиков redux.

#### Install

```shell
npm install @reduxjs/toolkit react-redux
```

#### Slice

**Slice** - кусок стора. Чтобы не создавать отдельный редусер под аутенитификацию, например, мы делим стор на куски.

В реакт тулките можно мутировать стейт (не напрямую, на самом деле, а через функцию). Под капотом реакт тулкит делвет все правильно.

Для создания слайса используется функция из `@reduxjx/toolkit` `createSlice`.

```jsx
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

const counterSliceConfig = {
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter += 1;
    },
    decrement(state) {
      state.counter += -1;
    },
    increase(state, action) {
      state.counter += action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
};

const counterSlice = createSlice(counterSliceConfig);
const counterActions = counterSlice.actions;

const store = configureStore({ reducer: counterSlice.reducer });

export default store;
export { counterActions };
```

`payload` - зарезервированное слово в react toolkit для полезной нагрузки в action.
Action пока не надо вкладывать друг в друга. Но надо экспортировать action, которые используются для управления редюсером.

`configureStore` - новый аналог createStore.

#### React-Компонент

Ипортируем (экшены) из файла со слайсом.
Импортируем функцию `import { useDispatch } from 'react-redux';`.
Импортируем подписчики `import {useSelector} from 'react-redux';`.

```jsx
import { counterActions } from "../store/index";
//...
const incrementHandler = () => {
  dispatch(counterActions.increment());
};
const decrementHandler = () => {
  dispatch(counterActions.decrement());
};

const increaseHandler = () => {
  dispatch(counterActions.increase(10));

  // все что между скобками попадет в action.payload внутри редюсера
};
```

Желательно придерживаться декларативного подхода - не напрямую удалять, а взять и отфильтровать.
Наверное можно сделать копию, удалть в копии и присовить измененную копию.

#### Auth Reducer

В redux-toolkit можно сделать несколько слайсов и каждому назначить свой редюсер.

```js
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});
```

Redux должен иметь 1 редусер. Реакс тулкит тоже все трансформирует в 1 стор с 1 редюсером.

```js
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialCounterState,
  reducers: {
    increment(state) {
      state.counter += 1;
    },
    decrement(state) {
      state.counter += -1;
    },
    increase(state, action) {
      state.counter += action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const initialAuthState = { isAuthenticated: false };

const authSliceConfig = {
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
};

const authSlice = createSlice(authSliceConfig);

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

const counterActions = counterSlice.actions;
const authActions = authSlice.actions;

export default store;
export { counterActions, authActions };
```

Для получения данных их стора используется хук useSelector, который принимает функцию селектор `useSelector( (state) => state.auth.isAuthenticated)`.
Данные в стете хранятся под именем конкретного редюсера, который мы передали, когда создавали store

```jsx
const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});
```

### 13. Продвинутый Redux

##### Плагин для хрома

Redux DevTools
https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?utm_source=ext_sidebar&hl=en-US

##### Async в Redux

У редакса есть одно очень важное правило:

- редукторы должны быть чистыми синхронными функциями без побочных эффектов. При одном и том же инпуте выжает один и тот же резкльтат.

Куда добавлять асинжронные задачи:

- в сами икомпоненты
- внутри **action creators**

##### action creators

Специальные акшены кторые возвращают функции.

### 14. Async Redux. React Router.

#### Async redux

Как добавлять асинхронные модели

- в сами компоненты
- внутри **`action creators`**

Сами экшены должны быть синхронными.

Action cretors - функция, которая создает экшены и их диспатчит.

Action creator - функция, которая вовзращает функцию, имеющую 1 аргумент.
Т.е. чтобы редакс понял что это будет action createor, надо обязательно возвращять из этой функции функцию, которая принимает `dispatch` как аргумент.

```jsx
const sendCartData = () => {
  //
  return async (dispatch) => {
    //... какой-то асинхронный код
  };
};
```

Внутрь action creator можно добавлять побочные эффекты и асинхронные задачи. В случае с асинжронными задачами возвращаемая функция должна быть асинхронной.

!!!Note Внутри **action creator** нельзя напрямую обращаться к state. State можно изменять только при помощи редукторов. Т.е. нам надо вызвать `dsipatch(our_action_reducer())` чтобы поменять state.

#### React router

До роутера все приложеия были на одной странице.

reactrouter.com
Надо утсановить пакет.

```shell
npm install react-router-dom
```

Разные страницы создаются как разные react копоненты в папке `./src/pages/`:

```jsx
// ./src/pages/Home.jsx
import React from "react";

function Home() {
  return <h1> Home Page </h1>;
}
export default Home;
```

```jsx
// ./src/pages/Products.jsx
import React from "react";

function Products() {
  return <h1>Products</h1>;
}

export default Products;
```

##### CreateBrowserRouter

Класс для роутов. Импортируется так:

```jsx
import { createBrowserRoute } from "react-router-dom";
```

Принимает на вход массив из обхектов, где каждый обхект - отвечает за страничку.

И импортируем это в App.jsx вместе с функцией создания роутов:

```jsx
// ./src/App.jsx
import React from "react";
import Home from "./pages/Home";
import { createBrowserRoute } from "react-router-dom";
import { RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/products",
    element: <Products />,
  },
]);

function App() {
  return <RouterProvider router={router}>;
}

export default App;
```

Также ипортируется `import { RouterProvider } from 'react-router-dom';`, в который оборачивается то, что мы возвращаем из компонента `App`.

##### Ссылки `<Link to='' relative='path'>`

При использовании тега `<a href='./products'>` веб браузер будет выполнять переход по этой ссылке и страница и приложение будут перезагружены. Чтобы работали внетренние роуты из react и приложение не перезгружалось надо использовать вместо `a` компонент `<Link to='' relative='path'/>` из `'react-router-dom'`.

```jsx
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>Домашняя страница</h1>
      <p>
        Перейти на страницу <Link to="./products">продуктов</Link>
      </p>
    </>
  );
}
```

```jsx
import { Link } from "react-router-dom";

function Products() {
  return (
    <>
      <h1>Страничка Продуктов</h1>
      <Link to="../" relative="path">
        Домой
      </Link>
    </>
  );
}
```

##### Навбар, `<Outlet />`

Предположим надо сделать панель навигации, которая будет предоставлять ссылки на все страницы

```jsx
// ./src/components/MainNavbar.jsx
import { Link } from "react-router-dom";

function MainNavbar() {
  return (
    <header className="header">
      <nav>
        <ul className="list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
```

Чтобы не писать этот компонент на каждой странице, желательно использовать его один раз. Для этого создается шаблон страницы

```jsx
// ./src/pages/RootLayout.jsx
import React from "react";
import MainNavbar from "../components/MainNavbar";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <MainNavbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
```

Он нужен для того, чтобы в него поместить наши страницы. А компонент `<Outlet />` служит проводником для роутов.

После этого надо поменять router, чтобы он наши компоненты поместились внутрь `<RootLayout />`. Для этого доавляем в роутер элемент `RootLayput`, а в его потомки записываем компоненты, которые хотим обернуть этим шаблоном:

```jsx
import RootLayout from "./pages/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
    ],
  },
  {
    path: "/admin",
    children: [
      //...
    ],
    //...
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
```

##### Старый вариант роутов до v6.4

```jsx
import { createRoutesFromElements } from "react-router-dom";
import { Route } from "react-router-dom";

const routes = createRoutesFromElements(
  <Route path="/" element={<RootLayout />}>
    <Route path="/" element={<Home />} />
    <Route path="/products" element={<Products />} />
  </Route>
);

const router = createBrowserRouter(routes);
```

##### 404 errorElement

Параметр компонета в роете под именем `errorElement` указывает какой реакт компонент отображать в случае, если роут указанный в строке браузера не найден.
ы

```jsx
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
    ],
  },
]);
```

#### Автоматический редирект `useNavigate()` `<Navigate to='/'>`

Чтобы реакт компонент перенаправил нас на другой адрес нужно использовать компонент `<Navigate to="uri" />` из `react-router-dom`.

```jsx
import React from "react";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <>
      <h1>Login Page</h1>
      <p>
        Войдите или <Link to="/register">Зарегистрируйтесь</Link>
      </p>
    </>
  );
}

export default LoginPage;
```

Также можно использовать хук `useNavigate()` для редиректа. Работает он аналогичено компоненту `<Navigate to="/link"/>`:

```jsx
import { useNavigate } from "react-router-dom";

function Page() {
  const navigate = useNavigate();

  if (true) {
    navigate("/link");
  }

  return <h1>Page</h1>;
}
```

### 15 Динамические Роуты.

#### Link -> NavLink

При навигации по страничке, ссылка, отвечающая за текущую страницу выделяется. Компонент `<Link />` так не умеет. Зато умеет компонент `<NavLink />` из `'react-router-dom'`.

```jsx
import { NavLink } from "react-router-dom";

//...
<NavLink to="/products">Продукты</NavLink>;
```

#### Динамические роуты

```jsx
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      //...
      {
        path: "/products/:productId",
        element: <ProductDetails />,
      },
    ],
  },
]);
```

Для создания параметрического роута достаточно в пути написать двоеточие `:` и поставить нзвание параметра, в которое будет записываться часть пути. К этому параметру динамического роута можно иметь доступ из компонета, который вызывается.

##### useParams

Для доступа к параметру роута используется хук `useParams` из `'react-router-dom'`. Он предоставляет доступ ко всем динамическим параметрам, внутри элемента. Потмоки подительского пкти наследуют все родительские паарметры:

```jsx
// ProductDetails.jsx
import { useParams } from "react-router-dom";
//...
function ProductDetails() {
  const params = useParams();
  console.log(params.productId); // получаем параметр, который указан в роуте
  // ...
  return; //...'
}
```

Роутер:

```jsx
const router = createBrowserRouter({
  path: "/prod/:a/:b/",
  element: <Prod />,
});
```

Компонент:

```jsx
// Prod.jsx
//...
import { useParams } from "react-router-dom";

function Prod() {
  const params = useParams();
  return (
    <main>
      <h1> Произведение</h1>
      <p>{`${params.a} * ${params.b} = ${params.a * params.b}`}</p>
    </main>
  );
}
export default Prod;
```

#### Link относительные и абсолютные пути.

Относительно чего строится путь - относительно параметров вложенности в роуте или относительно пути в бравузере.

ПО-умолчанию параметр `relative` в `Link` будет принимать значение `route`. Это значит что путь по клику в теге `Link` будет строиться от вложенности элементов в `route`.

```jsx
<Link to="../" relative="route"> // relative='route'
```

Если нужен другой путь, отличный от того что в `route`, то можно использовать пути относительно строки браузера. Тогда к текущей строку браузера будет применяться путь из параметра `to` элемента `Link`.

```jsx
// relative='route' - значение по-умолчанию
<Link to="../" relative="path">
```

Например в приведённом примере переход осществится на 1 элемент выше по строке браузера, а не по жлементам в `route`.

```jsx
{
  // path: "",
  index: true,  // можно указать что это корневая страничка
  element: <Home />,
},
```

Если в роуте указать `path=''`, то он будет считаться относительным путем. Относительно родительского элемента в который вложен этот элемент. Например если он вложен в

```jsx
{
  path: '/',
  element: <RootLayout>,
  children: [s
    {path: '', element: <Home /> },
    {path: 'products', element: <Products />}
  ]
}
```

То у компонента `Home` будет абсолютный путь `/`, а у компонента `Products` `/products`.

Точно также и в ссылках можно указывать абсолютные и относительные пути. Параметр `relative` у ссылок указывает на то, относительно чего будет расчитываться переход в ссылках:

- `path` - относительно строки в браузере
- `route` - относительно элемента route в реакте от которого строится маршрут.

#### UUID package

npmjs.com/package/uuid

```bash
npm install uuid
```

```jsx
import { v4 as uuidv4 } from "uuid";
const res = uuidv4(); // получаем uuid версии 4
```

### 16 Authentication

Для этого используем firebase. Создаем проект и после создания проекта регистрируем новое Web-приложение Web-App.
Затем добавляем firebase SDK в наш React проект:

```shell
npm install firebase
```

В корне проекта создаём файл `./firebase.js` и помещаем в него код, который нам дает гугл:

```jsx
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "XXXXXXXX.firebaseapp.com",
  projectId: "XXXXXXXXX",
  storageBucket: "XXXXXXXXXXX.appspot.com",
  messagingSenderId: "XXXXXXX",
  appId: "1:XXXXXXXXXXXXX:web:XXXXXXXXXXXXXX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
```

Этот файл `firebase.js` надо импортировать в компонент `<App>`, чтобы у SDK был доступ ко всем ключам.:

```jsx
import React from 'react';
//...
import './firebase';

function App() {
  //...
}

export dedault app;
```

Далее в консоли firebase переходим во раздел **Authentication** -> Get started.
Попадаем в раздел Authentication -> Sign-in methods. И добавляем способ аутентификации по email/password.

Далее можно посмотреть документацию firebase раздел про Authentication.

#### Регистрация

```jsx
import { getAuth } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
//...

const auth = getAuth();

createUserWithEmailAndPassword(auth, email, password)
  .then(() => {})
  .catch(() => {});
```

#### Логин

```jsx
import { getAuth } from 'firebase/auth`;
import { signInWithEmailAndPassword} from 'firebase/auth';
//...

const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then(() => {})
  .catch(() => {});
```

### 17 React Typescript

ReactElement - с типом и пропсами
JSX.Element - то же что и react element он его экстендит, но принимает any
ReactNode - более обширный тип. может быть многими другими типами

До реакт 18

```tsx
React.FunctionComponent<{ title: string }> = () => {};

//...
Section.defaultProps = {
  title: "My section",
};
```

### snippet

vsc extension - es7 snippet

rfce + Enter - создание компонента по сниппету

### Аутентификация Регистрация

```shell
npm install firebase
```

firebase.google.com/docs/build?hl=ru

## Идеи для проектов по реакту

https://medium.com/nuances-of-programming/5-%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%BE%D0%B2-%D0%BD%D0%B0-react-%D0%B4%D0%BB%D1%8F-%D0%BD%D0%B0%D1%87%D0%B8%D0%BD%D0%B0%D1%8E%D1%89%D0%B8%D1%85-7c25e02ea714

### 18 React animation

Библиотека framer-motion
https://www.framer.com/motion/

```shell
npm install framer-motion
```

## 19

Прямая поддержка тестов у `npx create-react-app react-test`;
У вити поддержки тестов из коробки нет. Надо менять конфиги.

Пирамида тестирования. Тетсирование от низкоуровненого у более высокоуровневому.
В реакт тестировании самый нижний уровень - тестирование компонента.

App.test.js - файл который помогает тестировать приложение
package.json - в разделе scripts

`npm run test`` будет по капотом запускать _react testing library_ testing-library.com. Или Jest jestjs.io - больше для js , для всех фреймворках, а не толко для реакта. Иногда они работают вместе.

два валидных схемы - `Button.jsx` -> `Button.spec.jsx` или `Button.test.jsx`
Можно тесты хранить или в катклоге с компоенентом или в папке `./src/test`

```jsx
import { render, screen } from "@testing-library/react";
// ипорт компонента

test("should have Learn React Link", () => {
  render(<App />);
  const learnReactLink = screen.getByText(/learn react/i);
  expect(learnReactLink).toBeInTheDocument();
});
```

render - для рендере компонента
screen - чтобы тест мог "просмотреть"

test должен принимать 2 параметра

1. should ... - название теста
2. коллбек

- рендер
- что ожидаю expect();

ToBeInTheDocument - встроенный метод документа.

```jsx
test("sum of array", () => {
  const result = sumOfArray([1, 2, 3, 4, 5]);
  expect(result).toEqual(15);
});
```

Список этий методов (assertion) можно найти в интернете.

sonarqube.

### 3A для тестов

**Arrange** - подготовка данных для теста, окуженеи и т.п.
**Act** - сделать дейтсвие, выполнить логику
**Assert** - сравнить ожидамое значнеие с полученным в результате тестирования

describe - группировка тестов

```jsx
descript;
```

`Async.jsx`

```jsx
import { useEffect, useState } from "react";

const Async = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Async;
```

Roles https://www.w3.org/TR/html-aria/#docconformance

Чтобы в тестах каждый ра не отправлять запросы делают моковые данные.

Jest для моковых данных.

```shell
npm install --save-dev- jest
```

## Собес

html - react
live coding
сделать и редьюса

добавить метод обхекту через прототип и переписать на классы
--scss
--mixin

в обхектах функции и что вызовет стрелочная функция и что вызовет declaration.

асинхронщина. написано полотно из 10 консоль логов. синжронно и асинжронно. в промисах, таймауте и интервале. С 0 и реджектом. EventLoop

классы. наследование.
2 класса, отнаследованне. свои методы.
Прикол в том, что мы перезаписываем поля.
Класс 2 эекстендит метод супер. перебивает свои поля и снова вызывает метод супер.
Прототип - что такое. как менять метод прототипа. ЧТо такое прото (ссылка на объект родителя). Прототип - тип, в который мы вписываем. Прототайп - расширяем этот объект.

React

- что такое, почему надо использовать
  - если пишем на жс встает вопрос перерендеринша части сраниц - живой дом и т.п.
- мемоизации, ленизвая загрузка (мы получаем картинки с сервера, но грузим три). Разбиение на чанки (получаем списки статистики). Приходит миллиардный список и мы дели его на чанки. Проект тормозит - что копать? useCallback useMemo.
