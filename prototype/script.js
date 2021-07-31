console.log("=== Prototype ===");
const yoshi = {skulk: true};
const hattori = {sneak: true};
const kuma = {creep: true};

console.log("skulk" in yoshi, "Yoshi can skulk");
console.log("sneak" in yoshi, "Yoshi cannot skulk");
console.log("creep" in yoshi, "Yoshi cannot creep");

Object.setPrototypeOf(yoshi, hattori);

console.log("sneak" in yoshi, "Yoshi can now sneak");
console.log("creep" in hattori, "Yoshi cannot creep");

Object.setPrototypeOf(hattori, kuma);

console.log("creep" in hattori, "Hattori can now creep");
console.log("creep" in yoshi, "Yoshi can also creep");
// Результат у консолі
/*
true Yoshi can skulk
false Yoshi cannot skulk
false Yoshi cannot creep
true Yoshi can now sneak
false Yoshi cannot creep
true Hattori can now creep
true Yoshi can also creep
*/

const warrior = {};
warrior.name = "Saito";
warrior.occupation = "marksman";
console.log(warrior);
// { name: 'Saito', occupation: 'marksman' }

console.log("=== Створення нового об'єкта за допомогою метода прототипа ===");
// ========
/*
function Ninja() {
}

Ninja.prototype.swingSword = function () {
    return true;
}
const ninja1 = Ninja();
console.log(ninja1 === undefined, "No instance Ninja created.");
// true No instance Ninja created.
const ninja2 = new Ninja();
console.log(ninja2 && ninja2.swingSword && ninja2.swingSword(), "Instance exist and method is callable.");
// true Instance exist and method is callable.
*/
// ========

// ========
/*
function Ninja() {
    this.swung = false;
    this.swingSword = function() {
        return !this.swung;
    };
}
Ninja.prototype.swingSword = function() {
    return this.swung;
};

const ninja = new Ninja();
console.log(ninja.swingSword(), "Called the instance method, not the prototype method.");
// true Called the instance method, not the prototype method.
*/
// ========
console.log("=== Побічні ефекти дінамічекского характкру в JavaScript. ===");
console.log("=== Завдяки прототипам все може змінюватися під час виконання. === ");
/*
function Ninja() {
    this.swung = true;
}
const ninja = new Ninja();
Ninja.prototype.swingSword = function() {
    return this.swung;
};

console.log(ninja.swingSword(), "Method exist, event out of order.");
// true Method exist, event out of order.

Ninja.prototype = {
    pierce: function() {
        return true;
    }
}

console.log(ninja.swingSword(), "Our ninja can still swing.");
// true Our ninja can still swing.

const ninja2 = new Ninja();
console.log(ninja2.pierce(), "Newly created ninjas can pierce.");
// true Newly created ninjas can pierce.
console.log(ninja2.swingSword, "But they can not swing!");
// undefined But they can not swing!
*/
// ========

console.log("=== Перевірка типу екземпляра та його конструктора ===");
/*
function Ninja() {}
const ninja = new Ninja();

console.log(typeof ninja === "object", "The type of the instance is object.");
console.log(ninja instanceof Ninja, "instanceof identifies the constructor.");
console.log(ninja.constructor === Ninja, "The Ninja object was created by the Ninja function.");
// true The type of the instance is object.
// true instanceof identifies the constructor.
// true The Ninja object was created by the Ninja function.
*/

// ========
console.log("=== Отримання нового екземпляра об'єкта по посиланню на конструктор.");
/*
function Ninja() {}

const ninja = new Ninja();
const ninja2 = new ninja.constructor();

console.log(ninja2 instanceof Ninja, "It`s a Ninja.");
console.log(ninja !== ninja2, "But not the same Ninja!");

// true It`s a Ninja.
// true But not the same Ninja!
*/

// ========
console.log("=== Досягнення Наслідування === ");
console.log("=== Спроба досягти наслідування за допомогою прототипів. === ");
/*
function Person() {}
Person.prototype.dance = function() {};

function Ninja() {}
Ninja.prototype = {dance: Person.prototype.dance};

const ninja = new Ninja();

console.log(ninja instanceof Ninja, "ninja receives functionality from Ninja prototype");
console.log(ninja instanceof Person, "... and the Person prototype");
console.log(ninja instanceof Object, "... and the Object prototype");

// true ninja receives functionality from Ninja prototype
// false ... and the Person prototype
// true ... and the Object prototype
*/

// ========
console.log("=== Досягнення наслідування за допомогою прототипів ===");
/*
function Person() {}
Person.prototype.dance = function() {};

function Ninja() {}
Ninja.prototype = new Person();

const ninja = new Ninja();
console.log(ninja instanceof Ninja, "ninja receives functionality from the Ninja prototype");
console.log(ninja instanceof Person, "... and the Person prototype");
console.log(ninja instanceof Object, "... and the Object prototype");
console.log(typeof ninja.dance === "function", "... and can dance!");

// true ninja receives functionality from the Ninja prototype
// true ... and the Person prototype
// true ... and the Object prototype
// true ... and can dance!
*/

// ========
console.log("=== Труднощі перевизначення властивостей constructor ===");
console.log("=== Наолаштування параметрів властивостей об'єктів ===");
/*
const ninja = {};
ninja.name = "Yoshi";
ninja.weapon = "kusarigama";

Object.defineProperty(ninja, "sneaky", {
    configurable: false,
    enumerable: false,
    value: true,
    writable: true,
});

console.log("sneaky" in ninja, "We can access the new property");

for(let prop in ninja) {
    console.log(prop !== undefined, "An enumerable property: + prop");
}
// true We can access the new property
// true An enumerable property: + prop
// true An enumerable property: + prop
*/

// ========
console.log("=== Остаточне усунення труднощів при переросподілі властивостей ===");
/*
function Person() {}
Person.prototype.dance = function() {};

function Ninja() {}
Ninja.prototype = new Person();

Object.defineProperty(Ninja.prototype, "constructor", {
    enumerable: false,
    value: Ninja,
    writable: true,
});

const ninja = new Ninja();

console.log(ninja.constructor === Ninja, "Connection from instance to Ninja constructor reestablished!");
for(let prop in Ninja.prototype) {
    console.log(prop === "dance", "The only enumerable property is dance!");
}
// true Connection from instance to Ninja constructor reestablished!
// true The only enumerable property is dance!
*/

// ========
console.log("=== Операція instanceof ===");
console.log("=== Дослідження операції instanceof ===");
/*
function Person() {}
function Ninja() {}

Ninja.prototype = new Person();

const ninja = new Ninja();

console.log(ninja instanceof Ninja, "Out ninja is a Ninja!");
console.log(ninja instanceof Person, "A ninja is also a Person.");
// true Out ninja is a Ninja!
// true A ninja is also a Person.
*/

// ========
console.log("=== Роз'яснення операції instenceof ===");
/*
function Ninja() {}

const ninja = new Ninja();

console.log(ninja instanceof Ninja, "Our ninja is a Ninja!");

Ninja.prototype = {};

console.log(!(ninja instanceof Ninja), "The ninja is now not a Ninja!?");
// true Our ninja is a Ninja!
// true The ninja is now not a Ninja!?
*/

// ========
console.log("=== Застосування 'класів' в стандарті ES6 мови JavaScript ===");
console.log("=== Створення ключового слова 'class' ===");
/*
class Ninja {
    constructor(name) {
        this.name = name;
    }

    swingSword() {
        return true;
    }
}

const ninja = new Ninja("Yoshi");

console.log(ninja instanceof Ninja, "Our ninja is a Ninja");
console.log(ninja.name === "Yoshi", "named Yoshi");
console.log(ninja.swingSword(), "and he can swing a sword");
// true Our ninja is a Ninja
// true named Yoshi
// true and he can swing a sword
*/

// ========
console.log("=== Код класу можна функціонаольно прирівняти до наступного коду в стандарті ES5 ===");
/*
function Ninja(name) {
    this.name = name;
}
Ninja.prototype.swingSword = function() {
    return true;
}
const ninja = new Ninja("Yoshi");

console.log(ninja instanceof Ninja, "Our ninja is a Ninja");
console.log(ninja.name === "Yoshi", "named Yoshi");
console.log(ninja.swingSword(), "and he can swing a sword");
// true Our ninja is a Ninja
// true named Yoshi
// true and he can swing a sword
*/

// ========
console.log("=== Статичні методи в стандарті ES6 ===");
/*
class Ninja {
    constructor(name, level) {
        this.name = name;
        this.level = level;
    }

    swingSword() {
        return true;
    }

    static compare(ninja1, ninja2) {
        return (ninja1.level - ninja2.level);
    }
}

const ninja1 = new Ninja("Yoshi", 4);
const ninja2 = new Ninja("Hattori", 3);

console.log(!("compare ninja1") && !("compare ninja2"), "A ninja instance doesn`t know how to compare");
console.log(Ninja.compare(ninja1, ninja2) > 0, "The Ninja class can do the comparison");
console.log(!("swingSword" in Ninja), "The Ninja class cannot swing a sword");
// false A ninja instance doesn`t know how to compare
// true The Ninja class can do the comparison
// true The Ninja class cannot swing a sword
*/

// ========
console.log("=== Реалізація успадкування ===");
console.log("=== Здійснити успадкування в коді до ES6 було не так-то і просто ===");
/*
function Person() {
}

Person.prototype.dance = function () {
};

function Ninja() {
}

Ninja.prototype = new Person(); // губиться властівість "constructor" прототипу

Object.defineProperty(Ninja.prototype, "constructor", {
    enumerable: false,
    value: Ninja,
    writable: true,
});
// В приведеному коді для відновлення властивості "constructor",
// необхідно звернутися до метода Object.defineProperty()
*/

// ========
console.log("=== Успадкування в стандарті ES6 ===");

class Person {
    constructor(name) {
        this.name = name;
    }

    dance() {
        return true;
    }
}

class Ninja extends Person {
    constructor(name, weapon) {
        super(name);
        this.weapon = weapon;
    }
    wieldWeapon() {
        return true;
    }
}

const person = new Person("Bob");

console.log(person instanceof Person, "A person`s a person");
console.log(person.dance(), "A person can dance.");
console.log(person.name === "Bob", "We can call it by name.");
console.log(!(person instanceof Ninja), "But it`s not a Ninja.");
console.log(!("wieldWeapon" in person), "And it cannot wield a weapon.");
// true A person`s a person
// true A person can dance.
// true We can call it by name.
// true But it`s not a Ninja.
// true And it cannot wield a weapon.

const ninja = new Ninja("Yoshi", "Wakizashi");

console.log(ninja instanceof Ninja, "A ninja`s a ninja.");
console.log(ninja.wieldWeapon(), "That can wield a weapon.");
console.log(ninja instanceof Person, "But it`s also a person.");
console.log(ninja.name === "Yoshi", "That has a name.");
console.log(ninja.dance(), "And enjoys dancing.");
// true A ninja`s a ninja.
// true That can wield a weapon.
// true But it`s also a person.
// true That has a name.
// true And enjoys dancing.








