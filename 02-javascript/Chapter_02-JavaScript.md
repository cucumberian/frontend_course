# JavaScript

Инструкции JS выполняет движок v8. Он используется в Chrome и NodeJs.
Механика в браузере и NodeJs отличается.
Инструкции переводятся в машинный код.

Защита браузера - не позволяет взаимодействовать скриптам с ОС напрямую.
Никакой сайт не может залезть на компьютер и что-то удалить.

```html
<script type="text/javacript" language=""></script>
```

Уже неактуально указывать `type` и `language`, можно обойтись просто тегом.

Рtml файл выполняется линейно, и пока не исполнится скрипт, только затем выполнится код в html следующий ща скриптом.

**`<noscript>`**
Тэг `<script></script>` содержит скрипт.
Если браузер не может выполнить скрипы, то выполняется тэг `<noscript>`

```html
<noscript>
  <p>JavaScript is not enabled on your browser.</p>
</noscript>
```

Тег `<script>` ставят в конце боди - правило хорошего тона
подключаемые библиотетеки подключают в header

Взаимодействие с данными - через переменные

3 способа объвить переменные
`var` `const` `let` - объявление переменной
`var` - глобальная область видимости - сейчас никогда не надо использовать (можно переобределять переменную)

```javascript
var a = 5;
var a = 10;
```

И это поведение не должно быть, т.к. велик шанс изменить переменную на другую, а про старую забыть.

Нельзя получить переменную до инициализации
`undefined` - значение переменной после объявления но до инициализации

Все в JS объекта в т.ч. и примитивы

## Строки

3 типа кавычек:

```javascript
const str = `text default`;
const str2 = "text default";
const str3 = "text default";
```

## Числа Number

Это целый и вещественный тип данных. Целые числа от $2^{53}$ до $2^{53}-1$. Вещественные числа имеют диапазон $\pm 10^{308}$.

```javascript
Number;
const a = 1e25;
const num = 10;
const bignum = 9999999999999999999999999; // не помещается в битовой сетке
console.log(typeof bignum);
```

## Bigint

Позволяет работать с целвми числами произвольной длины без потери точности вычислений. Это может быть нужно для вычислений в криптографии.

```javascript
const bigNumber = 999999999999999999999999999n;
```

## Boolean

```javascript
let res1 = true;
let res2 = false;
```

## null

`null` - отсутсвие значения, импользу

```javascript
let empty = null; // если нет ничего, а потом здесь что-то будет
typeof null; // не баг а фича
state = {
  userStatus: null,
};
```

## undefined

дефолтное поведение, нет смысла назначать
никому не нужно назначать

```javascript
let und; // undefined
console.log(und, typeof und); // undefined undefined
```

## Symbol

Уникальные символы
`let id1 = Symbol()`
Ипользуюстя для индексации или для создания нередактируемых свойств объекта, к которым нельзя обратиться, т.к. каждый Symbol уникальный.

## Object

```javascript
cons obj = {
    name: 'Mikhail',
    level: 10,
}

obj.level = 11

const newObj = {
    name: 'Anna',
    level: Infinity,
}

obj['level'] = 300
obj.proj = 'Valmari'
delete obj.level
```

Любой объект имеет наследуемые свойтва.

## typeof

Оператор typeof возвращает тип аргумента. Это полезно, когда мы хотим обрабатывать значения различных типов по-разному или просто хотим сделать проверку.

У него есть две синтаксические формы:

```javascript
// Обычный синтаксис
typeof 5; // Выведет "number"
// Синтаксис, напоминающий вызов функции (встречается реже)
typeof 5; // Также выведет "number"
```

## Математические операции

Проверка

| Операция | Описание                      |
| -------- | ----------------------------- |
| =        | присваивание                  |
| ==       | сравнение с приведением типов |
| ===      | строгое сравнение             |

5 + 15 - вычисление
5 + "15" - `+` - символ конкатенации строк
все остальные мат знаки преобразают в числовой тип

`5 - "15"` = `-10`

`5 / 0` = `Infinity` - type `Number`

`5 / "qwerty"` = `NaN` - type `Number`

### Приведение к числу, унарный +

Приоритет унарного `+` больше, чем бинарного `+`

```javascript
// Не влияет на числа
let x = 1;
alert(+x); // 1

let y = -2;
alert(+y); // -2

// Преобразует не числа в числа
alert(+true); // 1
alert(+""); // 0

let apples = "2";
let oranges = "3";
// оба операнда предварительно преобразованы в числа
alert(+apples + +oranges); // 5
// более длинный вариант
// alert( Number(apples) + Number(oranges) ); // 5
```

Это то же самое, что и `Number(value)`, только короче.

### Присваивание = возвращает значение

Давайте отметим, что в таблице приоритетов также есть оператор присваивания `=`. У него один из самых низких приоритетов: `2`.

Вызов `x = value` записывает `value` в `x` и возвращает его.

Благодаря этому присваивание можно использовать как часть более сложного выражения:

```javascript
let a = 1;
let b = 2;

let c = 3 - (a = b + 1);

alert(a); // 3
alert(c); // 0
```

Однако писать в таком стиле не рекомендуется. Такие трюки не сделают ваш код более понятным или читабельным.

### Присваивание по цепочке

Рассмотрим ещё одну интересную возможность: цепочку присваиваний.

```javascript
let a, b, c;

a = b = c = 2 + 2;

alert(a); // 4
alert(b); // 4
alert(c); // 4
```

## Взаимодействие c пользователем в браузере

- alert - вывод сообщения
- prompt -
- confirm -

```javascript
let userPromo = prompt(`Введите промокод`, `promo`)
const price = 8000
const newPrice = 8000 * 0.5
const message = 'Ваш промокод ' + userPromo + ' Цена для вас' + newPrice + '.'
const bestMessage = `Ваш промокод ${}. Цена для вас ${newPrice.toFixed()}`
alert (message)
```

## Преобразование типов

### Численное преобразование

Численное преобразование происходит в математических функциях и выражениях.

Например, когда операция деления / применяется не к числу:

```javascript
let a = "6" / "2"; // 3

let num = Number(str); // явное преобразование к числовому типу
```

Если преобразование у числу не удалось, то результатом будет `NaN`.

| Значение         | Преобразуется в                                                                                                                                                                                                                       |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `undefined`      | `NaN`                                                                                                                                                                                                                                 |
| `null`           | `0`                                                                                                                                                                                                                                   |
| `true` / `false` | `1` / `0`                                                                                                                                                                                                                             |
| `string`         | Пробельные символы (пробелы, знаки табуляции `\t`, знаки новой строки `\n` и т. п.) по краям обрезаются. Далее, если остаётся пустая строка, то получаем 0, иначе из непустой строки «считывается» число. При ошибке результат `NaN`. |

### Булево преобразование

- `!15` - насильственное приведение к белевому значению и инверсия.
- `!!(-1)` - перевод в булеан (`Boolean(1)`)
- `Boolean('')` - true

| Значение                              | Преобразуется в |
| ------------------------------------- | --------------- |
| `0`, `null`, `undefined`, `NaN`, `""` | `false`         |
| любое другое значение                 | `true`          |

learn.javascript.ru/hello-world

##

Математические операции в JavaScript безопасны. Скрипт никогда не остановится с фатальное оишбкой. В крайнем случае мы получим `NaN` как результат выполнения.

#

## Сравнение

== - сравнение с операцией приведения типов
=== - прямое сравнение по типам и по значению

number & number - NaN несравнимо ни с чем - результат всегда false. Это не число и нет вохможности сравнить его с числом. Мы не знаем что это.

- string & string - проивхдит по таблице символов посимвольно

```javascript
17 == 17    // true
17 == '17'  // true
17 === '17'     // false

Infinity > 10;      // true
Infinity == Infinity;   // true
Infinity > Infinity;    // false

NaN < 10;   //false
NaN == NaN; // false

'a' > 'A'; // true
'ariel' > 'Ariel'; // true
'ariel' > 'aeiel'; //true a==a r>e
'20' > '10000'; //true
17 >= false;    // true false приводится к числу

20 >= '10000';  // false приведение типов
20 >= 'qwerty'; // false 20 >= NaN

null > 0; // false
null < 0; // false
null = 0; // false
null >=0; // true ! запомнить
null <=0; // true Null приводится к 0 при всех сравнениях кроме null == 0
null == 0; // true
null === 0; // false

undefined < 0; //false
undefined <= 0; // false
undefined >= 10; // false

undefined === null; //false
undefined == null; // true !запомнить преобразуется в NaN
```

17 >= NaN false// несравнимо
Infinity === Infinity // true
17 >= 'qwerty' // false 17 < 'qwerty' qwerty -> NaN
19 < '21' // true
'20qwerty' > '100querty' // true
null > -1 // false TRUE null приводится к 0
Infinity > undefined // false undefined == none

prompt() - str | null

### Тернарный оператор

() ? {} : {}

```javascript
(a) ? {a = 1} : {a=2};
```

## Логические операторы

```javascript
const firstName = "";
const lastName = null;
const nickName = NaN;

const userName = firstName || lastName || nickName; // NaN

console.log(userName);
```

false: '', 0, null, NaN, undefined, false

Если это **ИЛИ** `||`, то мы берем или первое `true` или посленее значение.

Логическое **И** `||`, либо первый ложный либо последний. Если все `true`, то последний.

```javascript

```

## Оператор нулевого слияния

Работает как ИЛИ, но `false` будет только `null` и `undefined`
Есть ли username или нет?

```javascript
const a = false;
const b = "";
const c = NaN;

const username = a ?? b ?? c; //  - как ИЛИ только false -  null и undefined
```

Результат выражения `a ?? b` будет следующим:

- если a определено, то a,
- если a не определено, то b.

## 18. Циклы. Свитч. Функции

### for

Можно опускать параметры внутри условий цикла `for`:

```javascript
let i = 0;

for (; i < 3; ) {
  alert(i++);
}
```

Такой цикл `for` будет аналогичен циклу `while`.

Аналогичено бесконечный цикл будет выглядеть как: `for(;;;) {}`

### break

Можно прерывать не только один цикл, а сразу несколько. Для этого надо установить метку:

```javascript
iCounter: for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    if (j > 3) {
      break iCounter;
    }
  }
}
```

Для использования `break: метка` метка break должна находиться внутри блока кода. Технически подойдёт любой блок кода, например:

```javascript
label: {
  //
  break label;
}
```

После `break` управление перейдет вне этого блока кода.

### switch

Проверка уловия в `switch` строгая, поэтому тип данных имеет значние и надо за этим следить.

```javascript
const userName = "Anna" || "anonymous";

switch (userName) {
  case "anonymous":
    console.log();
    break;
  case "Anna":
    console.log("I excited to see you!");
    break;
  case "BigBen":
    console.log("Again");
    break;
  default:
    console.log("Hmmm");
}
```

### function

**declaration**

```javascript
function sayHi() {
  console.log("Hello");
}
```

**expression**

```javascript
const sayHi = function () {
  console.log("Hello");
};
```

**arrow-function**

```javascript
const sayHi = () => {
  console.log("Hello");
};
```

```javascript
console.log(); // не используется в продакшене
console.dir(); // показывает
console.warn(); // предупреждение
console.error(); // вывод ошибки
```

Если при вызове функции аргумент не был указан, то его значением становятся `undefined`.

.Scopes - области видимости

#### return

по умолчанию возвращает `undefined`

- Передаваемые значения копируются в параметры функции и становятся локальными переменными.
- Функции имеют доступ к внешним переменным. Но это работает только изнутри наружу. Код вне функции не имеет доступа к её локальным переменным.
- Функция может возвращать значение. Если этого не происходит, тогда результат равен undefined.

Ещё одна важная особенность **Function Declaration** заключается в их блочной области видимости.

В строгом режиме, когда **Function Declaration** находится в блоке `{...}`, функция доступна везде внутри блока. Но не снаружи него.

ДЗ задачи https://learn.javascript.ru/while-for

```bash
git reset --hard HEAD
git pull
```

#### Объекты

## Deep copy, Глубокое копирование

### Поверхностное копирование

```javascript
const obj = {
  name: "Bill",
  age: 21,
  address: {
    city: "Moscow",
    street: "Lenina",
  },
};

const newObj = { ...obj };
newObj.name = "Jim";
newObj.address.city = "Leningrad";

console.log(obj, newObj);
```

При поверхностном копировании не копируются объекты на более глубоком уровне.

```javascript
// очень сложно
const newObj = { ...obj, address: { ...obj.address } };
```

```javascript
const newObj = structiredClone(obj);
```

выполняет тоед что и следующая рекурсивная функция:

```javascript
const getObjCopy = (obj) => {
  const newObj = {};
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      newObj[key] = getObjCopy(obj);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
};

const newObj = getObjCopy(obj);
console.log(obj, newObj);
```

```javascript
const newObj = structuredClone(obj);
newObj.address.city = "Leningrad";
console.log(obj, newObj);
```

### this

```javascript
"use strict";

const likeCounter = {
  count: 0,
  increment() {
    this.count += 1;
  },
  decrement() {
    // recomended
    this.count -= 1;
  },
};

const dislikeCounter = structuredClone(likeCounter);

likeCounter.increment();
console.log(likeCounter);
```

### ДЗ

https://www.figma.com/file/odLAP1PL5atEFGZKbvnxCx/Neumorphism-Calculator-(Community)?type=design&node-id=1-2&t=AENzXhB6pvcfEDXw-0

#### 1

Написать функцию, которая принимает два числа и возвращает рузельтат их умножения.

```javascript
function mult(a, b) {
  return a * b;
}
```

#### 2

```javascript
function get_hello(name, secondName, age) {
  return `Привет ${name} ${secondName} c возрастом ${age} лет.`;
}
```

#### 3

```javascript
function find_sex(sex) {
  switch (sex) {
    case "М":
      return "Ваш пол мужской";
    case "Ж":
      return "Ваш пол женский";
    default:
      return "Ваш пол не определен";
  }
}
```

#### 4

```javascript
function get_weekday(day_number) {
  return [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье",
  ][day_number - 1];
}
```

#### 5

```javascript
function first_words(text) {
  const sentences = text.split(/[\.!?]/);
  let words = sentences.map((sent) => {
    let words = sent.match(/\w+/);
    return words ? words[0] : null;
  });
  words = words.filter((value) => Boolean(value));
  const string_of_words = words.join(", ");
  return string_of_words;
}
```

#### 6

```javascript
function make_greetings(name) {
  const hour = new Date().getHours();
  const times = [
    "Доброй ночи",
    "Доброго утра",
    "Доброго дня",
    "Доброго вечера",
  ];
  const part = Math.trunc(hour / 6);
  const text = `${times[part]} ${name}`;
  return text;
}
```

#### 7

```javascript
function age_to_string(age) {
  if (age > 0) {
    if (age <= 18) return "ребёнок";
    else if (age <= 30) return "молодой";
    else if (age <= 55) return "зрелый";
    else return "старый";
  }
}

function human_info(name, age) {
  return `${name} имеет возраст ${age} и он ${age_to_string(age)}.`;
}

for (let i = 1; i <= 100; i++) {
  console.log(`${i}\t${age_to_string(i)}`);
}
```

#### 8 Объекты

```javascript
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
  Chuck: null,
  Norris: "asdasd",
};

const sum = (obj) => {
  return Object.values(obj)
    .filter((value) => Number.isFinite(value))
    .reduce((s, value) => {
      return s + value;
    }, 0);
};
console.log(sum(salaries));
```

#### 9

```javascript
function multiplyNumeric(obj) {
  Object.keys(obj)
    .filter((key) => {
      return Number.isFinite(obj[key]);
    })
    .forEach((key) => {
      obj[key] = obj[key] * 2;
    });
}
```

#### 10

```javascript
const ladder = {
  current_step: 0,
  up() {
    this.current_step += 1;
  },
  down() {
    this.current_step += -1;
  },
  showStep() {
    console.log(this.current_step);
  },
};
```

### Проверка: isFinite и isNaN

Помните эти специальные числовые значения?

Infinity (и -Infinity) — особенное численное значение, которое ведёт себя в точности как математическая бесконечность ∞.
NaN представляет ошибку.
`isNaN(value)` преобразует значение в число и проверяет является ли оно `NaN`.
`isFinite(value)` преобразует аргумент в число и возвращает `true`, если оно является обычным числом, т.е. не `NaN`/`Infinity`/`-Infinity`.

### Number.isNaN и Number.isFinite

Методы `Number.isNaN` и `Number.isFinite` – это более «строгие» версии функций `isNaN` и `isFinite`. Они не преобразуют аргумент в число, а наоборот – первым делом проверяют, является ли аргумент числом (принадлежит ли он к типу number).

### Сравнение Object.is

Существует специальный метод `Object.is`, который сравнивает значения примерно как `===`, но более надёжен в двух особых ситуациях:

Работает с NaN: `Object.is(NaN, NaN) === true`, здесь он хорош.
Значения 0 и -0 разные: `Object.is(0, -0) === false`, это редко используется, но технически эти значения разные.
Во всех других случаях `Object.is(a, b)` идентичен `a === b`.

Этот способ сравнения часто используется в спецификации JavaScript. Когда внутреннему алгоритму необходимо сравнить 2 значения на предмет точного совпадения, он использует Object.is (Определение SameValue).

### Строки Strings

https://learn.javascript.ru/string

Получить символ можно как с помощью операции индексации, так и с помощью метода `.at(index)`, который поддержвает отрицательную индексацию с конца строки.

```javascript
let str = `Hello`;

alert(str[-2]); // undefined
alert(str.at(-2)); // l
```

| Метод                        | Описание                                                 |
| ---------------------------- | -------------------------------------------------------- |
| `.toUpperCase()`             | Преобразует в верхнй регистр                             |
| `.toLowerCase()`             | В нижний регистр                                         |
| `.toLocaleUpperCase()`       | в верхний регистр согласно языковым собеннотстям         |
| `.toLocaleLowerCase()`       | в нижний регистр солгасно языковым особенностям          |
| `.indexOf(substr, [pos])`    | ищет в строке подстроку `substr` начиная с позиции `pos` |
| `.latIndexOf(substr, [pos])` | как и `indexOf` но поиск ведется с другой стороны        |
| `.includes(sustr, [pos])`    | `True` / `False`                                         |

### 5 Javascript

Math - глобальный обхект со свойствами

- `floor`
- `ceil`
- `round`
- `trunc`
- `num.toFixed(n)` - обрезает до определенного количества знаков после запятой
- `num.toPrecision(n)` - До общего количества знаков
- `random()` - псевдослучайное число

- `isNaN` - перевод в число и сравнение результата с NaN
- `isFinite` - перевод в число и сравнение с конечным числом
- `Number.isFinite` - сравнение на Number и на Finite
- `Number.isNaN` - сравнение на Число и на NaN

- `parseInt(num)` - берет все числа до первой ошибки
- `parseFloat(num)` - извлекает все дробные числа до первой ошибки

- `.indexOf(symbol)` - если не найден, то `-1` иначе позиция
- `.included(substr, pos)`
- `.startsWith(substr)`
- `.wndsWith(substr)`
- `.кг(start, end)`
- `.substring(start, end)` - работает с отриц значениями
- `.substr(start, length)` - устарел.

#### ~ побитовое не

```javascript
~n = -(n + 1)
```

### 5-6 Массивы

https://learn.javascript.ru/array

Массив является обхектом.
Движок JavaScript старается хранить массив в памяти последовтельно + еще другие оптимизации, что позволяет массивам работать быстрее, чем аналогичные объекты.

Если с массивом начать обращаться как с обхектом, например присвоить ему нечисловое свойства, и движок JavaScript отключит оптимизацию для массивов.
Чтобы не потерять оптимизацию не слудует выполнять следующие операции:

- `arr.test = 5` - добавление нецелочисленного свойства
- `arr[100000] = 5` - создание дыр в массиве, например есть только `arr[0]` и `arr[100000]`
- Заполнение массива в обратном порядке

#### Методы

Чтобы массив использовать эффективно, с ним надо обращаться как с упорядоченной структурой данных. Для этого существуют специальные методы.

В последних версиях JS добавили возможность обращению к отрицательным индексам через метод `.at(index)`,

```javascript
let fruits = ["Apple", "Orange"];
console.log(fruits.at(-1)); // Orange
```

`.push(element1, [element2,...])` - добавляет элемент в очередь (в конец массива). Выполняются быстро.
`.pop()` - удаление последнего элемента. Выполняется быстро.
`.shift()` - удаляет элемент в начале массива и возвращает его. В случае пустого массива вернет `undefined`. Выполняется медленно.
`.unshift(element1, [element2,...])` - добавляет элементы в начало массива. Возвращает длину массива. Выполняется медленно.

Операции `pop` и `push` выполняются быстрее, чем `shift` и `unshift` потмоу что они не требует переиндексации элементов массива, которая тем больше заниает вреени, чем длиннее массив.

#### Перебор элементов

Для массива возможен перебор элементов через цикл `for of`:

```javascript
const arr = [1, 2, 3];
for (let i of arr) {
  console.log(i);
}
```

Также можно испольовать и метод перебора `for in`, но он предназначен для обычных объектов и не оптимизирован для массивов, и поэтому выполняется в 10- 100 раз медленнее.

#### length

Свойство `.length` = инексу последнего элемента массива + 1.
Можно изменить это свойство, присвоив ему новое значение. Если новая длина будет меньше, чем элементов массива, то лишние элементы удалятся. Если длина будет больше, чем было элементов, то ничего не произойдёт.

```javascript
const a = [1, 2, 3];
a[1000] = 0;
console.log(a.length); // 1001
a.length = 2;
console.log(a); // [1, 2]
```

Самый быстрый способ очистить массив - это `array.length = 0;`.

#### 1

```javascript
const arr = ["Джаз", "Блюз"];

function change_mid(arr, elem) {
  if (arr.length > 0) {
    const mid = Math.floor(arr.length / 2);
    arr[mid] = elem;
  }
}

console.log(arr);
arr.push("Рок-н-ролл");
console.log(arr);
change_mid(arr, "Классика");
console.log(arr);
console.log(arr.shift());
arr.unshift("Рэп", "Регги");
console.log(arr);
```

#### Подмассив наибольшей суммы

важность: 2
На входе массив чисел, например: `arr = [1, -2, 3, 4, -9, 6]`.

Задача: найти непрерывный подмассив в `arr`, сумма элементов в котором максимальна.

Функция `getMaxSubSum(arr)` должна возвращать эту сумму.

- `.indexOf(value, [fromIndex])` - в поиске используется строгое сравнение. Не может найти NaN.
- `.lastIndexOf(value, [item])`
- `.includes(value)` - более новый метод. Может найти `NaN`.
- `.slice(starts, ends)` - вырезает из массива arr[starts: ends]. Возвращает вырезаннуюю часть как неглубокую копию.
- `.splice(pos, deleteCount, ...items)` - откуда начать, сколько удалить и что добавить. Удобен чтобы вставить что-то в середину массива. Возвращает удаленные элементы.
  Конечно для удаления элемента их массива можно использовать `delete arr[index]`. Но в этом случае удалится элемент а индексы остальные массива останутся неизенными и его длина не изменится (возникнет пустое место). Для удобного удаления элементов лучше применять метод `.splice()`.

- `.concat(..items)` - возвращает НЕглубокую копию из оригинала и скопированных элементов из скобок. `const newValue = arr.concat(3, 4, 5);`. Вообще может быть не нужен вообще, т.к. есть более современные методы.

- `function func(value, index, array) {...}`

- `.find()` - отдается первое значение с true
- `.filter()` - отдается все элементы массива с true
- `.findIndex(func)` - возвращает первый индекс
- `.findLast()`
- `.findLastIndex()`

- `.map(func)` - применяет функцию с возвращаемым значением каждому элементу присваивает это значение
  `.forEach(func)` - применяет функцию и выполняется столько раз сколько элементов в массиве

`.sort()` - cортировка массива. По умолчанию числа преобразуются в строки и сравниваются. Изначальный массив мутируется (сортируется). Возвращают сам массив.
`.sort((a, b) => a - b)`. Если -, то нынешнее a больше, чем слудующие b, если +, то a < b, если 0, то нынешнее a = слудующему b.
`.reverse()` - разворачивает массив. Мутирует и возвращает перевернутый массив.

`.reduce((acc, newValue, ind, arr) => {...}, [initValue])` - схлопывает массив. Для каждого элемента считается значение и возвращается в accucumator. Начальное значение аккумулятора в 0 индексе = initValue. Оригинальный масси не изменяется.
`.reduceRight()`

`.split(delimeter, [max_splits])`
`.split('')` - разделить по каждому символу
`.split()` - нету разделителя, поэтому вернуть всю строку

`Array.isArray(data)` - проверка дата на то, что она является массивом.

#### Деструктуризация, ...

```javascript
const myArr = [...arr]; // неглубокое копирование в новый массив
const b = [...a, 1, 2]; // добавление к массиву a 1 и 2
const c = [...a, ...b]; // объкдиняем массивы a и b в один массив c
```

Удобно передевать значения в функцию.

```javascript
const userNames = ["Nick", "Bill", "Jack"];
const [user1, user2, user3] = userNames;
const [winner, ...users] = userNames; // в winner помещаются первый элемент, a все остальные в users
```

#### Большинство методов поддерживают «thisArg»

Почти все методы массива, которые вызывают функции – такие как `find`, `filter`, `map`, за исключением метода `sort`, принимают необязательный параметр `thisArg`.

Этот параметр не объяснялся выше, так как очень редко используется, но для наиболее полного понимания темы мы обязаны его рассмотреть.

Вот полный синтаксис этих методов:

```javascript
arr.find(func, thisArg);
arr.filter(func, thisArg);
arr.map(func, thisArg);
// ...
// thisArg -- необязательный последний аргумент
```

Значение параметра `thisArg` становится `this` для `func`.

Например, тут мы используем метод объекта army как фильтр, и thisArg передаёт ему контекст:

```javascript
let army = {
  minAge: 18,
  maxAge: 27,
  canJoin(user) {
    return user.age >= this.minAge && user.age < this.maxAge;
  },
};

let users = [{ age: 16 }, { age: 20 }, { age: 23 }, { age: 30 }];

// найти пользователей, для которых army.canJoin возвращает true
let soldiers = users.filter(army.canJoin, army);

alert(soldiers.length); // 2
alert(soldiers[0].age); // 20
alert(soldiers[1].age); // 23
```

Если бы мы в примере выше использовали просто `users.filter(army.canJoin)`, то вызов `army.canJoin` был бы в режиме отдельной функции, с `this=undefined`. Это тут же привело бы к ошибке.

Вызов `users.filter(army.canJoin, army)` можно заменить на `users.filter(user => army.canJoin(user))`, который делает то же самое. Последняя запись используется даже чаще, так как функция-стрелка более наглядна.

- `arr.fill(value, start, end)` – заполняет массив повторяющимися `value`, начиная с индекса `start` до `end`.

- `arr.copyWithin(target, start, end)` – копирует свои элементы, начиная с позиции `start` и заканчивая `end`, в себя, на позицию `target` (перезаписывая существующие).

- `arr.flat(depth)`/`arr.flatMap(fn)` создаёт новый плоский массив из многомерного массива.

Полный список есть в справочнике MDN.

#### Задачи

##### Переведите текст вида border-left-width в borderLeftWidth

важность: 5
Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

То есть дефисы удаляются, а все слова после них получают заглавную букву.

```javascript
function camelize(str) {
  return (
    str
      .split("-")
      // .filter( value => value)
      .map((value, index, arr) => {
        console.log(value, index, arr);
        const ans =
          index > 0
            ? [value[0].toUpperCase(), ...value.slice(1)].join("")
            : [...value].join("");
        return ans;
      })
      .join("")
  );
}

console.log(camelize("background-color"));
console.log(camelize("background-color") == "backgroundColor");

console.log(camelize("list-style-image"));
console.log(camelize("list-style-image") == "listStyleImage");

console.log(camelize("-webkit-transition"));
console.log(camelize("-webkit-transition") == "WebkitTransition");
```

##### Фильтрация по диапазону

важность: 4
Напишите функцию `filterRange(arr, a, b)`, которая принимает массив `arr`, ищет элементы со значениями больше или равными `a` и меньше или равными `b` и возвращает результат в виде массива.

Функция должна возвращать новый массив и не изменять исходный.

Например:

```javascript
function filterRange(arr, a, b) {
  return arr.filter((value) => {
    return value >= a && value <= b;
  });
}

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);

alert(filtered); // 3,1 (совпадающие значения)
alert(arr); // 5,3,8,1 (без изменений)
```

##### Создать расширяемый калькулятор

```javascript
function Calculator() {
  this.ops = {
    "-": (a, b) => Number(a) + Number(b),
    "+": (a, b) => Number(a) + Number(b),
  };

  this.calculate = function (str) {
    const [a, op, b] = str.split(" ");
    const fun = this.ops[op];

    return fun && isFinite(a) && isFinite(b) ? this.ops[op](a, b) : undefined;
  };

  this.addMethod = function (name, func) {
    this.ops[name] = func;
  };
}

let calc = new Calculator();

console.log(calc.calculate("3 - 7")); // 10
calc.addMethod("*", (a, b) => a * b);
calc.addMethod("/", (a, b) => a / b);
calc.addMethod("**", (a, b) => a ** b);

let result = calc.calculate("2 ** 3");
console.log(result); // 8
```

##### Трансформировать в массив имён

```javascript
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [vasya, petya, masha];

let names = users.map((value) => value.name);

console.log(names); // Вася, Петя, Маша
```

##### Трансформировать в объекты

```javascript
let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [vasya, petya, masha];

let usersMapped = users.map((element) => {
  return {
    fullName: [element.name, element.surname].join(" "),
    id: element.id,
  };
});

/*
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
*/
console.log(usersMapped);
console.log(usersMapped[0].id); // 1
console.log(usersMapped[0].fullName); // Вася Пупкин
```

##### Отсортировать пользователей по возрасту

```javascript
function sortByAge(arr) {
  return arr.sort((a, b) => a.age - b.age);
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [vasya, petya, masha];

sortByAge(arr);

// теперь: [vasya, masha, petya]
console.log(arr[0].name); // Вася
console.log(arr[1].name); // Маша
console.log(arr[2].name); // Петя
```

##### Перемешайте массив

```javascript
function randInt(a, b) {
  // [a, b)
  const d = b - a;
  return Math.floor(Math.random() * d + a);
}

function shuffle(arr) {
  let n = arr.length;
  const shuffled = [];
  while (n > 0) {
    const random_ind = randInt(0, n--);
    const popped = arr.splice(random_ind, 1);
    shuffled.push(...popped);
  }
  // console.log(shuffled);
  return shuffled;
}

function shuffle2(arr) {
  for (let i = arr.length; i >= 0; i--) {
    const rand_ind = randInt(0, i); // случайный индекс
    const popped = arr.splice(rand_ind, 1);
    arr.push(...popped);
  }
}

function shuffle3(arr) {
  for (let i = arr.length; i > 0; i--) {
    const rand_ind = randInt(0, i); // случайный индекс
    [arr[i - 1], arr[rand_ind]] = [arr[rand_ind], arr[i - 1]];
  }
}

// let arr = [1, 2, 3, 4, 5, 6];
// for (let i =0; i < 10; i++) {
//     shuffle(arr);   // arr = [3, 2, 1]
//     // console.log(arr);
// }

const counter = [0, 0, 0]; // проверка randInt
for (let i = 0; i < 100000; i++) {
  const a = randInt(0, 3);
  counter[a] += 1;
}
console.log(counter);

const counter2 = {
  123: 0,
  132: 0,
  213: 0,
  231: 0,
  312: 0,
  321: 0,
};
for (let i = 0; i < 10000; i++) {
  const arr2 = [1, 2, 3];
  const new_arr = shuffle3(arr2);
  // console.log(arr2.join(''));
  counter2[arr2.join("")] += 1;
}
console.log(counter2);
```

##### Получить средний возраст

```javacript
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

const getAverageAge = arr => arr
    .map(human => human['age'])
    .reduce(
        (acc, age) => acc + age,
        0
    ) / arr.length;

console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
```

##### Оставить уникальные элементы массива

```javascript
function unique(arr) {
  return [...new Set(arr)];
}

let strings = [
  "кришна",
  "кришна",
  "харе",
  "харе",
  "харе",
  "харе",
  "кришна",
  "кришна",
  ":-O",
];

console.log(unique(strings)); // кришна, харе, :-O
```

##### Создайте объект с ключами из массива

```javascript
let users = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];

const groupById = (arr) =>
  arr.reduce((obj, user) => {
    const key = user.id;
    return { ...obj, [key]: user };
  }, {});

let usersById = groupById(users);

console.log(usersById);

/*
// после вызова у нас должно получиться:

usersById = {
john: {id: 'john', name: "John Smith", age: 20},
ann: {id: 'ann', name: "Ann Smith", age: 24},
pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/
```

#### Задачи от Соло

##### 1 Все элементы четные

```javascript
const arr1 = [0, 2, 4, 6];
const arr2 = [0, 1, 3];

const arr_check = (arr) => arr.every((el) => el % 2 === 0);

console.log(arr_check(arr1));
console.log(arr_check(arr2));
```

##### 2 Хотя бы один нечетный

```javascript
const arr1 = [0, 2, 4, 6];
const arr2 = [0, 1, 3];
const arr3 = [1, 3, 5, 7];
const arr4 = [];

const arr_check = (arr) => arr.some((el) => el % 2 !== 0);

console.log(arr_check(arr1));
console.log(arr_check(arr2));
console.log(arr_check(arr3));
console.log(arr_check(arr4));
```

##### 3 Элементы кратные пяти

```javascript
const arr1 = [0, 3, 5, 10, 15, 21];
const arr2 = [0, 1, 3, 5];
const arr3 = [0, 15, 25, 11235];
const arr4 = [];

const five_filter = (arr) => arr.filter((elem) => elem % 5 === 0);

console.log(five_filter(arr1));
console.log(five_filter(arr2));
console.log(five_filter(arr3));
console.log(five_filter(arr4));
```

##### 4 Среднее арифметическое

```javascript
const arr1 = [0, 3, 5, 10, 15, 21];
const arr2 = [0, 1, 3, 5];
const arr3 = [0, 15, 25, 11235];
const arr4 = [];

const mean = (arr) =>
  parseFloat(
    (arr.reduce((acc, val) => acc + val, 0) / arr.length).toPrecision(2)
  );

console.log(mean(arr1));
console.log(mean(arr2));
console.log(mean(arr3));
console.log(mean(arr4));
```

##### 5 Перенос первого элемента в конец

```javascript
const arr0 = [1, 2, 3, 4, 5];
const arr1 = [0, 3, 5, 10, 15, 21];
const arr2 = [0, 1, 3, 5];
const arr3 = [0, 15, 25, 11235];
const arr4 = [];

const poping = (arr) => {
  arr.push(arr.shift());
};

poping(arr0);
console.log(arr0);
poping(arr1);
console.log(arr1);
poping(arr2);
console.log(arr2);
poping(arr3);
console.log(arr3);
poping(arr4);
console.log(arr4);
```

##### 6 Стрингификация объекта

```javascript
const employers = [
  { name: "Ivan", age: 23 },
  { name: "Nadya", age: 26 },
  { name: "Pavel", age: 43 },
];

const em_to_str = (arr) =>
  arr.map((empl) =>
    Object.keys(empl)
      .map((key, i) => `${key}: ${empl[key]}`)
      .join(", ")
  );

let b = em_to_str(employers);
console.log(b);
```

##### 7 Хотя бы одна повторяющаяся буква

```javascript
const cities = ["Moscow", "London", "New York", "Rome", "Minsk"];

const is_repeated = (arr) =>
  arr.filter((word) => {
    return new Set(word.toLocaleLowerCase().split("")).size < word.length;
  });

console.log(is_repeated(cities));
```

##### 8 фильтр по Сумма цифр четная

```javascript
const arr2 = [203, 256, 123, 17, 98, 107, 35];

const filter_even = (arr) =>
  arr.filter((num) => {
    return (
      `${num}`
        .split("")
        .map(Number)
        .reduce((acc, num) => acc + num, 0) %
        2 ==
      0
    );
  });

const b = filter_even(arr2);
console.log(b);
```

### Итерабельный объект

Чтобы создать итерабельный объект, надо в нем прописать функцию с именем `[Symbol.iterable]`, которая должна возвращать объект с методом `next()`. Метод `next` должен возвращать два объект со следующей структурой:

```javascript
{
    done: Boolean,        // закончились ли итерации
    value: any,    // текущее состояние счетчика
}
```

```javascript
class Range {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  [Symbol.iterator] = () => {
    console.log(this);
    return {
      current: this.start,
      last: this.end,
      next() {
        if (this.current < this.last)
          return { done: false, value: this.current++ };
        else return { done: true };
      },
    };
  };
}

const r = new Range(0, 10);
for (let i of r) {
  console.log(i);
}
```

Можно упростить, если итератор также будет возвраать объект:

```javascript
class Range {
  constructor(start, end) {
    this.start = start;
    // this.current = this.start;  // уcтнавливаем начальное значение
    this.end = end;
  }

  [Symbol.iterator] = () => {
    this.current = this.start; // уcтнавливаем начальное значение
    return this; // возвразаем объект Range с функцией next()
  };

  next() {
    if (this.current < this.end) {
      return { done: false, value: this.current++ };
    } else return { done: true };
  }
}

const r = new Range(0, 10);
for (let i of r) {
  console.log(i);
}
```

По строкам и массивам также можно итерироваться.
Можно итерироваться вручную, но для этого надо будет вручную получить объект итератора и вызывать функцию `next`:

```javascript
const r = new Range(0, 10);

const iterator = r[Symbol.iterator]();
while (true) {
  const obj = iterator.next();
  console.log(obj.value);
  if (obj.done) break;
}
```

#### Итераторы vs Псевдомассивы

- итераторы - это объекты у которых есть свойство `[Symbol.iterate]`
- псевдомассивы - это объекты, у которых есть индексы и свойство `length`

Бывают и те и те объекты. Например строки, являются итериуемыми и псевдомассивами. Объект класса `Range` из прмиера выше является итериуемым, но не является псевдомассивом.

```javascript
const pseudoarray = {
  0: "Hello",
  1: "Goodbye",
  length: 2,
};
```

#### Array.from

Метод `Array.from` - создает настойщий массив из псевдомассива или итерабельного объекта.

```javascript
const arr = Array.from(new Range(0, 10)); // будет создан массив из 10 элементов из итератора
const arr2 = Array.from(pseudoarray); // ["Hello", "Goodbye"]
```

Можно указать трансформирующую функцию, которая будет применяться к каждому элементу массива. По аналогии с `map`.

```javascript
const r = new Range(0, 3);
const arr = Array.from(r, (n) => `+${n}`);
console.log(arr);
```

Также можно передать функцию преобразования и контекст её вызова

```javascript
Array.from(obj[, mapFn, thisArg])
```

### Map и Set. Коллекции

#### Map

Map - это коллекция пар ключ-значение, как и Object. Но основное отличие от Object в том, что Map позволяет использовать ключи любого типа.

- `new Map([obj])` - создание Map. Можно указать итерабельный объектс парами ключ-значение из которого он создастся.
- `map.set(key, value)` - запись по ключу `key` значение `value`
- `map.get(key)` - значение по ключу или `undefined`
- `map.has(key)` - Boolean - есть ли ключ
- `map.delete(key)` - кдаляет пару key-value
- `map.clear()` - удаляет все элементы из коллекции
- `map.size()` - количество элементов в коллекции

```javascript
const m = new Map([["name", "John"]]); // итерабельный объект из которого создастся Map
console.log(m);
```

**Не следует использовать `map[key] = value`, т.к. в таком случае map будет рассматриваться как обычный объект, что приведет к ссотвествующим ограничениям**

Можно использовать объекты и классы как ключи:

```javascript
const r = new Range(0, 3);
const m = new Map();
m.set(r, 0);
m.set(Range, 1);
console.log(m);
```

##### Перебор значений

Возвращает итератор по объектам. Можно использовать цикл `for ..of`
`map.keys()`
`map.values()`
`map.entries()` - можно просто исползовать `for (let entry of map)` без вызова метода `entries()`. Возвращает итерабельный объект с парами ключ-значение. `[[key1, value1], [key2, value2],...]`

```javascript
const iterator = m.values();
console.log(iterator);
console.log(iterator.next());
```

Можно использовать `map.forEach((key, value, map) => {...})` для перебора значений.

##### Создание Map из Object и Object из Map

Map создается из итерируемого объекта с парами `[ключ, значение]`.
Например `const m = new Map([['name', 'John']]);`.
Также если есть объект, то и него можно извлечь эти свойтсва с помощью метода `Object.entries(obj)`

```javascript
const user = { name: "John" };
const m = new Map(Object.entries(user));
console.log(m);
```

Можно выполнить и обратную операцию: из Map получить Object:

```javascript
const user = { name: "John" };
const m = new Map(Object.entries(user));
// const user2 = Object.fromEntries(m.entries());
const user2 = Object.fromEntries(m); // более коротко без m.entries()
console.log(user2); // { name: 'John' }
```

При этом создается неглубокая копия.

#### Set

Set - это особый вид Map, где нет ключей, а каждое значение может появляться только оидн раз. Аналог математического множества.

- `new Set([iterable])` - создание нового множества
- `set.add(value)` - добавялет в множество значение и возвращает `set`
- `set.delete(value)` - удаляет занчение `value` из множества. Воазращает `set`
- `set.has(value)` - Boolean. проверяет есть ли во множестве значние `value`
- `set.clear()` - удаляет все элементы из множества
- `set.size` - количество элементов множества

##### Перебор значений Set

Можно использовать `for...of set` и `map.forEach((value, valueAgain, set) => {...})`

```javascript
const set = new Set([1, 2, 3]);
set.forEach((value, valueAgain, map) => {
  console.log(value);
});
```

Set имеет те же методы, что и Map:

- `set.keys()` - возвращает перебирвемый объект из значений
- `set.values()` - то же, что и `.keys()`
- `set.entries()` - возвращает итерабельный объект вида `[[value1, value1], [value2, value2], ...]`.

#### Задачи

##### Фильтрация уникальных элементов массива

```javascript
function unique(arr) {
  return Array.from(new Set(arr).keys());
}

let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

console.log(unique(values)); // Hare,Krishna,:-O
```

##### Отфильтруйте анаграммы

Мой вариант

```javascript
"use strict";

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// надо сделать проверку на тождетво мноежеств
function sets_is_eq(a, b) {
  // множества являются тождественными, когда все элементы a содежратся в b и наоборот
  const a2 = structuredClone(a);
  const b2 = structuredClone(b);
  for (let elem of a2) {
    if (b2.has(elem)) {
      // можно (нужно!) без проверки, сразу удалять
      a2.delete(elem);
      b2.delete(elem);
    } else break; // несоответствие множеств
  }
  return a2.size === 0 && b2.size === 0;
}

function aclean(arr) {
  const res = [];
  // проходимся по всем словм и проверяем есть ли у текущего слова човпадение с уже бывшимы
  for (let ind in arr) {
    const word = arr[ind].toLocaleLowerCase();
    console.log(word);
    const set_of_chars = new Set(Array.from(word));
    Loop: {
      for (let i = 0; i < ind; i++) {
        const prev_word = arr[i].toLocaleLowerCase();
        const prev_set_of_chars = new Set(Array.from(prev_word));
        if (sets_is_eq(set_of_chars, prev_set_of_chars)) break Loop;
      }
      res.push(ind);
    }
  }
  return res.map((i) => arr[i]);
}

console.log(`res =`, aclean(arr)); // "nap,teachers,ear" или "PAN,cheaters,era"
```

2й вариант

```javascript
function aclean(arr) {
  const set_of_words = new Set();
  return arr.filter((word) => {
    const ordered_set_of_chars = Array.from(word.toLocaleLowerCase())
      .sort()
      .join("");
    const in_set = set_of_words.has(ordered_set_of_chars);
    set_of_words.add(ordered_set_of_chars);
    return !in_set;
  });
}

console.log(`res =`, aclean(arr)); // "nap,teachers,ear" или "PAN,cheaters,era"
```

3й вариант

```javascript
function aclean2(arr) {
  return Array.from(
    arr
      .reduce((map, word, arr) => {
        map.set(word.toLowerCase().split("").sort().join(""), word);
        return map;
      }, new Map())
      .values()
  );
}

console.log(`res =`, aclean2(arr)); // "nap,teachers,ear" или "PAN,cheaters,era"
```

### WeakMap и WeakSet

[https://learn.javascript.ru/weakmap-weakset](https://learn.javascript.ru/weakmap-weakset)

Сборщик мусора удаляет объекты, которые уже не доступны.
Если объект был устанволен в качестве ключа для Map или как значение для Set, то такой объект не будет удален, т.к. он используется внутри этих структур данных.

#### WeakMap

```javascript
let john = { name: "John" };

let map = new Map();
map.set(john, "...");

john = null; // перезаписываем ссылку на объект

// объект john сохранён внутри объекта `Map`,
// он доступен через map.keys()
```

WeakMap - принципиально другая структура данных: она позволяет сборщику мусора удалять объект, если он был использован в качесве ключа. Также в WeakMap нужно использоваться в качестве ключей только объекты, и нельщя использовать примитивы, например строки.
WeakSet не поддерживает методы `.values()` `.keys()` `.entries()` и-за особенностей технической реализации. Неизвестно какие ключи еще остались а какие будут удалены, т.к. движок javascript может удалить их в любой момент.

- `.has(key)`
- `.get(key)`
- `.set(key, value)`
- `.delete(key)`

В основном WeakMap применяется чтобы хранить дополнительную информацию об объектах, которые создаются в других модулях. Тогда мы можем быть уверенными, что объект будет действительно удален, когда в нем отпадет необходимость.

#### WeakSet

WeakSet ведёт себя похожим образом на WeakMap. Хранит значений только объектов и они присутсвтуют только до тех пор, пока существуют где-то еще. Не имеет методов просмотра содержимого, только методы установить, удалить, проверить ключ. Не является передираемым.

#### Задачи

#####

### Object.keys, values, entries

`Object.keys(obj)` – возвращает массив ключей.
`Object.values(obj)` – возвращает массив значений.
`Object.entries(obj)` – возвращает массив пар [ключ, значение].
В отличие от Map и Set тут возырвщвется не итерабельный объект, а реальный массив.

Также как и при цикле `for... in` будут проигнорированы все символьные свойства `Symbol()`
Если нужны символьные ключи, то существует метод `Object.getOwnPropertySymbols`, который вернет массив символьных ключей. Метод `Reflect.ownKeys(obj)`, который возвращает все ключи.

У обхекта нет собстыенных методов `filter`, `map` и т.д. Для их использования можно сначала преобразовать объект в массив значний, например `Object.entries`, произвести преобразования по цепочке, а затем преобразовать результат в объект методом `Object.fromEntries`.

#### Задачи

##### Сумма свойств объекта

```javacript
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function sumSalaries(obj) {
    return Object.values(obj).reduce((acc, salary) => acc + salary, 0)
};

console.log( sumSalaries(salaries) ); // 650
```

##### Подсчёт количества свойств объекта

```javascript
let user = {
  name: "John",
  age: 30,
};

function count(obj) {
  return Object.keys(obj).length;
}
console.log(count(user)); // 2
```

### Деструктурирующие присваивания

https://learn.javascript.ru/destructuring-assignment
Можно использовать занчения по-умолчанию

```javascript
// значения по умолчанию
let [name = "Guest", surname = "Anonymous"] = ["Julius"];

alert(name); // Julius (из массива)
alert(surname); // Anonymous (значение по умолчанию)
```

Значения по-умолчанию могуб быть и более сложными выражениями, например функциями. Они будут выполняться если значение не было присвоено.

```javascript
let user = {
  name: "John",
  age: 30,
};

// цикл по ключам и значениям
for (let [key, value] of Object.entries(user)) {
  alert(`${key}:${value}`); // name:John, затем age:30
}
```

Чтобы поменять имя переменой при деструктуризации объекта можно использовать двоеточие

```javascript
let options = {
  title: "Menu",
  width: 100,
  height: 200,
};

// { sourceProperty: targetVariable }
let { width: w, height: h, title } = options;

// width -> w
// height -> h
// title -> title

console.log(title); // Menu
console.log(w); // 100
console.log(h); // 200
```

При деструктуризации объекта также можно присваивать значению по умолчанию и использовать при этом вычисляемые значения.

Для передачи параметров в функцию удобно исползовать деуструктуризацию. Чтобы это работало также если в функцию ничего не передастся, можно по умолчанию передавать пустой объект

```javascript
function showMenu({ title = "Menu", width = 100, height = 200 } = {}) {
  console.log(`${title} ${width} ${height}`);
}

showMenu(); // Menu 100 200
```

##### Задача - самый высокооплачиваемый сотрудник

```javascript
let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function topSalary(salaries = {}) {
  return Object.entries(salaries).reduce(
    (acc, [name, salary]) => {
      const [, acc_salary] = acc;
      if (acc_salary < salary) {
        return [name, salary];
      }
      return acc;
    },
    [null, Number.MIN_VALUE]
  )[0];
}
console.log(topSalary(salaries));
```

### Дата и время

```javascript
let now = new Date(); // текущая дата
```

- `new Date(timestamp)` - новая дата через кол-во миллискунд с 1 янв 1970г
- `new Date(datestring)`
- `new Date(year, month, date, hours, minutes, seconds, ms)`, year - 4 цифры, month [0:11], date=1, ...=0

`date.getFullYear()`
`date.getMonth()`
`date.getDate()`
`getUTCFullYear()`, `getUTCMonth()`, `getUTCDay()` - варианты для UTC+0
`getHours()`, `getMinutes()`, `getSeconds()`, `getMilliseconds()`
`getDay()` - 0..6, 0 - вс, 6 - сб

`date.getTime()` - вернет таймстамп текущей даты
`date.getTimezoneOffset()` - разница в минутах между UTC+0 (-180 для UTC+3)

#### Устанока даты

- `setFullYear(year, [month], [date])`
- `setMonth(month, [date])`
- `setDate(date)`
- `setHours(hour, [min], [sec], [ms])`
- `setMinutes(min, [sec], [ms])`
- `setSeconds(sec, [ms])`
- `setMilliseconds(ms)`
- `setTime(milliseconds)`
  Для всех этим методом кроме setTime есть UTC аналоги.

#### Автоиспроавление

Автоисправление – это очень полезная особенность объектов Date. Можно устанавливать компоненты даты вне обычного диапазона значений, а объект сам себя исправит.

Увеличение текущей даты на 2 дня

```javascript
let date = new Date(2016, 1, 28);
date.setDate(date.getDate() + 2);
```

Увеличение текущего времени на 70 секунд:

```javascript
let date = new Date();
date.setSeconds(date.getSeconds() + 70);
```

Даты можно вычитать - получим реультат в миллисекундах.
Даты можно преоразоввывать в число через унарный `+` - тоже получим timestamp.

`Date.now()` - возвращает текущее время в мс без создания объекта времени.

#### Разбор строки с датой

`Date.parse(str)` `YYYY-MM-DDTHH:mm:ss.sssZ`
Возможны и более короткие варианты, например, YYYY-MM-DD или YYYY-MM, или даже YYYY.

### JSON

https://learn.javascript.ru/json
Если объекту создать метод `toJSON`, котрый будет аозвращать строку, то он будет использоаться для преобразования этого обекта через `JSON.strigify`

Для более точного контроля над преобразованием можно использоать функцию, которая передается вторым пааметром в JSON.parse и работает с парами ключ-значение

```javascript
let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

let meetup = JSON.parse(str, function (key, value) {
  if (key == "date") return new Date(value);
  return value;
});

alert(meetup.date.getDate()); // 30 - теперь работает!
```

### Рекурсия и стек

https://learn.javascript.ru/recursion

Любая рекурсия может быть переделана в цикл. Как правило, вариант с циклом будет эффективнее. Но это может быть нетривиальный процесс и результат может не стоит усилий, да и поддержка сложного кода может быть дороже.

Информация о процессе выполнения текущей функции хранится в её контексте выполнения `execution context`
**Контекст выполнения** – специальная внутренняя структура данных, которая содержит информацию о вызове функции. Она включает в себя конкретное место в коде, на котором находится интерпретатор, локальные переменные функции, значение `this` и прочую служебную информацию.

```javascript
let company = {
  sales: [
    {
      name: "John",
      salary: 1000,
    },
    {
      name: "Alice",
      salary: 600,
    },
  ],

  development: {
    sites: [
      {
        name: "Peter",
        salary: 2000,
      },
      {
        name: "Alex",
        salary: 1800,
      },
    ],

    internals: [
      {
        name: "Jack",
        salary: 1300,
      },
    ],
  },
};

// функция для получения суммы всех зарплат
function sum_salaries(obj) {
  let sum = 0;
  if ("name" in obj && "salary" in obj) {
    sum += obj["salary"];
  } else if (Array.isArray(obj)) {
    for (let o of obj) {
      sum += sum_salaries(o);
    }
  } else {
    for (let [key, o] of Object.entries(obj)) {
      sum += sum_salaries(o);
    }
  }
  return sum;
}

console.log(sum_salaries(company));
```

или более короткая версия:

```javascript
function sum_salaries(obj) {
  if (Array.isArray(obj)) {
    return obj.reduce((acc, curr) => acc + curr.salary, 0);
  } else {
    let sum = 0;
    for (let o of Object.values(obj)) {
      sum += sum_salaries(o);
    }
    return sum;
  }
}
```

#### Задачи

##### Вычислить сумму чисел до данного

```javascript
function sum_to_n(n) {
  return n < 1 ? n : n + sum_to_n(n - 1);
}
console.log(sum_to_n(100));
```

##### Вычислить факториал

```javascript
function fac(n) {
  return n <= 1 ? n : n * fac(n - 1n);
}
console.log(fac(10000n));
```

##### Числа Фибоначчи

```javascript
function fib(a, dict = {}) {
  if (a < 2) {
    dict[a] = a;
    return a;
  } else {
    if (!(a - 2n in dict)) {
      dict[a - 2n] = fib(a - 2n, dict);
    }
    if (!(a - 1n in dict)) {
      dict[a - 1n] = fib(a - 1n, dict);
    }
    return dict[a - 2n] + dict[a - 1n];
  }
}
console.log(fib(77n));
```

##### Вывод односвязного списка

```javascript
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};
function print_list(list) {
  const next = list.next;
  console.log(list.value);
  if (next) {
    print_list(next);
  }
}
function prnt_list(list) {
  let elem = list;
  do {
    console.log(elem.value);
    elem = elem.next;
  } while (elem);
}
```

##### Вывод односвязного списка в обратном порядке

```javascript
function print_rev(list) {
  const next = list.next;
  if (next) print_rev(next);
  console.log(list.value);
}
```

### Остаточные параметры и оператор расширения

https://learn.javascript.ru/rest-parameters-spread-operator
Функцию сдвумя параметрами можно вызвать с любым количеством параметров, но работать она будет только с первыми дувумя.

```javascript
function sum_all(...args) {
  return args.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
}
console.log(sum_all(1, 2, 3));
```

Остаточные параметры ставяться только в конце списка параметром.

```javascript
function fund_max(a, b, ...rest) {
  //...
}
```

#### arguments

Внутри каждой функции, за исключением стрелочной, есть переменная `arguments`, которая похожа на массив и содеожит аргументы, переданные в функцию.
У стрелочной функции нет своих аргументов, и вместо них мы получим аргументы внешней функции.

### spread ...values

Можно распаковать знчения массива или объекта с помощью оператора `...`

```javascript
const values = [1, 2, 3];
console.log(Math.max(...values, 4)); // 4
```

```javascript
const res = [...values, 2, ...values, 3];
console.log(res);
```

```javascript
const chars = [..."Привет"];
```

### Замыкание Closure

```javascript
function make_worker() {
  const worker = "Peter";
  return function () {
    console.log(worker);
  };
}

make_worker()();
```

#### Лексическое Окружение

В JavaScript у каждой выполняемой функции, блока и скрита есть связанный с ним внутренний объект, называемый лексическим окружением Lexical Environment.
Лексическое окружение состоит из трех частей:

- **Environment Record** - объект, в котором в свойствах храняться все значения локальных переменных, а также некотороя другая информация, например значение `this`.
- Ссылка на внешнее лексическое окружение, т.е. то, которое соответствует коду снаружи.

Переменная в JavaScript - это свойство лексического объекта Envirinment Record.

### function declaration

В отличе от переменных декларация функции инициализирует значение не когда выполнение строк кода доходид до них, а при создании лексического окружения. Т.е. когда скрипт начинает выполнение или при заходе в блок кода.

### Внутреннее и внешнее лексическое окружение

Функция может получать доступ к внешней переменной. В момент запуска функции для неё автоматически создается лексическое окружение для хранения локальных переменных и параметров выхова. Таким образов в процессе выхова функции у нас есть два лексических окружения у нее:

- внутреннее (собсбвенное)
- внешнее (глобальное)
  Во внутреннем лексическом окружении есть ссылка `outer` на внешнее лексическое оуружение.
  при оиске значеиния переменное сначала проихсодит посик в локальном лексическом окружении, затем во вншнем и т.д. по цепочке.

Если переменная не была найдена, то в строгом режиме будет ошибка, а не в строгом будет создана новая глобальная переменная с таким именем.

Новое лексичекое окружение создается каждый раз, когда выывается функция.

### Вложенные функции

Функция называется вложенной, если она создается внутри другой функции.

```javascript
function makeCounter() {
  let count = 0;

  return function () {
    return count++; // есть доступ к внешней переменной "count"
  };
}

let counter = makeCounter();
console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2
```

Функция makeCounter при вызове создает переменную count = 0 и возвращает функцию, которая при вызове возвращает следующее число.
При каждом вызове counter() происходит поиск переменной `count` сначала в локальной области, затем во внешней области где и находится. Затем она выводится и увеличивается на 1.

Для каждого вызова counter() создается свое лексическое окружение функции.
Все функции при "прождении" получают новое свойство `[[Environment]]`, которое ссылается на лексическое окружение место, где были созданы.
`[[Environmet]]` `MakeCounter` ссылается на глобальное лексическое окружение
`[[Environment]]` функции, возвращаемой через MakeCounter ссылается на лексическое окрежение MakeCounter.

Хотя `makeCounter()` к моменту вызова `counter()` закончил выполнение неокторое время назад, в памяти все еще остается возващаемое им значение, которое имеет ссылку `[[Environment]]`, которая ссылается на его лексическое окружение, поэтому его лексическое окружение еостается все ещё в памяти.

**Замыкание** - это функция, которая запоминает свои внешние переменные и может получить к ним доступ. В некоторых языках это невозможно, или функция должна быть написана специальным образом, чтобы получилось замыкание. Но, как было описано выше, в JavaScript, все функции изначально являются замыканиями (есть только одно исключение, про которое будет рассказано в Синтаксис "new Function").

#### Блоки кода и циклы, IIFE

Лексическое окружение существует не только для функций, но для любых блоков кода в `{...}`.
Лексическое окружение создается при выполнении блока кода и содержит локальные переменные для этого блока. В строгом режиме, все переменные, function declaration и function expression остаются внутри локального блока кода и не видны снаружи.

Для каждой итерации цикла создается свое отдельное локальное лексическое окружение.

#### IIFE

Раньше в JavaScript не было лексического окружения на уровне блока кода, поэтому появилось immidiately invoked function expression

```javascript
(function () {
  name = "John";
  console.log(name);
})();
```

Скобки вокруг функции дают понять, что она была создана в конексте другого выражения и ей не нужно имя.

```javascript
// Пути создания IIFE

(function () {
  alert("Скобки вокруг функции");
})();

(function () {
  alert("Скобки вокруг всего");
})();

!(function () {
  alert("Выражение начинается с логического оператора NOT");
})();

+(function () {
  alert("Выражение начинается с унарного плюса");
})();
```

#### Оптимизация движка

Движок V8 оптимизирует испотльзование памяти и если видит что переменная не будет использована, то удалит её:

```javascript
function f() {
  let value = Math.random();

  function g() {
    debugger; // в консоли: напишите alert(value); Такой переменной нет!
  }

  return g;
}

let g = f();
g();
```

в данном примере если код выполнить в браезере и остановить выполнение программы в месте debugger, то окажется что переменной value не существует, т.к. движок удалил её, хотя если обратиться к ней их функции, то она найдётся во внешнем лексическом окружении.

Может случиться так, что при отладке мы увидим значение другой переменной вместо удаленной, которая будет находиться в более внешнем не удаленном блоке кода.

#### Задачи

##### Сумма с помощью замыканий

```javascript
function sum(a) {
  return function (b) {
    return a + b;
  };
}

console.log(sum(1)(2));
```

##### Фильтрация с помощью функции

```javascript
let arr = [1, 2, 3, 4, 5, 6, 7];

function inBetween(a, b) {
  return function (value) {
    return value >= 3 && value <= b;
  };
}

function inArray(arr) {
  return function (value) {
    return arr.includes(value);
  };
}
console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6
console.log(arr.filter(inArray([1, 2, 10]))); // 1,2
```

##### Сортировать по полю

```javascript
let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" },
];

function byField(name) {
  return function (a, b) {
    return a[name] > b[name] ? 1 : -1;
  };
}

users.sort(byField("name"));
console.log(users);
users.sort(byField("age"));
console.log(users);
```

##### Армия функций

```javascript
function makeArmy() {
  let shooters = [];

  for (let i = 0; i < 10; i++) {
    // для каждой итерации for создается свое лексическое окружение со своей i
    let shooter = function () {
      // функция shooter
      console.log(i); // должна выводить порядковый номер
    };
    shooters.push(shooter);
  }

  return shooters;
}

let army = makeArmy();

army[0](); // у 0-го стрелка будет номер 10
army[5](); // и у 5-го стрелка тоже будет номер 10
// ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...
```

### Устаревшее ключевое слово "var"

https://learn.javascript.ru/var

- Область видимости переменных var ограничивается либо функцией, либо, если переменная глобальная, то скриптом. Такие переменные доступны за пределами блока.

- Используя var, можно переобъявлять переменную сколько угодно раз. Повторные var игнорируются

- Объявления переменных var обрабатываются в начале выполнения функции (или запуска скрипта, если переменная является глобальной).
  Это поведение называется «hoisting» (всплытие, поднятие), потому что все объявления переменных var «всплывают» в самый верх функции.
- Объявления переменных «всплывают», но присваивания значений – нет.
  Значит если переменная обхъявлена, то она будет существовать еще до этой строчки кода, а если вот её значение ещё будет старым (undefined).

### Глобальный объект

https://learn.javascript.ru/global-object
Предоставляет переменные и функции, доступные в любом месте программы.
В браузере это `Window` в Node.js это `global`.
Имеет универсвльное имя **`globalThis`**.

```javascript
global.gVar = 5;

function glob() {
  console.log(globalThis, globalThis.gVar);
}

glob();
console.log(globalThis.gVar);
```

Если свойство очень важное, то можно записать его в глобальный объект напрямую.
Но так не рекомендуется, т.к. дизайн функций где им передаются параметры намного удобнее, надежнее и понятен.

#### Использование для полифилов

Глобальный объект можно использовать, чтобы проверить поддержку современных возможностей языка.

Например, проверить наличие встроенного объекта Promise (такая поддержка отсутствует в очень старых браузерах):

```javascript
if (!window.Promise) {
  console.log("Ваш браузер очень старый!"); // отсутсвуют промисы
  window.Promise = ... // собственная реализация современной возможности языка
}
```

- Глобальный объект хранит переменные, которые должны быть доступны в любом месте программы.

- Это включает в себя как встроенные объекты, например, `Array`, так и характерные для окружения свойства, например, `window.innerHeight` – высота окна браузера.

- Глобальный объект имеет универсальное имя – `globalThis`.
  …Но чаще на него ссылаются по-старому, используя имя, характерное для данного окружения, такое как window (браузер) и global (Node.js).

- Следует хранить значения в глобальном объекте, только если они действительно глобальны для нашего проекта. И стараться свести их количество к минимуму.

- В браузерах, если только мы не используем модули, глобальные функции и переменные, объявленные с помощью `var`, становятся свойствами глобального объекта.

- Для того, чтобы код был проще и в будущем его легче было поддерживать, следует обращаться к свойствам глобального объекта напрямую, как `window.x`.

### Объект функции, NFE

https://learn.javascript.ru/function-object
В джаваскрипт функции - это объекты. Поэтому их можно не только вызывать но и использовать и добавлять удалять другие их свойства.

- `name` - имя функции
  Имя функции определяется даже когда оно не передано явно (например это функция, присвоенная переменной). Методы объекта также имеют имя.
  В случае когда имя функции определить невозможно оно будет ``.
- `length` - содержит количество параметров, с которым обхявлена функция.

  ```javascript
  function get_len(...args) {
    console.log(arguments);
  }
  console.log(get_len.length); // 0
  ```

  В этом случае троеточие, отвечающее за остаточные параметры, не считается.

  Иногда это свойство применяется для того чтобы вызывать некоторые функции, исходя и количества их параметров.

- **пользовательские свойства**
  внутри функции можно созать пользовательские свойтва. Свойства функции это не её локальные переменные.

  ```javascript
  get_len.counter = 0;
  function get_len(...args) {
    console.log(`Вызвана ${++get_len.counter} раз`);
  }

  get_len();
  get_len();
  get_len();
  console.log(get_len.counter);
  ```

  Иногда свойства функции используются как её замыкания.

  ```javascript
  function count() {
    count.counter = 0;
    function inner() {
      console.log(count.counter++);
    }
    return inner;
  }
  const a = count();
  a();
  a();
  ```

#### NFE

Named Functon Expression

```javascript
let say = function say_hello() {
  console.log(`Hello fron ${say_hello.name}`);
};

const welcome = say;
say();
say = 2;
welcome();
```

Данный код позволяет функции сылаться на саму себя по имени `say_hello`, а не по переменной `say`, которая может быть изменена, что может привезти к ошибкам в функции.

NFE не рабоатет для Funciton Declaration. Если надо внетри function Declaration ссылаться на имя функции, то зачастую лучше переписать её как Named Function Expression.

Также функции могут содержать дополнительные свойства. Многие известные JavaScript-библиотеки искусно используют эту возможность.

Они создают «основную» функцию и добавляют множество «вспомогательных» функций внутрь первой. Например, библиотека jQuery создаёт функцию с именем `$`. Библиотека lodash создаёт функцию `_`, а потом добавляет в неё `_.clone`, `_.keyBy` и другие свойства (чтобы узнать о ней побольше см. документацию). Они делают это, чтобы уменьшить засорение глобального пространства имён посредством того, что одна библиотека предоставляет только одну глобальную переменную, уменьшая вероятность конфликта имён.

Таким образом, функция может не только делать что-то сама по себе, но также и предоставлять полезную функциональность через свои свойства.

#### Задачи

##### Установка и уменьшение значения счётчика

```javascript
function makeCounter() {
  let count = 0;

  function counter() {
    return count++;
  }

  counter.set = function (value) {
    count = value;
  };

  counter.descrease = function () {
    return count--;
  };

  return counter;
}

const c = makeCounter();
console.log(c());
console.log(c());
console.log(c());
c.set(7);
console.log(c());
console.log(c.descrease());
console.log(c.descrease());
```

##### Сумма с произвольным количеством скобок

```javascript
function sum(a) {
  let csum = a;

  function f(b) {
    csum += b;
    return f;
  }

  f.toString = () => {
    return csum;
  };

  return f;
}

console.log(sum(1)(2) == 3);
```

### Синтаксис "new Function"

https://learn.javascript.ru/new-function

```javascript
let sum = new Function("a", "b", "return a + b");

alert(sum(1, 2)); // 3
```

Тело функции при таком вызове передается прямо в виде строки.
Таким образом можно динасмически содавать функцию из строки, полученной с сервера.

```javascript
new Function("a", "b", "return a + b"); // стандартный синтаксис
new Function("a,b", "return a + b"); // через запятую в одной строке
new Function("a , b", "return a + b"); // через запятую с пробелами в одной строке
```

При таком способе создания функции в её Environment записывается ссылка не на внешнее лексическое окружение. а на глобальное.

```javascript
global.value = 1;
function outer() {
  const value = 4;
  const inner = new Function("console.log(value);");
  inner();
}

outer(); // 1
```

Проблема в том, что перед отправкой JavaScript-кода на реальные работающие проекты код сжимается с помощью минификатора – специальной программы, которая уменьшает размер кода, удаляя комментарии, лишние пробелы, и, что самое главное, локальным переменным даются укороченные имена.
Поэтому если в передавать имя параметра в функцию в виде строки, то он не изменитсья в отличие от имен других локальныйх параметров.

### setTimeout и setInterval

https://learn.javascript.ru/settimeout-setinterval

#### setTimeoit

```javascript
let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...);
```

- `func|code` - функция или строка кода.
- delay - задержка в мс
- arg1 - аргументы функции через запятую

Созданный ранее таймер можно отменить.

```javascript
let timerId = setTimeout(...);
clearTimeout(timerId);
```

#### setInterval

```javascript
let timerId = setInterval(func|code, [delay], [arg1], [arg2], ...);
```

При этом функция запускаетсявсе время через заданный интервал времени.
Может привести к проблемам если время выполнения функции больше чем пауза между выховами - тогда время выполнения функции буде накладываться дург на друга.

#### вложенный setTimeout

```javascript
function tick() {
  console.log("tick");
  setTimeout(tick, 1000);
}

const timerId = setTimeout(tick, 1000);
```

Вложенный setTimeout позволяет более гибко управлять временем и не накладывать вызовы функции друг на друга на временной шкале.

#### Сборшик мусора

При создании таймера ссылка на функцию создается внутреняя ссылка, которая сохраняется в планировщике. Это предотвращает попадание функции в сборзик мусора, даже если на нее пропали все ссылки.

При создании setInterval сборщик мусора не будет удалять функцию до того момента, как не будет выполнен `clearIterval`.

Но при этом, т.к. эти функции ссылаются на внешнее лексическое окружение, то оно тоже существует. Поэтому если таймер больше не нужен то лучше его отменять.

Минимальная задерка по стандарту HTML5 «после пяти вложенных таймеров интервал должен составлять не менее четырёх миллисекунд.».

#### Задачи

##### Вывод каждую секунду

```javascript
function printNumbers(from, to) {
  let init = from;

  setTimeout(function timer() {
    console.log(init);
    init++;
    if (init <= to) {
      setTimeout(timer, 1000);
    }
  }, 1000);
}

printNumbers(1, 10);
```

```javascript
function printNumbers(from, to) {
  let init = from;
  console.log(init);
  if (init < to) {
    init++;
    setTimeout(printNumbers, 1000, init, to);
  }
}

printNumbers(1, 10);
```

#### Задачи 8-2

##### 1

```javascript
function fac(n) {
  if (n <= 1) return 1n;
  else {
    return BigInt(n) * fac(n - 1);
  }
}

console.log(fac(1000));
```

##### 2

```javascript
function sayCount() {
  let count = 1;
  function inner(name) {
    console.log(`Hello ${name}, you are guest number ${count++}`);
  }
  return inner;
}

const hiHuman = sayCount();

hiHuman("Bill"); // hello Bill, you are guest number 1
hiHuman("Sam"); // hello Bill, you are guest number 2
hiHuman("Nick"); // hello Bill, you are guest number 3
```

### try...catch. Обработка ошибок

https://learn.javascript.ru/try-catch

```javascript
try {
    ...
}
catch (err) {
    ...
}
```

ПРи этом асинжронный код, который будет запланирован внутри блока try не будет обрабатываться как осшибка в блоке `catch`, а приведет к оишбке. Движок будет обрабатывать эту функцию уже позже, когда он покинет данную конструкцию try..catch.

При возникновении ошибки движок создает объект ошибки и передает его как аргумент в блок catch.
Для всех встроенных ошибок этот объект имеет два основных свойства

- `name` - имя ошибки (имя конструктора ошибки (класса))
- `message` - тектовое сообщение о деталях ошибки
- `stack` - строка, содержащая последовательность стека вызова. Доступна в большинстве окружений.

Чтобы создать собсвенную ошибку можно с помощью оператора `throw`:

```javascript
throw <объект ошибки>
```

При этом объектом ошибки может быть не только `new Error` но и любой примитив.

Технически в качестве объекта ошибки можно передать что угодно. Это может быть даже примитив, число или строка, но всё же лучше, чтобы это был объект, желательно со свойствами `name` и `message` (для совместимости со встроенными ошибками).

В JavaScript есть множество встроенных конструкторов для стандартных ошибок: `Error`, `SyntaxError`, `ReferenceError`, `TypeError` и другие. Можно использовать и их для создания объектов ошибки.

```javascript
let error = new Error(message);
// или
let error = new SyntaxError(message);
let error = new ReferenceError(message);
```

Для таких встроенных типов ошибок `name` ошибки берётся из имени конструктора, а `message` из из аргумента.

#### Проброс исключения

Есть простое правило: **блок `catch` должен обрабатывать только известные ему ошибки и пробрасывать все остальные.**

1. Блок `catch` получает все ошибки.
2. В блоке `catch(err) {...}` мы анализируем объект ошибки `err`.
3. Если мы не знаем как её обработать, тогда делаем `throw err`.

```javascript
...
catch (e) {
  if (e.name == "SyntaxError") {
    alert( "JSON Error: " + e.message );
  } else {
    throw e; // проброс (*)
  }
}
```

#### `try…catch…finally`

Блок `finally` срабатывает при любом выходе из `try..catch`, в том числе и `return`.

Если в `try` происходит `return`, то `finally` получает управление до того, как контроль возвращается во внешний код.

Конструкция `try..finally` без секции `catch` также полезна. Мы применяем её, когда не хотим здесь обрабатывать ошибки (пусть выпадут), но хотим быть уверены, что начатые процессы завершились.

#### Глобальный `catch`

Иногда нуно отслеживать оишбки глобально. В спецификации такого способа нет, но обычно окружения предоставляют его.

- в Node.js есть `process.on('uncaughtException')`
- в браузере есть специальный коллбак, который будет вызван при ошибке
  `javascript
window.onerror = function(message, url, line, col, error) {
    ...
}
`
  Обычно глобальный обработчик события нужен для того, чтобы сообщить об ошибке разработчику.

Существуют также веб-сервисы, которые предоставляют логирование ошибок для таких случаев, такие как https://errorception.com или http://www.muscula.com.

Они работают так:

1. Мы регистрируемся в сервисе и получаем небольшой JS-скрипт (или URL скрипта) от них для вставки на страницы.
2. Этот JS-скрипт ставит свою функцию `window.onerror`.
3. Когда возникает ошибка, она выполняется и отправляет сетевой запрос с информацией о ней в сервис.
   Мы можем войти в веб-интерфейс сервиса и увидеть ошибки.

#### Пользовательские ошибки. Расширения Error

https://learn.javascript.ru/custom-errors

Наши ошибки должны поддерживать стандартные свойтсва `name` `message` `stack`, но могут обладать и своими собственными свойствами

```javascript
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function test() {
  throw new ValidationError("Упс!");
}

try {
  test();
} catch (err) {
  if (err instanceof ValidationError) {
    alert("Некорректные данные: " + err.message); // Некорректные данные: Нет поля: name
  } else {
    throw err; // неизвестная ошибка, пробросить исключение (**)
  }
}
```

Чтобы кадый раз не присвивать в конструкторе `.name` можно сделать собственный класс где параметру `name` присваивается имя конструктора, а затем наследовать все остальные классы ошибок от него:

```javascript
class MyError extends Error {
    constructor(message) {
        this.message = message;
        this.name = this.constructor.name;
    }
}

class Validation Error extends MyError {
    constructor(message) {
        super(message);
    }
}
```

#### Обертывание ошибок

В будущем функция может расширяться и генерировать новые классы ошибок.
Не имеет смысла проверять все ошибки внутри одной функции. Внешний код должен отлавливать более общие ошибки. Он ловит ошибки и если они совпадают с теми, что генерирует функция по документации, то поднимает более общий класс ошибки. Например если функция генерирует `ошибку1` и `ошибку2`, то внешний вызывающий код в блоке `catch` может проверять на совпадаение этим двум ошибкам и в случае совпадения генерировать более общую ошибку `ошибка12`. Для этого можно сначала написать класс ошибки `ошибка12`, а потом от него унаследовать классы ошибок `ошибка1` и `ошибка2`. Тогда можно во внешней функции проверять класс оишбки `if (error isInstanceOf Error12)` на принадлежность родительскому классу и обрабатывать исключение в этом случае, вместо того чтобы проверять возникшую ошибку для каждого из дочерних классов `ошибка1` и `ошибка2`.

#### Задачи

##### Наследование от SyntaxError

```javascript
class FormatError extends SyntaxError {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

let err = new FormatError("ошибка форматирования");

console.log(err.message); // ошибка форматирования
console.log(err.name); // FormatError
console.log(err.stack); // stack

console.log(err instanceof FormatError); // true
console.log(err instanceof SyntaxError);
```

### Сетевые запросы

https://learn.javascript.ru/network

#### fetch

https://learn.javascript.ru/fetch

```javascript
let promise = fetch(url, [options]);
```

Без указания `options` - это простой GET запрос, скачивающий содержимое сайта по ссылке.
При выполнения кода браузер сразу начинает запрос и тут же возвращает промис, который используется для получения результата.

Промис завершиться с ошибкой, если произошла ошибка сети или сайт не был найден.
Если произошла ошибка на стороне сервера, 404 или 500, то промис будет заресолвен корректно.

- `.status` - код http запроса
- `.ok` - true, если код 200-299

Для олучения тела ответа нам надо использоать дополнительный метод вызова

- `.response.text()` - читает ответ и возвращает как обычный текст
- `.response.json()` - декодирует ответ в формате JSON и возвращает объект
- `.response.formData()` - возвращает объект как объект `FormData`
- `.response.blob()` - возвращает данные как [Blob](https://learn.javascript.ru/blob) (бинарные данные с типом)
- `response.arrayBuffer()` – возвращает ответ как [ArrayBuffer](https://learn.javascript.ru/arraybuffer-binary-arrays) (низкоуровневое представление бинарных данных),
- помимо этого, `response.body` – это объект [ReadableStream](https://streams.spec.whatwg.org/#rs-class), с помощью которого можно считывать тело запроса по частям.

```javascript
let url =
  "https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits";

fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    // console.log(json);
    return json[0];
  })
  .then((commit) => {
    console.log(commit);
  });
```

!**ВАЖНО**: мы можем выбирать только один метод чтения объекта. Если не уже сработал метод `response.json()` то метод `response.text()` работать не будет, т.к. данные уже были обработаны.

#### Заголовки ответа

Заголовки ответа находятся в свойстве `resonse.headers` похожим на Map.

```javascript
let url =
  "https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits";

fetch(url).then((response) => {
  console.log(response.headers);
  for (let [header, value] of response.headers) {
    console.log(`${header}: ${value}`);
  }
});
```

### Заголовки запроса

Для установки заголовков можно использовать опцию `headers` в передаваемом объекте `options`:

```javascript
const response = await fetch(url, {
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
});
```

Есть некоторые заголовки которые нельзя выставлять, т.к. они нужны для правильного функционирования протокола http и выставляются только браузером.

#### POST запросы

Для отправки POST запроса нужно использовать свойство `method` в опциях `fetch`:

```javascript
const response = fetch(url, {
  methos: "POST",
  headers: { "Content-Type": "application/json;charset=utf-8" },
  body: JSON.stringify(sended_data),
});
```

По умолчанию `body` считается за строку, поэтому заголовоу `content-type` по-умолчанию будет стакже `text/plain;charset=utf-8`.

### callbacks

https://learn.javascript.ru/async
https://learn.javascript.ru/callbacks
Асинхронное программирование с использованием коллбеков - это выхов некой функции по заврешении работы функции. Коллбек - это обычно некая функция, которая вызывается как отработал код функции.
Напрмиер есть функция, которая выполняет некие асинхронные операции.
**callback** - некая функция, которая будет выполнена по завершению асинзронной операции.

#### Коллбек в коллбеке

Если надо загрузить один скрипт за другим?
Загружаем первый, в коллбеке передаем загрузку второго скрипта, а затем в коллбеке после загрузки второго выполняем действие.

```javascript
loadScript("script1.js", () => {
  loadScript("script2.js", () => {
    loadScript("script3.js", () => {
      //... и так далее
    });
  });
});
```

#### Перехват ошибок

Что если скрипт загрузился с ошибками. После каждой загрузки скрипта надо делать проверку.

```javascript
loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => { // при загрузке скрипта
        callback(null, script);     // продожаем его
    };
    script.onerror = () => {
        callback(new Error(`Не удалось загрузить ${src}`));
    };
    document.head.append(script);
}
```

```javascript
loadScript('./script1.js', function (error,  script) => {
    if (error) {
        console.error(`скриет не загрузился`);
    }
    else {
        // скрипт загрузился, продолжаем работу
    }
});
```

Правила при создании callback функции:

- первый аргумент зафиксирован для ошибок
- второй и последующие аргументы для результатов выполнения

#### callback hell

При многократных вызовах коллбаков есть возможность скатиться в calback hell - код в котором ужасная структура с огромной вложенностью.
Дерево вызовов растет с каждым выховом асинхронной функции.
Можно изолироать все действия в отдельные функции и не писать их вложенно. По сути это то же самое, но читать еще более неудобно, т.к. код более разорван.

### Промисы

https://learn.javascript.ru/promise-basics

1. Есть **создающий код**, который делает что-то, что занимает время. Например загружает данные по сети.
2. Есть **потребляющий код**, который хочет получить то, что создает _создающий код_, когда оно будет готово. Это может быть более чем одна функция.
3. **`Promise`** - специальный объект в JavaScript, который связывает создающий и потребляющий код вместе.

```javascript
const promise = new Promise(function (resolve, reject) {
  // код функции исполнителя
});
```

**resolve** и **reject** - это коллбеки, которые передаются внуть промиса.

- `resolve(value)` - полчает результат
- `reject(error)` - получает ошибку

У объекта `promise` есть внутренние свойства:

- `state` - состояние
  - `"pending"s` ожидание
  - `"fullfilled"` - выполнение успешно при вызове `resolve`
  - `"rejected"` - выполнено с ошибкой при вызове `reject`
- `result` - результат
  - `undefined` вначала
  - `value` - при вызове `resolve(value)`
  - `error` - при вызове `reject(error)`

Это внутренние свойства объекта `Promise` и мы не можем их изменять. Для работы с ними есть потребители `.then` `.catch` и `.finally`

Итак:

1. В момент вызова промиса будет асинхронно запущена функция исполнитель внутри промиса, которая должна будет вызвать или `resolve(value)` или `reject(error)`.

2. `resolve` и `reject` - это встроенные функции в JavaScript

Промис может быть разрешен только один раз, т.е. выполниться первый раз только `resolve` или `reject`. Все последующие вызовы будут проигнорированы.

#### потребители `.then` `.catch`

##### **`.then`**

Умеет обрабатывать как успешное так и ошибочный результат выполнения промиса

```javascript
promise.then(
  function (result) {}, // выполняется при resolve(value)
  function (error) {} // выполняется при reject(error)
);
```

##### **`.catch`**

Чтобы не писать `promise.then(null, error => {/*...*/})` можно использовать `catch`:

```javascript
promise.then(/*...*/).catch((error) => {
  /*...*/
});
```

##### **`.finally`**

По аналогии с `try... catch... finally` также есть метод `finally`, который выполняется при любом из вариантов разрешения промисов.

- `finally` вызывается без аргументов.
- `finally` пропускает рузультат и ошибку дальше по цепочке

```javascript
new Promise((resolve, reject) => {
  setTimeout(resolve("Окей"), 1000);
})
  .finally(() => {
    console.log("Промис завершен");
  })
  .then((result) => {
    console.log(`Успех, значние = ${result}`);
  });
```

Обычно `finally` не должен возвращать ничего. ИСключением является случай, когда в нем происходит ошибка, тогда эта ошибка переходит в ближайший обработчик ошибок

#### Задачи

##### Задержка на промисах

```javascript
function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
}

delay(3000).then(() => console.log("timeout"));
```

### Цепочка промисов

https://learn.javascript.ru/promise-chaining
Результат первого промиса передаётся по цепочке обработчиков `.then`.
Каждый обработчик `.then` возвращает промис, которы обрабатывается следующим обработчиком.
Но есть нюанс: следующий код не будет цепочкой, а параллельной обработкой:

```javascript
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});

promise.then((value) => console.log(value));
promise.then((value) => console.log(value));
promise.then((value) => console.log(value));
```

В приведённом коде все обработчики получат одно и то же значение.
На практике редко требуется назначать несколько обработчиков, горазо чаще нужно сделать цепочку промисов.

#### **`thenable`** объекты

Иногда есть смысл добавлять `.then` внутрь другого `.then`, чтобы он имел доступ к локальным переменным:

```javascript
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});

promise.then((value) => {
  const i = 2;
  return Promise.resolve().then((result) => {
    console.log(`i = ${i}`); // имеет доступ к i
  });
});
```

Уточню, что промис может возвращать не только объект промиса, но и любой **thenable**, т.е. такой, у которого есть метод `.then`.

```javascript
class Thenable {
  constructor(value) {
    this.value = value;
  }

  then(resolve, reject) {
    setTimeout(() => {
      resolve(this.value + 1);
    }, 1000);
  }
}

const promise = Promise.resolve(3)
  .then((value) => {
    return new Thenable(value);
  })
  .then((value) => {
    console.log(value);
  });
```

В приведенном коде промис в первом `.then` получает значение `3`, а потом возвращает **thenable** объект с методом `.then`, в который передаются методы `resolve` и `reject`.

#### **`fetch`**

Fetch запрашивает по сети `url` и возвращает промис. Когда промис успешно выполняется, он возвращает объект `response` только после того, как удаленный сервер присылает заголовки ответа, но **до того** как будет загружено полное тело ответа.

Для чтения полного ответа надо вызвать метод `response.text()`, который тоже возвращает промис, который выполнится при полной загрузке ответа.

### Promise API

https://learn.javascript.ru/promise-api

#### Promise.all

Если нужно запустить множество промисов и дождаться пока все они выполнятся.
Дынный метод принимает массив или итерабельный объект с промисами и возвращает массив результатов.
Порядок результата будет соотвествовать порядку исходных промисов.

```javacript
const a = Promise.all([
  new Promise( resolve => {setTimeout( () => {resolve(1)}, 1000);}),
  new Promise( resolve => {setTimeout( () => {resolve(2)}, 2000);}),
  new Promise( resolve => {setTimeout( () => {resolve(3)}, 3000);}),
])
.then( data => {
  console.log(data);
});
```

В приведённом выше коде через три скунды будет выдан результат.

Можно использовать **Promise.all** вместе с **map** для обработки массива ссылок, например - получать ответы и потом обрабатывать их:

```javascript
let urls = [
  "https://api.github.com/users/iliakan",
  "https://api.github.com/users/remy",
  "https://api.github.com/users/jeresig",
];

const requests = urls.map((url) => fetch(url));

const jsons = Promise.all(requests)
  .then((responses) =>
    Promise.all(responses.map((response) => response.json()))
  )
  .then((jsons) => {
    console.log(jsons);
  });
```

Если любой промис в `Promise.all` заверщится с ошибкой, то промис возвращенный `Promise.all` **немедленно** завершиться с ошибкой. Все поледующий результаты промисов будут проигнорированы.

Внутрь `Promise.all()` можно передавать не только промисы. Не промисы будут возвращены как есть.

#### `Promise.allSettled`

В отличие от `Promise.all` данный метод разрешает все промисы даже в случае с ошибкой в одном из них.

```javascript
const promises = [Promise.resolve(1), Promise.reject(2), Promise.resolve(3)];

const a = Promise.allSettled(promises).then((data) => {
  console.log(data);
});
```

В `data` получим такую структуру:

```javascript
[
  { status: "fulfilled", value: 1 },
  { status: "rejected", reason: 2 },
  { status: "fulfilled", value: 3 },
];
```

#### `Promise.race()`

Ждет первый выполнившийся промис и из него возвращает результат или ошибку.
Все остальные промисы игнорируются.

#### `Promise.any`

Поход на `Promise.race` но берёт первый успешно выполненный промис и возвращает его результат.
Если ни один из переданных промисов не завершится успешно, тогда возвращённый объект Promise будет отклонён с помощью `AggregateError` – специального объекта ошибок, который хранит все ошибки промисов в своём свойстве `errors`.

#### `Promise.resolve()` `Promise.reject()`

Делают то же самое что и

```javascript
// Promise.resolve(value);
const promise = new Promise((resolve) => resolve(value));
// Promise.reject(error);
const promise_r = new Promise((resolve, reject) => reject(error));
```

### Промисофикация

https://learn.javascript.ru/promisify
Промисификация - изменение функции, которая принимает коллбек на функцию, которая возвращает промис.

```javascript
function loadScript(src, callback) {
  const script = document.createElement("script");
  script.src = src;

  script.onload = () => {
    callback(null, script);
  };
  script.onerror = () => {
    callback(new Error("error"));
  };
  document.head.append(script);
}

function loadScriptPromise(src) {
  return new Promise((resolve, reject) => {
    loadScript(src, (error, script) => {
      if (error) {
        reject(error);
      } else {
        resolve(script);
      }
    });
  });
}

loadScriptPromise("./tasks.js")
  .then((data) => console.log(data))
  .catch((error) => console.log(error.message));
```

Функция loadScriptPromise возыращает промис, который передает коллбек в функцию.

### Промысы - обработка ошибок

https://learn.javascript.ru/promise-error-handling
Если промис завершится с ошибкой, то обработка предается в ближайший обработчик ошибок.

```javascript
Promise.resolve(1)
  .then((value) => {
    value++;
    console.log(value);
    return value;
  })
  .then((value) => {
    value++;
    console.log(value);
    return value;
  })
  .then((data) => {
    throw new Error("error");
  })
  .then((data) => {
    console.log(`after error, data = ${data}`);
    return data;
  })
  .catch((error) => {
    console.log(`catch: `, error.message);
  })
  .then((data) => {
    console.log(`after catch, data = `, data);
  });
```

#### неявный `try...catch`

Вокруг промисов и исключений находитс яневидимый `try... catch`.
Невидимый `try...catch` перехватывает ошибки вокруг промисов и превращает их в отклоненный промис.
Таким образом любое исключение в промисе или его обработчике, возникшее по ошибке или выброшенное пользователем приведет к её обработке в блоке `.catch`.
После `catch` если мы обработаем ошибку и корректно завершим работу, то результат может передасться в следующий за `catch` блок `then`.

### Микрозадачи

https://learn.javascript.ru/microtask-queue

Обработчики промисов `then` `catch` `finally` всегда асинхронны. Т.е. они будут выполнены только после синхронного кода.

Асинхронные задачи требуют правильного управления.
Для этого в стандарте предусмотрена внутренняя очередь `PromiseJobs`, которая более изсвестна как `microtask queue`

- очерь определяется как FIFO: задачи попавшии первыми, выполняются первыми
- выполнение задачи происходит только в том случае, если ничего более не было запущено

Т.е. когда промис выполнен, то его обработчик попадают в очередь. Движок JavaScript берёт задачу из очереди когда он освободится от выполнения текущего кода.

Таким обращом порядок добавления задач в очередь имеет значение и послежовательность `then` в цепочке будет выполнена именно в таком же порядке.

#### Необработанные ошибки

Необработанная ошибка возникает в том случае, если возникшая ошибка промиса не обрабатывается в конце очереди задач.

```javascript
const promise = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("Ошибка в промисе")), 2000);
});

promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(`Произошла ошибка`, error.message);
  });

window.addEventListener("unhandledrejection", () => {
  console.log("не пойманная ошибка");
});
```

В данном примере обработчие несиключенной ошибки не сработает, т.к. на момент его выхова очередь микрозадач будет пустая.

В следующем же примере ситауция другая:

```javascript
"use strict";

const promise = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("Ошибка в промисе")), 1000);
});

setTimeout(() => {
  promise.catch((error) => {
    console.log(`Произошла ошибка`, error.message);
  });
}, 2000);

window.addEventListener("unhandledrejection", () => {
  console.log("не пойманная ошибка");
});
```

В приведённом примере сработает обработчик события `unhandledrejection` т.к. на момент его выполнения ишибка в промисе еще не будет разрешена. Только затем отработает метод `catch`

### async await

https://learn.javascript.ru/async-await

Это специальный синтаксис для работы с промисами.

#### Асинхронные функции

```javascript
async function one(n) {
    return 1;
}

// после вызова получаем промис и обрабатываем его
one(3).then(result = >console.log(`вернули ${result}`));
```

```javascript
async function one(s) {
  throw Error("adasd"); // выбрасываем исключение в случае ошибки
  return 1;
}

one(3) // возвращает промис
  .then((res) => console.log(res))
  .catch((err) => console.log(err.message)); // обработка исключения
```

У ключевого слова `async` простой смысл - эта функция всегда возвращает промис.
Если был возвращен другой тип данных, то он оборачивается в успешно завершившийся промис.

#### await

```javascript
// работает только внутри async функций
const result = await promise;
```

Ключевое слово `await` заставит интерпретатор JavaScript ждать до тех пор, пока промис справа от `await` не выполнится. После чего он вернёт его результат, а выполнение кода продолжится.

```javascript
async function one(s) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("готово");
    }, s * 1000);
  });

  const res = await promise; // остановка выполнения до разрешения промиса
  console.log(res);
}

one(2);
```

`await` - это синтаксический сахар. В примере выше мы могли заменить `await` на `.then`:

```javascript
async function one(s) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("готово");
    }, s * 1000);
  });

  promise.then((res) => console.log(res));
}

one(2);
```

Следующий код создает асинхронную функцию, которая загружает аватар указанного пользователя, а затем его удаляет.

```javascript
async function showAvatar(username) {
  const github_response = await fetch(
    `https://api.github.com/users/${username}`
  );
  const github_user = await github_response.json();

  // отображаем аватар
  const img = document.createElement("img");
  img.src = github_user.avatar_url;
  img.classList.add("promise-avatar-example");
  document.body.append(img);

  // ждём 3 секунды
  await new Promise((resolve, reject) => {
    setTimeout(resolve, 3000);
  });

  img.remove();
  return github_user;
}

showAvatar("cucumberian");
```

**await нельзя использовать на верхнем уровне вложенности**
Если хочется, то можно создать асинхронную самозывающуюся функцию.

```javascript
(async () => {
  const response = await fetch("https://google.com");
  const text = await response.text();
  console.log(text);
})();

console.log("google.data = ");
```

#### await и thenable объекты

Как и `promise.then` `await` позволяет работать с промис-совместимыми объектами.
Идея в том, что если у объекта можно вызвать метод `.then()`, то этого достаточно чтобы использовать его с `await`.

```javascript
class Thenable {
  constructor(n) {
    this.n = n;
  }

  then(resolve, reject) {
    console.log(`thenable this`);
    setTimeout(() => {
      resolve(this.n * 2);
    }, 1000);
  }
}

async function f(n) {
  const result = await new Thenable(n);
  console.log(result);
}

async function f2(n) {
  const promise = new Promise((resolve, reject) =>
    new Thenable(3).then(resolve, reject)
  );
  promise.then((result) => {
    console.log(result);
  });
}

f(3);
```

Функция `f1` написана через `await` - в ней интерпретатор как дойдет до строки с `await` и не найдёт, что объект яаляется промисов, то вызовет его метод `.then` передав туда встроенные функции `resolve` и `reject`. После разрешения промиса одним из этих методов код будет продолжен с результатом, который был передан через `resolve(value)` или `reject(error)`.

Можно было написать это же через помисы, но код выглядел бы чуть более громоздким - пример в функции `f2`.

#### Асинхронные методы классов

Для создания асинжронных методов в классе достаточно указать перед именем метода ключевое слово `async`. Как и в случае с асинронными функциями, результат такого асинхронного метода будет оборачиваться в промис.

```javascript
class Waiter {
  constructor(value) {
    this.value = value;
  }

  wait() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.value);
      }, 1000);
    });
    return promise;
  }

  async await() {
    return await Promise.resolve(this.value);
  }

  async avalue() {
    return this.value;
  }
}

new Waiter(3).wait().then((result) => {
  console.log(`result =`, result);
});

new Waiter(4).await().then((result) => {
  console.log(`result =`, result);
});

new Waiter("async value").avalue().then((result) => {
  console.log(`result =`, result);
});
```

- Метод класса `wait()` возвращает промис, который будет заресолвен через 1 секунду. После создания объекта и вызова данного метода можно обрабатывать данный промис по цепочке, например `then`.
- `await` - возвращает промис через await
- `avalue` - также возвращает промис, т.к. результат функции был обернут из-за ключевого слова `await`.

#### Обработка ошибок

Если промис завешился удачно, то `await promise` выдает результат `resolve(value)`. Если завершился с ошибкой, то будет выбошено исключение, как если бы на этом месте находилось выражение `throw()`.

```javascript
async function f() {
  return Promise.reject(new Error("ошибка в промисе")); // ошибка через reject
}
async function f2() {
  throw new Error("ошибка через throw"); // ошибка через throw
}

async function one(func) {
  try {
    await func();
  } catch (error) {
    console.error(`exception:`, error.message);
  }
}

one(f);
one(f2);
```

Если нет блока `try...catch`, то асинхронная функция будет возвращать незаресолвенный промис, который можно обработать в блоке `catch`:

```javascript
async function two(func) {
  await func();
}

two(f).catch((error) => console.error(`ошибка в промисе:`, error.message));
```

Если забыть добавить `catch`, то такая ошибка будет выловлена глобальным обработчиком ошибок и она появится в консоли.

При использовании `await` метод `then` используется нечасто, т.к. `await` автоматически ожидает выполнения промиса. Чаще всего гораздо удобнее пользоватья `try... catch` лдя обработки ощибок от `await`, чем пользоваться методом `.catch`.

Но на верхнем уровне нельзя использовать `await`, поэтому обработка ошибок на верхнем уровне через `catch` обычное дело.

#### Promise.all

`await` отлично работает с `Promis.all` в случае когда нам надо подождать выполнения всех промисов.

```javascript
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("one");
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("two");
  }, 2000);
});

async function f() {
  const result = await Promise.all([promise1, promise2]);
  console.log(result);
}
f();
```

Также можно использовать `Promise.race` для получения результата первого выполнившегося промиса.

#### Итого

Ключевое слово async перед объявлением функции:

- Обязывает её всегда возвращать промис.
- Позволяет использовать await в теле этой функции.

Ключевое слово await перед промисом заставит JavaScript дождаться его выполнения, после чего:

- Если промис завершается с ошибкой, будет сгенерировано исключение, как если бы на этом месте находилось throw.
- Иначе вернётся результат промиса.

#### Задачи

### promises

catch обрабатывает ишибку и пропускает его дальше.

Правила хорошего тона - блокировать кнопку после отправки запроса.

finally не останавливает поток выплнения, а пропускает промис дальше

Простая заресолвенный промис `Promis.resolve('123')`
`Promise.reject(new Error('Erorr!!!!'))`

#### Макро микрозадачи

Линейный код ставит макрозадачи, потом выполняются микрозадачи
В макрозадачи входят timeOut'ы, EventListener'ы, Загрузка скриптов.
Всегда выполняются макрозадачи только после всех микрозадач.

Что почитать:

1. https://refactoring.guru/ru/design-patterns/catalog

ORM для js

- prisma
- typyorm
- mongoose - для mongodb
