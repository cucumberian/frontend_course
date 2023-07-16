## Typescript
### Лекция 1. Введение в TypeScript
Это надстройка над javascript. 
Абстракция. ВСе равно все превращается.
Typescrpt нигде не исполняется - ни браузером ни нодой. Тайпскрипт компилируется в JS.
В этом есть плюсы и минусы. Очень редко что-то ломается.

Новое - работа с типами
Тип - описание структур данных.

Защищает от небезопасных действий (сложение строки и числа, например).

TypeScript | JavaScript
-- | --
статическая типизация | динамическая типизация
дополнительные функции языка | широкая поддержка
компиляция | исполняется в браузере
расширения для javascript | 
#### Установка
Установка TS compiler
```bash
npm install typescript tsc
```

```bash
tsc <файл>.ts
```

Нужнен конфиг `tsconfig.json`, который будет говорить в какой JS будем компилироваться TypeScript.
%2 что придется писать tsconfig.json с нуля, разве что для своих целей.


#### Базовые типы
`number` - числовой тип в тайпскрипт
`number[]` - массив числовых значений
`number[][]` - двумерный и т.п.
`bigint` - для работы с большими числами

`string` - строковый тип
`string[]` - массив строк

`boolean`

`null` - Отсутствие значния или пустой значениею Нету в памяти указателя нету ничего в памяти.
`undefined` - отсуствие или неицициализировнная переменная. В памяти уже есть. Мы уже выделили участок памяти но в него ничего не записали.

`any` - любойтип - выключи проверку на типы. Обычно в конфигах запрещают использование `any`.
`unknown` - безопасная альтернатива для `any` - требует уточнения типа перед использованием. 
Может появиться когда тайпскрипт не может определить тип.
Можно сделать приведение типов
```typescript
let value2: unknwon = 123;

let length2: number = (value2 as string).length; // работают typeguard'ы
```
В примере выше использовалось явное приведение типов.
`never` - при ошибках типов.

#### type alias
Сожно создавать свои типы данных и давать им псевдонимы
Содание новых именованых типов данных
В TypeScript есть два способа задать тип данных для обекта, один из них:
```typescript
type Point = {
    x: number;
    y: number;
    z?: number; // необязательное поле
};

const p1: Point = {x: 20, y: 20};
const p2: Point = {x: -1, y: 3, z: 1};
```

```typescript
type Order = {
    id: number;
    products: string[];
    readonly total: number; // только для чтения
};
```

`never` - тип которого никогда не может быть
```typescript
type Em = {
    department: string & number; // never
};
```
В примере выше полю `department` задан тип, как объединение двух базовых типов - строки и числа, а т.к. нет таког типа, который одновременно являлся бы или числом или строкой, то тип данных для такого поля установится тайпскриптом как `never`.

Можно комбинировать типы.
Использовать модификаторы - `readonly` и optional `?`
```typescript
function getUserInfo(): UserInfo { //функция

}
```

#### union
Можно задавать сразу несколько типов данных при помощи `|`. Таким образом мы указывает typecript, что переменная может иметь несколько типов данных.
```typescript
let value: string | number; // либо число либо null

let status: "success" | "error" | "loading"; // дитеральный тип
type Shape = {type: "circle", radius: number} | {type: "square"; sideLength: number};
const shape: Shape = {type: "circle", radius: 10};

function hello(value: number | string | unknwon) {
    if (typeof(value) === 'number') {}  // number
    else if (typeof(value) === 'string') {} // string
    else {...} // unknows
}
```

`typeof` `instanceof`

#### Intersection type
```typescript
type Person = {
    name: string;
    age: number;
}

type Employee = {
    emId: string;
    departament: string;
};

type PersonEmployee = Person & Employee; // intersection type

const personEmployee: PersonEmployee = {
    name: "John",
    age: 30,
    emId: "Eqe123",
    department: "it",
};
```
Можно комбинировать Union Intersection раные типы и alias

Причем если присутствуют два одинаковых поля с рахными типами, то у них будет тип `never`.
```typescript
type personEmployee = Omit<Person, 'name'> & Employee; // берем из Person все, кроме name
type personEmployee = Pick<Person, 'name'> & Employee; // берём из Person только name
```
#### Interfaces
Второй сетод для задания типов
Тоже самое что и типы но работают чкть по другому
```typescript
interface User {
    id: number;
    name: string;
}

interface Shape {
    color: string;
}

interface Circle extends Shape {
    radius: number;
}

interface Rectangel extends Shape {
    w: number;
    h: number;
}

const circle: Circle = {
    color: "blue",
    radius: 10,
};
```

Вместо Itersection используется extends
Интерфейсы можно применять к классам и наследовать классы от интерфейсов

```typescript
inteface Printable {
    title: string;
    print(): void;
}

class SomeDoc implemented Printable {
    name: string = "my_doc";
    title: string = "SomeDocument";
    print() {
        // реализация метода print
    }
}
```

Типы больше в функции. Интерфейсы больше для классов.
Interface | Types
-- | --
extends | intersection
можно добавить новые поля после создания | нельзя добавить новые поля

#### Enums
Очень редко используются. Иногда не зотят использовать.
```typescript
enums Status {
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    Pending = "PENDING",
}
let userStatus: Status = Status.Active;
console.log(userStatus); // "ACTIVE"
// console.log(Status[0]); - если значения не заданы через "="
console.log(Object.entries(Status));
```

#### Tuples
Кортежи - массивы с фиксированным типом в каждой позиции.
Могут подойти для загрузки данных из csv данных
Хуки в реакте используют кортежи.
```typescript
let person: [string, number, boolean];
person = ['ohn', 30, true];

let people: [string, number][] = [
    ['john', 30],
    ['jane', 25],
    ['bob', 34],
];
console.log(person[0]);
console.log(people[0][0]);
```

boilerplate - репозиторий какоторый можно взять как основу для своего приложения.
Содержит кучу файлов конфигураций.
node-typescript-boilerplate



### Лекция 2
#### Generic
Дженерик - это способ параметризации типов данных или функций, чтобы они могли работать с различными типами данных, сохраняя при этом типовую безопасность.
```typescript
interface Box<T> {
    value: T;
}

type A = [number, number];

const box0: Box<tuple> = {value: [10, 2]};
const box1: Box<number> = {value: 10};
const box2: Box<string> = (value: "hello");
const box3: Box<boolean> = (value: false);
const box4: Box<A> = {value: [2, 3]};

function printValue<T> (value: T): void {
    console.log(`Value: ${value}`);
};

// функция не упадет, но можно передать любое значение. но нежелательно
printValue(10);     

printValue<number>(10);
printValue<string>("abc");


function print<U> (arg: any): U {
    return arg;
}

const a = print<number>(10);    // a - number
const b = print<boolean>(2);    // b - boolean
const c = print(3);         // c - unknown тип
 
function mergeArray<T, U> (a: T[], b: U[]): (T | U)[] {
    return [...a, ...b];
}
const c = mergeArray<number, string>([1, 2, 3], ['a', 'b', 'c']);
```
В случае когда вызывается обобщенная функция `print<U>` без указания типа тайпскрипт в данном случае не может определить какой тип значения вернёт функция и вернёт тип `unknown.

Можно делать как будто бы функции по типам, но это функция для типов. Мы изначально не знаем какого типа будут значения, но мы можем передать эти знания.

Таким образом разработчик библиотеки может создать обобщенные типы, которые потом пользователь библиотеки может переопределить. Например в рекате useState - это генерик.
Генерик - это способ параметризации.

#### Обобщенные классы
```typescript
class Queue<T> {
    private items: T[] = [];
    
    enqueue(item: T): void {
        this.items.push(item);
    }

    dequeue(): T | undefined {
        return this.items.shift();
    }

    print(): void {
        console.log(this.items);
    }
}

const q = new Queue<number>();

q.enqueue(10);
q.enqueue(2);
q.enqueue(3);
q.print();
q.dequeue();
q.print();

type A = [number, string];

interface B {
    a: number;
    b: string;
};

const q2 = new Queue<A>();
q2.enqueue([10, 'hi']); // Queue { items: [ [ 10, 'hi' ] ] }

const q3 = new Queue<B>();
q3.enqueue({a: 1, b: '2'});  // Queue { items: [ { a: 1, b: '2' } ] }

```

#### Использование `keyof` `typeof` `instanceof`
##### `keyof`
`keyof` - получение всех типа, представляющего все возможные ключи объекта или типа. Представляет объединение строковых литералов представляющий имена всех свойств объекта или типа.

`<T, K extends keyof T>` - генерик T и генерик K, который расширяется объектом T

```typescript
interface Person {
    name: string,
    age: number;
    address: string;
}

type PersonKeys = keyof Person; // "name" | "age" | "address"

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

/** K extends keyof P - это своего рода alias K = keyof T
 *  getProperty<T>(obj: T, keys: keyof K): T[keyof T] {
 *      return obj[key];
 * }
 * 
 * */

const person: Person = { name: "John", age: 30, address: "123 Main St"}; 

const userName = getProperty(person, 'name'); // тип T передается неявно через person
const age = getProperty(person, 'age');
```

Необязательные и `readonly` поля тоже входят изымаются через `keyof`.

#### `typeof`
Возвращает строку, представляющую строковое представление типа аргумента во время компиляции.
Будет являтся одним из примитивов или функцией.

```typescript
const message = "Hello";
console.log(typeof message);    // string

type A = {a: number, b: string};
const a: A = {a: 1, b: "sd"};
typeof(a);                      // object

const f = () => {};
console.log(typeof(f));         // function 
```

#### `as`
явное приведение типов
```typescript
type A = {a: number, b: string};

const a: A = {} as A;   // обман компилятора !
// но в a не будет ни a, ни b
console.log(a.a);    // undefined
```
Довольно опасная штука, т.к. позволяет обманывать компилятор и можно допустить ошибку.

#### `instanceof` 
принадлжет ли классу или типу и его предкам
```typescript
class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
};

const person = new Person('Alice');
console.log( person instance of Person);    // true


interface Human {
    name: string;
    age: number;
}

interface Woman extends

const a: A = {name: "a"};
const b: B = {name: "b"};
console.log(a instanceof A);
console.log(a instanceof A);
// ...

interface iHuman {name: string; age: number};


class Human implements iHuman{
    name: string;
    age: number;

    constructor(name: string) {
        this.name = name;
        this.age = 0;
    }
};

class Woman extends Human{
};

const h: Human = new Human("pavel");
const w: Woman = new Woman("olga");

console.log(h instanceof Human);    // trus
console.log(h instanceof Woman);    // false
console.log(w instanceof Human);    // true
console.log(w instanceof Woman);    // true
```

#### conditional type
Условные типы
`T extends U ? X : Y` - если Т наследуется от U, то передается X иначе Y
```typescript
type Check<T> = T extends string ? boolean : number;

type Result1 = Check<string>;   // Result1 имеет тип string
type Result1 = Check<boolean>;  // Result2 имеет тип number
```

Типы в тайпскрипте __тьюринг полные__ - можно написать всю программеу через типы и не использовать js. Так никто не делает, но возможность есть.

```typescript
type Person = {
    name: string;
    age: number;
    id?: number;
};

type ExtractedKeys<T> = T extends object ? keys T : never;
type PersonKeys = ExtractedKeys<Person>;

const a: PersonKeys = "name";   // а еще может принимать значения "age", "id"

```
Читается так: если тип T наследуется от объекта, то берем строковый литерал с вариантами его ключей, иначе тип `never`.


Можно создать тип данных, который будет фильтровать элементы типа
```typescript
type Filter<T, U> = T extends U ? T : never;    // ?

type A_tuple = [number, string, string, number];
type A_number = Filter<A_tuple, number>;    // [number, number];

type Numbers = [1, 2, 3, 4, 1, 2];
type OnesTwos = Filter<Numbers, 1 | 2>; // [1, 2, 1, 2]
```


#### maped types
это итерация по ключам с помощью keyof

`T` - тип
`K in keyof T` - итерация по ключам `T`
`T[K]` - значение ключа `K` в `T`

Например если еcть тип `Person` с ключами `age` `name`, то `K` будет принимать значение из списка `"name", "age"`, а ссотвествующие значения `T[K]` будут равны `string`, `number` соотвественно.

```typescript

interface Person {
    name: string;
    age: number
}

type ReadOnly<O> = {readonly {K in keyof O}: O[K]};

type Part<T> = {[P in keyof T]?: T[P]}; // ?: - все поля необязательные
type ReadonlyPart = {readonly [P in keyof T]: T[P]};    //

typeof PartioalPerson = Part<Person>;

type ConvertToNull<T> = {[P in keyof T]: T[P] | null}
```

Тип который оставляет в типе только указанные значения:
```typescript
type A = { a: number; b: string };
type B = { a: string; b: string; c: number };

type PickIt<T, K extends keyof T> = {[k in K]: T[k]};

type C = PickIt<B, "a" | "c">;
```

```typescript

type UncommonKeys<T, U> = Omit<T, keyof U> & Omit<U, keyof T>
type Combine<T, U> = Omit<T | U, keyof UncommonKeys<T, U>>;

type C = Combine<A, B>;
```

Пример собственных типов `Pick` и `Omit`.
```typescript
type iPick<T, K extends keyof T> = {
    [k in K]: T[k]; 
};

type iOmit<T, K extends keyof T> = {
    [k in keyof T as k extends K ? never : k]: T[k];
};

type A = { a: number; b: string };
type B = { a: string; b: string; c: number };

type O = iOmit<B, "c">;
```

Чтобы выпонять разные локические операции над множествами ключами и типами можно использовать `|` `&` `as` генерик типы `Omit` и др.


Не совсем корректно, но может помочь следующая таблица:
логическая операция c ключами| typescript
-- | --
$A \cup B$ | `A & B`
$A - B$ | `Omit<A, keyof B>`
$A \cap B = (A \cup B) - ((A - B) + (B - A)$)  | `Omit<A & B, Omit<A, keyof B> & Omit<B, keyof A>>` 


#### Utility types
это набор дженерик типов, такие как Partial Required и прочие
Набор предопределенных типов, еоторые облегчают работу.

Это типы для создания други типов.
Нужны для того чтобы все не писали mapped и conditional types.

- управление неизменяемостью
- преобразование

`Awaited<Type>` - передает промис и достает из него конечное значение.
Избавляется из промиса и достает тип из него.

`Partial<Type>` - делвет поля необязательными
`Required<Type>` - делает поля необязательные
`Readonly<Type>` - делает поля все доступные только для чтения
`Pick<Type, keys>` - выдергивает нужные ключи
`Omit<Type, keys` - исключает указанные ключи
...

Назови пожалуйста свой любимый utility тайп и раскажи как он работает.
Как работает non-nullable.


## Лекция 3 ООП, Yagni, Kiss
### ООП
Доминирует 2 основные концепии: 
- методология ООП (80 годы)
- функциональное программирование

В ООП данные хранятся вместе с методоми, которые позволяют работать с этими данными.

Сущности ООП: 
- классы
- объекты
- атрибуты
- методы

Класс - как чертеж.
```typescript
class Pokemon {
    constructor (name: string, tyep" string, health: number) {
        this.name = name;
        this.type = type;
        this.health = health;
    }

    name: string;
    type: string;
    health: number;

    attack(): void {}
    dodge(): void {}
    evolve(): void {}
}

const pika = new Pokemon("Pickachu", "electric", 100);

pika.attack();
pika.dodhe();
pika.evolve();
```
Плюсы ООП:
- модулность
- повторное исползование кода
- урощается сопровождение и расширение ОП

_Роберт Мартин_ ("дядюшка Боб") - один из пропагандистов ООП.
_Чистый Код_, _Чистая архитектура_ - переиздание классических книжек.

Сейчас многие не любят ооп из-за того что классы и объекты сложно поддерживать для больших систем, т.к. класс это абстракция она бывает очень сложной в больших приложениях.
Очень много слоев абстракций в итоге. От этого страдает JS, который не имеет классов.

В итоге классы, которые приносит TS в итоге на работают как классы в JS, они ими не являются, а только имитираются.
JS тяготеет больше к функциональному ЯП. В функциональном языке своя логика построения программ, свои термины, __корирование__, __мемоизация__.
Фунцкиональное программирование сложное, напрмиер Haskel - чисто функциональный язые, и ФП не реализуется JS в полной мере.

В ООП данные мешаются с функциями, которые их обрабатывают. 
Это не всегда допустимо и удобно.
Но тем не менее до сих пор многие программы пишутся в стиле ООП.

Бывает удобно обрамить некотоорый код классами.
JS - мультипарадигменный язык, модно использовать функции и классы.
Можно выбирать как писать программу и отдельные её модули.

Концепции ООП:
- __наследование__ - для построения иерархии сущности (потомки наследуют свойтва и методы)
- __полиморфизм__ - вызов идних и тех же методов у разных классов
- __инкапуляция__ - сокрытие данных и выставление напоках важных вещей
- __абстракция__ - отделение важного от неважного



#### Модификаторы класса
__Загаглить модификаторы класса__
##### private
##### protected
##### public

#### Наследование
```typescript
class Animal {
    name : string;

    constructor (name: string) {}

    speak(): void {
        console.log(`${this.name} говорит.`);
    }
}

class Dog extends Animal {
    constructor() {
        super(name);
    }

    speak(): void {
        console.log(`${this.name} barks`);
    }
}
class Cat extends Animal {}

const dog = new Dog("Шарик");
```


####  Полиморфизм
Одинаковые сщности в неком контексте должны работать примерно одинаково
```typescript
const animal = Animel("Zebra");
const dog = Dog("Zebra");

animal.apeak();
dog.speak();
```

#### Инкапсуляция
Механизм позволяет позволяющий объединить данные и методы работающие с ними...
```typescript
class Counter {
    private count: number = ;

    increment(): void {
        this.count++;
    }

    descrement(): void {
        tf (this.count > 0) {
            this.count--;
        }
    }

    getCount(): number {
        return this.count;
    }
}

const counter = new Counter();
counter.increment();
console.log(counter.getCount());    // свойство count недоступно
```
#### Абстрактные классы
Абстракция - выделение обзих характеристик и поведения обектов для создания астрактных клссаов и интерфейсов для их представления

Абстрактный класс не задает реализацию, задает почти как интерфейс.
Класс, который унаследовался от абстрактного должен реализовать все методы абстрактного метода.
```typescript
abstract class Animal {
    abstract speak(): void;
}
class Dog extends Animal {
    name: string = "Woofy";
    speak(): voif {
        console.log(`Bark!`);
    }
}

class Cat extends Animal {
    speak(): void {
        console.log('Meow!');
    }
}

// принято в ссобществе - не переобперделять типы если можно этого не делать
const dog: Animal = new Dog();  // похоже на кастинг as
const cat: Animal = new Cat();  // ензу ща
const dog2 = new Dog(); // так правльнее
const cat2 = new Cat(); // так правильнее

dog.speak();
cat.speak();

```
Зачасту обходятся интерфейсами - так более предпочтительнее
```typescript
interface iAnimal {
    speak(): void{};    // это property - интерфейс не различает методы и атрибуты
}

class Dog implements Animal {
    ...
}
```
### Принципы программирования
#### SOLID
##### Single responsibility
класс должен иметь только одну причину для изменения и должен ответчать должен отвечать только за одну часть функциональности

У нас есть различные actor - бизнесмен бухгалтео и они не могут влиять на одну и ту же функциональность

Пример - __неверного__ класса
```typescript
class User {
    ...
    getName(): void {}
    saveToDB(): void {}
    sendEmail(): void {}
    deleteUser(): void {}  
}
```

Не надо забивать молотком шурупы
##### Open close principle
Открыты для расширения, но закрыты для изменения, чтобы новая функциональность могла быть добавлена без изменения существующего кода




Пример плохого кода:
```typescript
class Shape() {
    private.type: string;    

}

function calculateArea(shape: Shape): number {
    if (shape.type === "rectangle") {
        ...
    }
    else if (shape.type === 'circle') {
        ...
    }
}

```

Напрмиер нельзя завязывать на CSS правила JS код, который отталкивается от CSS.

Поэтому часто стараются не трогать чтарые участки кода, если трогают, то переписывают заново.

##### Liskov Substitution principle
Обхекты должны быть заменяемы своими подтипами без изменения корректности программ


Нарушение логики программы и принципа подстановки т.к. м ыожидаем одно, а меняются два свойства.

__почитать доп информацию__
```typescript
class Rectangle {
    ...
}


class Square extends Rectangle {
    set_width(width: number): void {
        set
    }
    set height(height: number): void {
        set.width = height;
        set.height = height;
    }
}
```

Отвртка с насадками может быть заменена крестовой отверткой в конкретном случае.

Но нельзя рабой молотом забивать гвозди.

#### Interface Segregation Principle
Клиенты не должны зависить от интерфейсов, которые они не исользуют.
Интерфейсы должны быть макимально специфичны для потребностей клиентов.

Лучше сделать отдельные интерфейсы, чем делать один единственый универсальный интерфейс
Интрефейсы доллжны быть мелкими и атомарными

#### Dependebcy Inversion Principle
Модули верхнего уровня не должны зависеть от модулей нижнего уровня.
```typescript
class EmailSender {
    sendEmeil() {}
}

class UserRegistrationService {
    private mailSender: EmailSender; // зависит от EmailSender
    ...

}

```

### YAGNI
You Ain't Gona Need It
- не пытайтесь добавить функциональность, которая сейчас не нужна. Сосредочтесь на решении текущих проблем.

Очень часто все быстро меняется и потом это скорее всего будет не нужно.
Или меняются требования.


### KISS
Keep it simple stupid

Избегайте лишней сложности.


### DRY
Dont repeat ypurself
"если есть повторябщийся код - значит это сгнал для рефакторинга." (Мартин Фаулер)




#### HW
- [ ] Накидать интерфейсы классов проекта



### Каррирование
https://learn.javascript.ru/currying-partials
Каррирование - способ трансформации функций, чтобы вместо `f(a, b, c)` обращаться к ней, как к `f(a)(b)(c)`.


В некотором смысле каррирование похоже на декорирование.

Карирование, как и декорирование нужно для того, чтобы использовать псевдонимы для функций с заданыйми параметрами, например хотим выводить при логах текущее время каждый раз.

Вот пример простого каррроавние дял функции с двумя переменными.
```javascript
function sum (a, b)  {
  return a + b;
};

function carry(fun) {
  function a(a) {
    function b(b) {
      return fun(a, b);
    }
    return b;
  }
  return a;
}

sum = carry(sum);
console.log(sum(2)(3));
```

Более продвинутая весия каррирования, например из библиотеки _lodash_, поволяет вызывать функцию как обычным способом, так и через каррирование:
```javascript
function sum2(a, b) { retrun a + b; }

let curried_sum = _.curry(sum);
console.log(curried_sum(1, 2));
console.log(curried_sum(1)(2));
```

Вот более продвинутая весия, которая позволяет вызывать как страую версию так и измененную:
```javascript
function sum2 (a, b)  {
  return a + b;
};

function curry(fun) {

  function inner(...args) {
    if (args.length >= fun.length) {
      return fun.apply(this, args);
    }
    else {

      function inner2(...args2) {
        return inner.apply(this, args.concat(args2));
      }

      return inner2;
    }

  }

  return inner;
}

sum2 = curry(sum2);

console.log(sum2(1, 2));
console.log(sum2(1)(5));
```
Данная версия карирования позволяет вызывать не только `f(a)(b)(c)`, но и `f(a)(b, c)` и `f(a, b)(c)`.


### Мемоизация
https://habr.com/ru/companies/ruvds/articles/332384/
Мемоизация - кэширование результатов функций, дабы потом при вызове функции с такими же параметрами не вызывать её снова, а просто вернуть результат по уже посчитанному результату.

## Лекция 4


## code.mu/ru/

lдз можно сдавать или в кодепене или typescriptlang.org/play

#### Задачи
##### Задание 1
Напишите функцию, которая принимает 2 объекта в виде аргументов
и возвращает новый объект
который состоит из всех полей объектов на входе.
Аргементы функции должны быть заданы интерфейсами.
Например: User, UserAddress или Book, BookAuthor
Возвращаемое значение должно быть задано интерфейсом,
который состоит из всех полей объектов на входе.
```typescript

function combine<T, U> (a: T, b: U): T & U {
    return {...a, ...b};
}

interface Book {
    title: string;
    authors?: string[],
    pages: number,
}

interface User {
    id: number;
    name: string;
}

const book = {title: "Bible", authors: ['Moisey'], pages: 12};
const user = {id: 0, name: "root"};

console.log(combine(book, user));

```
##### Задание 2
Сделайте задание 1, но вместо интерфейсов используйте type.
Подумайте, в чем разница между type и interface.

##### Задание 3
Напишите Union тип, который может принимать значения string, number, boolean, null, undefined, object
Напишите функцию, принимает на вход этот Union Type и возвращает строку
с названием типа аргумента
Если аргумент - строка, то вернуть "string"
Если аргумент - число, то вернуть "number"
Если аргумент - булево, то вернуть "boolean"
Если аргумент - null, то вернуть "null"
Если аргумент - undefined, то вернуть "undefined"
Если аргумент - объект, то вернуть "object"

##### Задание 4
Напишите Enum, который содержит 3 значения: Admin, Manager, User
Напишите функцию, которая принимает на вход Enum и возвращает строку
с названием Enum.

##### Задание 5
Напишите функцию, которая принимает на вход Tuple из 3-х значений [string, number, object, undefined]
внутри функции должна быть проверка, если первый элемент Tuple - строка, то вернуть строку,
если второй элемент Tuple - число, то вернуть число,
если третий элемент Tuple - объект, то вернуть объект,
если четвертый элемент Tuple - undefined, то вернуть undefined
если ни одно из условий не выполняется, то вернуть null

### Массивы в TypeScript
Являются строки типизированными, т.е. могут содержать даные только одного типа.
```typescript
let array1: number[] = [1, 2, 3, 4];        // 1й способ
let array2: Array<number> = [1, 2, 3, 4];   // 2й способ
```

### Объекты в TypeScript
Обекты ведут себя особым образом. При объявлении объекта тип данных не указывается. Тайпскрипт сам понимает что это тип данных типа объект и запрещает  изменять данный тип данных.
Более того он контролирует и структуру объекта. В одноименные поля можно записывать только занчения того же типа данных
```typescript
let user = {name: "Joe", age: 21};
user = {name: "Jane", age: 26}; // {name: string, age: number}
user = {name: "Bob"};   // error
user = {name: "Max", age: 21, id: 2}; // error
user.id = 3;    // error
```

### Функции
При объявлении функции мы можем указать их тип.
```typescript
function func(a: number, b: number): number {
    return a + b;
}
```
Также можно использовать обобщенные типы и типы параметров функций. Что позволит создавать более гибкие и универсальные функции.
```typescript
function combine<T, U> (a: T, b: U): T & U {
    return {...a, ...b};
}

const a = {name: "stone"};
const b = {weight: 10};
const ab = combine(a, b);
console.log(ab);        // { name: 'stone', weight: 10 }
```
В следующем примере у аргумента `callback` задается тип как __тип функция__, о котором пойдёт речь в разделе про функции.
```typescript
function map<T, U> (arr: T[], callback: (item: T) => U): U[] {
    return arr.map(callback);
}

const arr: number[] = [1, 2, 3];
const a = map(arr, v => v*2);
console.log(a);
```

#### `void`
Если функция ничего не возвращает, то у нее ставится тип `void`
```typescript
function hi(): void {
    console.log("Hi typescript");
}
```

### Кортежи tuple
Иногда надо хранить набор разнородных значений
```typescript
let user: [string, number] = ["John", 31];
user[0] = "Max";
user[1] = 32;
```
Кортежи можно изменять.
#### readonly
Если кортеж не нужно изсенять то ставится ключевое слово `readonly`:
```typescript
let a: readonly [number, name] = [0, "John"];
a[0] = 3; // error
```

#### необязательный элемент
Кортеж может иметь необязательный элемент `?`:
```typescript
let user = [number, string, number?];
user = [0, root, 23];
user = [1, user,];
```

#### деструктуризация кортежа
Кортеж можно деструктуризиовать
```typescript
let user: [number, string] = [0, "root"];
const [id, login] = user;
```
#### rest
С помощью оператора rest ... можно определить произвольное количество аргументов в кортеже, с одинаковым типом данных.
```typescript
let tpl: [string, ...number[]] = ["a", 1, 2, 3, 4];
tpl.push(5);
console.log(tpl);
```


### Перечисления Enums
Перечисление это удобный способ создания набора значений количество и названия которых известны заранее и не будут изменяться.
```typescript
enum Seasons {winter, spring, summer, autumn};
let current: number = Seasuns.Summer;
console.log(current);   // 2
let season: string = Seasons[2];
console.log(season);    // Summer
``` 
Внутри javascript enums будет выглядит таким образом: 
```javascript
{
  '0': 'winter',
  '1': 'spring',
  '2': 'summer',
  '3': 'autumn',
  winter: 0,
  spring: 1,
  summer: 2,
  autumn: 3
}
```
Поэтому чтобы получить значение строковое можно обратиться по индексу
```typescript
console.log(Seasons["2"]);    // summer
```


Каждое перечисление создает свой тип данных. и далее его можно использовать
```typescript
enum Seasons {winter, spring, summer, autumn};
const season: Seasons = Seasons.summer;
console.log(season);
let current: Seasons = 2;
console.log(current);
console.log(typeof(season));    // number
console.og(typeof(current));    // number
```
Можно назначать значение перечисления как напрямую обратившись через тип, так и через индекс, просто указав индекс.


#### Указание номеров
Можно задать ключам номера чтобы они не начинались с нуля:
```typescript
enum Seasons = {winter = 1; spring = 2, summer = 3, autumn = 4};
const season: Seasons = Season.summer;
console.log(season);    // 3
```
Можно не записывать все номера, а написать только первый, остальные индексы получатся из начального.
```typescript
enum Seasons {winter = 1, spring, summer, autumn};
const season = 3;
console.log(Seasons[season]);   // summer
```

#### Строковые ключи
Ключами могут быть и строки
```typescript
enum Seasons {
    winter = "зима",
    spring = "весна",
    summer = "лето",
    autumn = "осень",
};
const season: Seasons = Seasons.summer;
console.log(season);    // лето
```
Пречисления с ключами компилируются в такой объект:
```javascript
{ winter: 'зима', spring: 'весна', summer: 'лето', autumn: 'осень' }
```
Поэтому его уже не определить через числовой индекс.

### `any`
Тип any отключает проверку типов в тайпскрипт.
Применяется если тип
```typescript
const a: any = 1;
a = 'abc';
console.log(a);
```

С помощью типа `any` можно определить массив в typescript, который бкдет содпржать разные типы даннх:
```typescript
let a: any[] = [1, 2, null, 'abc'];
console.log(a);
```

### Объединение типов
Если переменная может принимать несколько типоа значений, то можно их передать, объединив знаком `|`:
```typescript
let a: number | null = 1;
a = null;

let b: string | number | null;
b = 'abc';
b = 0;
```

### псевдонимы типов
```typescript
type str = string;
let name: str = "John";
```
Смысла переименовывать стандартные типы нет, но удобно создавать алиасы для композитных типов.
```typescript
type stumber = string | number;
let a: stumber = 2;
```

### строковый литерал
Оператор объединения `|` можно применять не только для получения комбинированнх типов данных, но и к строкам. В итоге получаетс тип данных, который может применять одну из следующих строк.
```typescript
type Temps = "colder" | "warmer";
const temp: Temps = "colder";
```

### Встроенные типы данных
В TypeScript кроме базовых типов из Javascript есть свои встроенные типы данных для некторых типов обектов.
#### Date
```typescript
const now: Date = new Date();
const date: Date = new Date(2023, 6, 28);
```

#### RegExp
```typescript
let anys: RegExp = /.+/;
let any_symb: RegExp = new RegExp('.+');
```

#### DOM элементы
Есть базовый тип для HTML эдементов `HTMLElement` и [производные от него](https://ptpit.ru/learn/JSADV/1303.htm).
```typescript
const element: HTMLElement = document.querySelector('div');
const div: HTMLDivElement = document.querySelector('div');
```
#### Коллекции DOM элементов
Несколько элементов
```typescript
const divs: NodeList = document.querySelectorAll('div');
const headers: NodeList = document.querySelectorAll('h2');
```

### Объекты
Чтобы TypeScript контролировал тип дынных объекта иожно указать их при создании объекта:
```typescript
let user: {name: string, age: number} = {name: "John", age: 23};
console.log(user);
```
#### необязательные параметры
Определяются с помощью модификатора `?`
```typescript
let user: {name: string, age: number, id?: number} = {name: "Jack", 32,};
```

### `interfaces` интерфейсы
Интерфейся позволяют создавать новые типы данных, которые описывают структуру объекта.
```typescript
interface User {
    name: string,
    age: number,
};
const user: User = {"John", 32};
```

Можно задавать не только базовые типы данных, но и массивы и уже заданные в тайпскрипте:
```typescript
interface Product {
    name: string,
    colors: string[],
};
```
```typescript
interface Country {
    title: string,
    cities: string[],
    population: number,
};
```
Структура интерфейса может бить и более сложной
```typescript
interface User {
    name: string,
    age: number,
    parents : {
        mother: string,
        father: string,
    },
};
```
Также можно использовать ругие интерфейсы при описание интерфейсов
```typescript
interface Period {
    date1: Date,
    date2: Date,
};
interface City {
    name: string,
    country: string,
};
interface User {
    name: string,
    age: number,
    city: City,
    period: Period,
};
```

Из интересного можно описать интерфейс для гениалогического дерева:
```typescript
interface User {
    name: string,
    age: number,
    parents: {
        mother: User,
        father: User,
    } | null,
};

let user: User = {
	name: 'john',
	age: 13,
	parents: {
		mother: {
			name: 'jane',
			age: 33,
			parents: null,
		},
		father: {
			name: 'eric',
			age: 35,
			parents: null,
		}
	}
}
```

### Массив Дом элементов
```typescript
let elements: NodeList = document.querySelectAll('div');
let divs: HTMLELement[] = Array.from(elements);
```

### Параметры функции
При определении типов в параметрах функции, функцию можно вызывать ровно с таким же количество параметров, с каким она была описана.
```typescript
function f(a: number, b: number): void {
    console.log(a + b);
}
f(1, 2);
f(1);       // error
f(1, 2, 3); // error
```

#### Необязательные параметры функции
Неокторые параметры, как и в объектах, можно сделать необязательными при объявлении функции
```typescript
function sum3(a: number, b: number, c?: number): number {
    return a + b + c;
}

console.log(sum3(1, 2, 3));     // 6
console.log(sum3(1, 2,));       // NaN
}
```
Если необязательный параметр при вызове функции не будет задан, то он примет значение `undefined`. Стоит это учитывать в теле функции.

#### Параметры по-умолчанию
Необязательным параметрам можно указывать значения параметров по-умолчанию. В этом случае символ необязательности `?` не указывается:
```typescript
function sum3(a: number, b: number, c: number = 0): number {
    return a + b + c;
}
console.log(sum3(1, 2));     // 3
```
#### ...rest параметр в функции
Можно использовать `...rest` оператор, но для этого данный параметр надо объявить массивом.
```typescript
function sum_any(...args: number[]): number {
    return args.reduce( (acc, val) => acc + val, 0);
}

console.log(sum_any(1,));       // 1
console.log(sum_any(1, 2, 3));  // 6
console.log(sum_any());         // 0
```

### тип функция
Переменной можно также задать тип функции, если она будет принмать значение какой-нибудь функции. Для этого указывабтся все параметры функции и через знак `=>` возвращаемое функцией значение:
```typescript
type F = (a: number, b: number) => number;

function sum(a: number, b: number): number {
    return a + b;
}

const a: F = sum;
console.log(a(1, 2));
```
Можно записать короче
```typescript
const s: (x: number, y: number) => number = (a: number, b: number)L number => a+b;
```

### функции-коллбеки
для коллбэк функции точно так же как и для типа функция можно указать тип возвращаемых значений и тип переменных
```typescript
function imap (arr: number[], callback: (el: number, ind: number, arr: number[]) => string): string {
    return arr.map(callback).join('\n');
}

function my (value: number, index: number, arr: number[]): string {
    return `${index + 1}) ${arr[index]}`;
}

console.log(imap([5, 6, 7], my));
```

```typescript
type Func = (num: number) => number;

function make(arr: number[], func: Func): number[] {
	return arr.map(function(elem: number) {
		return func(elem);
	});
}

let res: number[] = make([1, 2, 3], function(num: number): number {
	return num ** 2;
});

console.log(res);
```

### Стрелочные функции
Так же как и обычные функции, можно определить и стрелочные функции:
```typescript
function sum(a: number, b: number): number {return a + b;}

const suma = (a: number, b: number): number => a + b;

console.log(suma(1, 3));        // 4
```



### Generic


##  Справочник TypeScript
https://scriptdev.ru/guide/
### Что это
TypeScript - язык со статической типизацией, расширяющий возмодности JavaScript.
Он компилируется в JavasScript код.
Также компилятор TypeScript отлично справляется с динамическим JavaScript кодом, помогая находить в нем ошибки.


```typescript
type C extends A, B | undefined;
type C = (A & B) | undefined
```


### TSC
Инициализация проекта
```bash
tsc --init
```
    
Компиляция файла в javascript
```bash
tsc index.ts
```

`--watch` - компляция в фоне при изменении файлов

#### `tsconfig.json`
`--project` `-p` - опция. котрая позволяет указывать путь к каталогу проекта, а не к конкретному файлу. ПО указанному пути должен лежать файл `tsconfig.json`.

Если для компилятора указан конкретные файлы, то `tsconfig.json` игнорируется.

Запусе в интерактивном режиме с путем проекта в текущей директирии (где хранится __tscongig.json__).
```bash
tsc -w -p ./
```