console.log("=== Управління доступом до об'єктів ===");
// =========

console.log("=== Захист закритих властивостей за допомогою отримання та встановлення ===");
/*
function Ninja () {
    let skillLevel;
    this.getSkillLevel = () => skillLevel;

    this.setSkillLevel = value => {
        skillLevel = value;
    };
}

const ninja = new Ninja();

ninja.setSkillLevel(100);
console.log(ninja.getSkillLevel() === 100, "Our ninja is at level 100!");

ninja.setSkillLevel("Hello JavaScript!");
console.log(ninja.getSkillLevel() === "Hello JavaScript!", "Our ninja is at level \"Hello JavaScript!\"");

// true Our ninja is at level 100!
// true Our ninja is at level "Hello JavaScript!"
*/

// =========
/*
function Ninja() {
    let skillLevel;

    this.getSkillLevel = () => {
        console.log("Getting skill level value");
        return skillLevel;
    };

    this.setSkillLevel = value => {
       console.log("Modifying skillLevel property from:", skillLevel, "to: ", value);
       skillLevel = value;
    }
}

const ninja = new Ninja();

ninja.setSkillLevel(100);
console.log(ninja.getSkillLevel() === 100, "Our ninja is at level 100!");

ninja.setSkillLevel("Hello JavaScript!");
console.log(ninja.getSkillLevel() === "Hello JavaScript!", "Our ninja is at level \"Hello JavaScript!\"");
*/

// Modifying skillLevel property from: undefined to:  100
// Getting skill level value
// true Our ninja is at level 100!
// Modifying skillLevel property from: 100 to:  Hello JavaScript!
// Getting skill level value
// true Our ninja is at level "Hello JavaScript!"

// =========
console.log("=== Визначення методів отримання і установки в літералах ===");
/*
const ninjaCollection = {
    ninjas: ["Yoshi", "Kuma", "Hattori"],
    get firstNinja() {
        console.log("Getting firstNinja");
        return this.ninjas[0];
    },
    set firstNinja(value) {
        console.log("Setting firstNinja");
        this.ninjas[0] = value;
    }
};

console.log(ninjaCollection.firstNinja === "Yoshi", "Yoshi is the first ninja");

ninjaCollection.firstNinja = "Hachi";

console.log(ninjaCollection.firstNinja === "Hachi" && ninjaCollection.ninjas[0] === "Hachi", "Now Hachi is the first ninja");

// Getting firstNinja
// true Yoshi is the first ninja
// Setting firstNinja
// Getting firstNinja
// true Now Hachi is the first ninja
*/

// =========
console.log("=== Визначення методів отримання і установки за допомогою класів в стандарті ES6 ===");
/*
class NinjaCollection {
    constructor() {
        this.ninjas = ["Yoshi", "Kuma", "Hattori"];
    }

    get firstNinja() {
        console.log("Getting firstNinja");
        return this.ninjas[0];
    }

    set firstNinja(value) {
        console.log("Setting firstNinja");
        this.ninjas[0] = value;
    }
}

const ninjaCollection = new NinjaCollection();

console.log(ninjaCollection.firstNinja === "Yoshi",
    "Yoshi is the first ninja");

ninjaCollection.firstNinja = "Hachi";

console.log(ninjaCollection.firstNinja === "Hachi"
    && ninjaCollection.ninjas[0] === "Hachi",
    "Now Hachi is the first ninja"
);

// Getting firstNinja
// true Yoshi is the first ninja
// Setting firstNinja
// Getting firstNinja
// true Now Hachi is the first ninja
*/

// =========

console.log("=== Визначення методів отримання і установки за допомогою методу Object.defineProperty() ===");
/*
function Ninja() {
    let _skillLevel = 0;

    Object.defineProperty(this, 'skillLevel', {
        get: () => {
            console.log("The get method is called");
            return _skillLevel;
        },
        set: value => {
            console.log("The set method is called");
            _skillLevel = value;
        }
    });
}

const ninja = new Ninja();

console.log(typeof ninja._skillLevel === "undefined",
    "We cannot access a 'private property'");

console.log(ninja.skillLevel === 0, "The getter works fine!");

ninja.skillLevel = 10;
console.log(ninja.skillLevel === 10, "The value was updated");

// true We cannot access a 'private property'
// The get method is called
// true The getter works fine!
// The set method is called
// The get method is called
// true The value was updated
*/

// =========
console.log("=== Перевірка достовірності значень, що присвоюються властивостями, в методах установки ===");
/*
function Ninja() {
    let _skillLevel = 0;

    Object.defineProperty(this, 'skillLevel', {
        get: () => _skillLevel,
        set: value => {
            if(!Number.isInteger(value)) {
                throw new TypeError("Skill level should be a number");
            }
            _skillLevel = value;
        }
    });
}

const ninja = new Ninja();

ninja.skillLevel = 10;
console.log(ninja.skillLevel === 10, "The value was updated");

try {
    ninja.skillLevel = "Great";
    fail("Should not here");
} catch(e) {
    console.log("Should a non-integer value throws exception");
}

// true The value was updated
// Should a non-integer value throws exception
*/


// =========
console.log("=== Визначення обчислюваних властивостей ===");
/*
const shogun = {
    name: "Yoshiaki",
    clan: "Ashikaga",
    get fullTitle() {
        return this.name + " " + this.clan;
    },
    set fullTitle(value) {
        const segments = value.split(" ");
        this.name = segments[0];
        this.clan = segments[1];
    }
};

console.log(shogun.name === "Yoshiaki", "Our shogun Yoshiaki");
console.log(shogun.clan === "Ashikaga", "Of clan Ashikaga");
console.log(shogun.fullTitle === "Yoshiaki Ashikaga", "The full name is now Yoshiaki Ashikaga!");

shogun.fullTitle = "Ieyasu Tokugawa";
console.log(shogun.name === "Ieyasu", "Our shogun Ieyasu");
console.log(shogun.clan === "Tokugawa", "Of clan Tokugawa");
console.log(shogun.fullTitle === "Ieyasu Tokugawa", "The full name is now Ieyasu Tokugawa!");

// true Our shogun Yoshiaki
// true Of clan Ashikaga
// true The full name is now Yoshiaki Ashikaga!
// true Our shogun Ieyasu
// true Of clan Tokugawa
// true The full name is now Ieyasu Tokugawa!
*/

// =========
console.log("=== Створення проксі-обєктів за допомогою конструктора об'єктів типу Proxy ===");
/*
const emperor = {name: "Komei"};
const representative = new Proxy(emperor, {
    get: (target, key) => {
        console.log("Reading " + key + " through a proxy");
        return key in target ? target[key] : "Don`t bother the emperor!"
    },
    set: (target, key, value) => {
        console.log("Writing " + key + " through a proxy");
        target[key] = value;
    }
});

console.log(emperor.name === "Komei", "The emperor`s name is Komei");
console.log(representative.name === "Komei", "We can get thr name property through a proxy");

console.log(emperor.nickname === undefined, "The emperor does`t have a nickname ");
console.log(representative.nickname === "Don`t bother the emperor!");

representative.nickname = "Tenno";
console.log(emperor.nickname === "Tenno", "The emperor now has a nickname");
console.log(representative.nickname === "Tenno", "The nickname is also accessible through the proxy");

// true The emperor`s name is Komei
// Readingnamethrough a proxy
// true We can get thr name property through a proxy
// true The emperor does`t have a nickname
// Reading nickname through a proxy
// true
// Writing nicknamethrough a proxy
// true The emperor now has a nickname
// Readingnicknamethrough a proxy
// true The nickname is also accessible through the proxy
*/

// =========
console.log("=== Протоколювання без проксі обєктів ===");
/*
function Ninja() {
    let _skillLevel = 0;

    Object.defineProperty(this, "skillLevel", {
        get: () => {
            console.log("skillLevel get method is called");
            return _skillLevel;
        },
        set: value => {
            console.log("skillLevel set method is called");
            _skillLevel = value;
        }
    });
}

const ninja = new Ninja();
ninja.skillLevel;
ninja.skillLevel = 4;
console.log(ninja.skillLevel);

// skillLevel get method is called
// skillLevel set method is called
// skillLevel get method is called
// 4
*/

// =========
console.log("=== Проксі-обєкти спрощують впровадження протоколювання в обєкти ===");
/*
function makeLoggable(target) {
    return new Proxy(target, {
        get: (target, property) => {
            console.log("Reading " + property);
            return target[property];
        },
        set: (target, property, value) => {
            console.log("Writing " + value + " to " + property);
            target.property = value;
        }
    });
}

let ninja = {name: "Yoshi"};
ninja = makeLoggable(ninja);

console.log(ninja.name === "Yoshi", "Our ninja Yoshi");
ninja.weapon = "sword";

// Reading name
// true Our ninja Yoshi
// Writing sword to weapon
*/

// =========
console.log("=== Вимірювання продуктивності за допомогою проксі-об'єктів ===");
/*
function isPrime(number) {
    if (number < 2) {
        return false;
    }
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

isPrime = new Proxy(isPrime, {
    apply: (target, thisArg, args) => {
        console.time("isPrime");
        const result = target.apply(thisArg, args);
        console.timeEnd("isPrime");
        return result;
    }
});

isPrime(1299827);
// sPrime: 12.573974609375 ms
*/

// =========
console.log("=== Автоматичне заповнення властивостей об'єктів за допомогою проксі-об'єктів ===");
/*
function Folder() {
    return new Proxy({}, {
        get: (target, property) => {
            console.log("Reading " + property);

            if (!(property in target)) {
                target[property] = new Folder();
            }
            return target[property];
        }
    });
}

const rootFolder = new Folder();

try {
    rootFolder.ninjasDir.firstNinjaDir.ninjaFile = "yoshi.txt";
    console.log("An exception wasn`t raised");
} catch (e) {
    fail("As exception has occurred");
}

// Reading ninjasDir
// Reading firstNinjaDir
// An exception wasn`t raised
*/

// =========
console.log("=== Реалізація негативних індексів масивів за допомогою проксі-об'єктів ===");

function createNegativeArrayProxy(array) {
    if (!Array.isArray(array)) {
        throw new TypeError("Expected an array");
    }
    return new Proxy(array, {
        get: (target, index) => {
            index = +index;
            return target[index < 0 ? target.length + index : index];
        },
        set: (target, index, val) => {
            index = +index;
            return target[index < 0 ? target.length + index : index] = val;
        }
    });
}

const ninjas = ["Yoshi", "Kuma", "Hattori"];
const proxiedNinjas = createNegativeArrayProxy(ninjas);

console.log(ninjas[0] === "Yoshi" && ninjas[1] === "Kuma" && ninjas[2] === "Hattori",
    "Array items accessed through positive indexes");

console.log(proxiedNinjas[0] === "Yoshi" && proxiedNinjas[1] === "Kuma" && proxiedNinjas[2] === "Hattori",
    "Array items accessed through positive indexes on a proxy");

console.log(typeof ninjas[-1] === "undefined" && typeof ninjas[-1] === "undefined" && typeof ninjas[-2] === "undefined",
    "Items cannot be accessed through negative indexes");

console.log(proxiedNinjas[-1] === "Yoshi" && proxiedNinjas[-2] === "Kuma" && proxiedNinjas[-3] === "Hattori",
    "But they be accessed through negative indexes");

proxiedNinjas[-1] = "Hachi";
console.log(proxiedNinjas[-1] === "Hachi" && proxiedNinjas[2] === "Hachi",
    "Items can be changed through negative indexes");

// true Array items accessed through positive indexes
// true Array items accessed through positive indexes on a proxy
// true Items cannot be accessed through negative indexes
// false But they be accessed through negative indexes
// true Items can be changed through negative indexes

console.log(proxiedNinjas[-1], ": доступ до елементів масиву через негативні значення через прксі-об'єкт");
console.log(proxiedNinjas[-2], ": доступ до елементів масиву через негативні значення через прксі-об'єкт");
console.log(proxiedNinjas[-3], ": доступ до елементів масиву через негативні значення через прксі-об'єкт");

// =========
console.log("=== Виявлення уповільнення в роботі коду, що вноситься проксі-об'єктом ===");

function measure(items) {
    const startTime = new Date().getTime();
    for (let i = 0; i < 500000; i++) {
        items[0] = "Yoshi";
        items[1] = "Kuma";
        items[2] = "Hattori";
    }
    return new Date().getTime() - startTime;
}

console.log("Proxies are around", Math.round(measure(proxiedNinjas) / measure(ninjas)), "times slower");

// Proxies are around 17 times slower

