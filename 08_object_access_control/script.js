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