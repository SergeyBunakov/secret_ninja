console.log("=== Вправи до глави-7 Prototype ===");

console.log("=== Вправа 1 ===");
// Яке із приведених нижче властивостей вказує на об'єкт,
// пошук в якому буде здиійснено, якщо у цільвого об'єкта
// видсутня шукаєма властивість?
console.log("a) class");
console.log("b) instance");
console.log("c) 07_prototype");
console.log("d) pointTo");

console.log("=== Вправа 2 ===");

// Якого значення набуде змінна a1 після виконання наведеного нижяе коду?
function Ninja1() {
}

Ninja.prototype.talk = function () {
    return "Hello";
};

const ninja1 = new Ninja1();
const a1 = ninja1.talk();

console.log("=== Вправа 3 ===");

// Якого значення набуде змінна a2 після виконання наведеного нижяе коду?
function Ninja2() {
}

Ninja2.message = "Hello";

const ninja2 = new Ninja2();
const a2 = ninja2.message;

console.log("=== Вправа 4 ===");
// Поясніть видмінності у методі getFullName(),
// виявлені в двох наведених нижче фрагментах коду
// --- Перший фрагмент ---
function Person1(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    this.getFullName = function () {
        return this.firstName + " " + this.lastName;
    }
}

// --- Другий фрагмент ---
function Person2(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person2.prototype.getFullName = function () {
    return this.firstName + " " + this.lastName;
}

console.log("=== Вправа 5 ===");
// На що буду вказувати властивість ninja3.constructor,
// після виконання наведеного нижче коду
function Person3() { }
function Ninja3() { }
const ninja3 = new Ninja3();

console.log("=== Вправа 6 ===");
// На що буду вказувати властивість ninja3.constructor,
// після виконання наведеного нижче коду
function Person4() { }
function Ninja4() { }

Ninja4.prototype = new Person4();
const ninja4 = new Ninja4();

console.log("=== Вправа 7 ===");
// Поясніть яким чином операція instanceof, діє в наступному прикладі коду
function Warrior1() {}
function Samurai1() {}

Samurai1.prototype = new Warrior1();

const samurai1 = new Samurai1();

samurai1 instanceof Warrior1; // пояснити

console.log("=== Вправа 8 ===");
// Перетворіть наступний фрагмент коду із стандарту ES6 у стандарт ES5
class Warrior2 {
    constructor(weapon) {
        this.weapon = weapon;
    }

    wield() {
        return "Wielding " + this.weapon;
    }

    static duel(warrior1, warrior2) {
        return warrior1.wield() + " " + warrior2.wield();
    }
}






