console.log("=== Робота з колекціями ===");
console.log("=== Створення масивів ===");
/*
const ninjas = ["Kuma", "Hattori", "Yagyu"];
const samurai = new Array("Oda", "Tomoe");

console.log(ninjas.length === 3, "The are three ninjas");
console.log(ninjas.length === 2, "And only two samurai");

console.log(ninjas[0] === "Kuma", "Kuma is the first ninjas")
console.log(samurai[samurai.length - 1] === "Tomoe", "Tomoe is the last samurai");

console.log(ninjas[4] === undefined, "We get undefined if we try to access an out of bounds index");

ninjas[4] = "Yoshi";
console.log(ninjas.length === 5, "Arrays are automatically expanded");

ninjas.length = 2;
console.log(ninjas.length === 2, "There are only two ninjas now");
console.log(ninjas[0] === "Kuma" && ninjas[1] === "Hattori", "Kuma and Hattori");
console.log(ninjas[2] === undefined, "But we`ve lost Yagyu");

// true The are three ninjas
// false And only two samurai
// true Kuma is the first ninjas
// true Tomoe is the last samurai
// true We get undefined if we try to access an out of bounds index
// true Arrays are automatically expanded
// true There are only two ninjas now
// true Kuma and Hattori
// true But we`ve lost Yagyu
*/

// ================
console.log("=== Додавання та видалення елементів масиву ===");
/*
// метод push()    ->  додає елемент в кінець масиву
// метод unshift() ->  додає елемент в початок масиву
// метод pop()     ->  видаляє елемент з кінця масиву
// метод shift()   ->  видаляє елемент з початку масиву

const ninjas = [];
console.log(ninjas.length === 0, "An array starts empty");

ninjas.push("Kuma");
console.log(ninjas[0] === "Kuma", "Kuma is the first items in the array");

ninjas.push("Hattori");
console.log(ninjas[0] === "Kuma", "Kuma is still first");
console.log(ninjas[1] === "Hattori", "Hattori is added to the end of the array");
console.log(ninjas.length === 2, "We have two the items in the array!");
// true An array starts empty
// true Kuma is the first items in the array
// true Kuma is still first
// true Hattori is added to the end of the array
// true We have two the items in the array!
console.log(ninjas);
// [ 'Kuma', 'Hattori' ]

ninjas.unshift("Yagyu");
console.log(ninjas[0] === "Yagyu", "Now Yagyu is the first items");
console.log(ninjas[1] === "Kuma", "Kuma moved to the second place");
console.log(ninjas[2] === "Hattory", "And Hattory to the third place");
console.log(ninjas.length === 3, "We have three items in the array");
// true Now Yagyu is the first items
// true Kuma moved to the second place
// false And Hattory to the third place
// true We have three items in the array
console.log(ninjas);
// [ 'Yagyu', 'Kuma', 'Hattori' ]

const lastNinja = ninjas.pop();
console.log(lastNinja === "Hattori", "We`ve removed Hattori from the end of the array");
console.log(ninjas[0] === "Yagyu", "Now Yagyu is still the first items");
console.log(ninjas[1] === "Kuma", "Kuma is still the second place");
console.log(ninjas.length === 2, "Now there are two item in the array");
// true We`ve removed Hattori from the end of the array
// true Now Yagyu is still the first items
// true Kuma is still the second place
// true Now there are two item in the array
console.log(ninjas);
// [ 'Yagyu', 'Kuma' ]

const firstNinja = ninjas.shift();
console.log(firstNinja === "Yagyu", "We`ve removed Yagyu from the beginning of the array");
console.log(ninjas[0] === "Kuma", "Kuma has shifted to the first place");
console.log(ninjas.length === 1, "There`s only one ninja in the array");
// true We`ve removed Yagyu from the beginning of the array
// true Kuma has shifted to the first place
// true There`s only one ninja in the array
console.log(ninjas);
// [ 'Kuma' ]
*/

// ================
console.log("=== Додавання та видалення елементів в любому місці масиву ===");
console.log("=== Найпростіший спосіб видалення елементів із масиву ===");
/*
const ninjas = ["Yagyu", "Kuma", "Hattori", "Fuma"];

delete ninjas[1];

console.log(ninjas.length === 4, "Length still reports that there are 4 items");

console.log(ninjas[0] === "Yagyu", "First item is Yagyu");
console.log(ninjas[1] === undefined, "We`ve simply created a hole");
console.log(ninjas[2] === "Hattori", "Hattori is still the third item");
console.log(ninjas[3] === "Fuma", "And Fuma is the last item");
// true First item is Yagyu
// true We`ve simply created a hole
// true Hattori is still the third item
// true And Fuma is the last item

console.log(ninjas);
// [ 'Yagyu', <1 empty item>, 'Hattori', 'Fuma' ]
// === Or of the browser Chrome ===
// (4) ["Yagyu", empty, "Hattori", "Fuma"]
// 0: "Yagyu"
// 2: "Hattori"
// 3: "Fuma"
// length: 4
*/

// ================
console.log("=== Видалення та додавання елеметнтів в довільних місцях масиву ===");
/*
const ninjas = ["Yagyu", "Kuma", "Hattori", "Fuma"];

let removedItems = ninjas.splice(1, 1);

console.log(removedItems.length === 1, "One item was removed");
// true One item was removed

console.log(removedItems[0] === "Kuma");
// true

console.log(ninjas.length === 3, "There are now three items in the array");
console.log(ninjas[0] === "Yagyu", "The first is item still Yagyu");
console.log(ninjas[1] === "Hattori", "Hattori is now in the second place");
console.log(ninjas[2] === "Fuma", "And Fuma is in the third place");
// true There are now three items in the array
// true The first is item still Yagyu
// false Hattori is now in the second place
// true And Fuma is in the third place

console.log(ninjas);
// [ 'Yagyu', 'Hattori', 'Fuma' ]

removedItems = ninjas.splice(1, 2, "Mochizuki", "Moshi", "Momochi");

console.log(ninjas);
// [ 'Yagyu', 'Mochizuki', 'Moshi', 'Momochi' ]

console.log(removedItems);
// [ 'Hattori', 'Fuma' ]

console.log(removedItems.length === 2, "Now, we`ve removed two items");
console.log(removedItems[0] === "Hattori", "Hattori was removed");
console.log(removedItems[1] === "Fuma", "Fuma was removed");
console.log(ninjas.length === 4, "We`ve inserted some new items");

console.log(ninjas[0] === "Yagyu", "Yagyu is still here");
console.log(ninjas[1] === "Mochizuki", "Mochizuki also");
console.log(ninjas[2] === "Moshi", "Moshi also");
console.log(ninjas[3] === "Momochi", "and Momochi");
// true Yagyu is still here
// true Mochizuki also
// true Moshi also
// true and Momochi

console.log(ninjas);
// [ 'Yagyu', 'Mochizuki', 'Moshi', 'Momochi' ]
*/

// ================
console.log("=== Перебирання елементів масиву ===");

/*
const ninjas = ["Yagyu", "Kuma", "Hattori", "Fuma"];

for(let i = 0; i < ninjas.length; i++) {
    console.log(ninjas[i] !== null, ninjas[i]);
}
*/

/*
const ninjas = ["Yagyu", "Kuma", "Hattori", "Fuma"];

ninjas.forEach(ninja => {
    console.log(ninja !== null, ninja);
});
*/

// ================
console.log("=== Відображуння масивів ===");

console.log("=== Простійший спосіб витягнення із масива видів зброї ===");

/*
const ninjas = [
    {name: "Yagyu", weapon: "shuriken"},
    {name: "Yoshi", weapon: "katana"},
    {name: "Kuma", weapon: "wakirashi"},
];

const weapons = [];
ninjas.forEach(ninja => {
    weapons.push(ninja.weapon);
});

console.log(weapons[0] === "" && weapons[1] === "" && weapons[2] === "" && weapons.length === 3, "The new array contains all weapons");

console.log(weapons); // [ 'shuriken', 'katana', 'wakirashi' ]
*/

// ================
console.log("=== Відображення масиву за допомогою вбудованого методу map() ===");

/*
const ninjas = [
    {name: "Yagyu", weapon: "shuriken"},
    {name: "Yoshi", weapon: "katana"},
    {name: "Kuma", weapon: "wakirashi"},
];

const weapons = ninjas.map(ninja => ninja.weapon);

console.log(weapons[0] === "" && weapons[1] === "" && weapons[2] === "" && weapons.length === 3, "The new array contains all weapons");
*/

// ================
console.log("=== Перевірка елементів масиву за допомогою методів every() та some() ===");

/*
const ninjas = [
    {name: "Yagyu", weapon: "shuriken"},
    {name: "Yoshi"},
    {name: "Kuma", weapon: "wakizashi"},
];

const allNinjasAreNamed = ninjas.every(ninja => "name" in ninja);
const allNinjasAreArmed = ninjas.every(ninja => "weapon" in ninja);

console.log(allNinjasAreNamed, "Every ninja has a name");
console.log(allNinjasAreArmed, "But not every ninja is armed");

const someNinjasAreNamed = ninjas.some(ninja => "weapon" in ninja);
console.log(someNinjasAreNamed, "But some ninjas are armed");
*/

// ================
console.log("=== Пошук окремих елементів у масиві за допомогою методів find() та filter() ===");

/*
const ninjas = [
    {name: "Yagyu", weapon: "shuriken"},
    {name: "Yoshi"},
    {name: "Kuma", weapon: "wakizashi"},
];

const ninjaWithWakizashi = ninjas.find(ninja => {
    return ninja.weapon === "wakizashi";
});

console.log(ninjaWithWakizashi.name === "Kuma"
    && ninjaWithWakizashi.weapon === "wakizashi",
    "Kuma is wielding is wakizashi"
);

const ninjaWithKatana = ninjas.find(ninja => {
    return ninja.weapon === "katana";
});

console.log(ninjaWithKatana === undefined,
    "We could not find a ninja that wields a katana"
);

const armedNinjas = ninjas.filter(ninja => "weapon" in ninja);

console.log(armedNinjas.length === 2, "There are two armed ninjas: ");
console.log(armedNinjas[0].name === "Yagyu" && armedNinjas[1].name === "Kuma",
    "Yagyu and Kuma");
*/

// ================
console.log("=== Визначення індексів в масиві методами indexOf() lastIndexOf() та findIndex() ===");

/*
const ninjas = ["Yagyu", "Yoshi", "Kuma", "Yoshi"];

console.log(ninjas.indexOf("Yoshi") === 1, "Yoshi is at index 1");
console.log(ninjas.lastIndexOf("Yoshi") === 3, "and at index 3");

const yoshiIndex = ninjas.findIndex(ninja => ninja === "Yoshi");

console.log(yoshiIndex === 1, "Yoshi is still at index 1");
*/

// ================
console.log("=== Сортування масивів, метод sort() ===");

// const array = [a, b];
// array.sort((a, b) => a - b);

/*
const ninjas = [{name: "Yoshi"}, {name: "Yagyu"}, {name: "Kuma"}];

ninjas.sort(function(ninja1, ninja2) {
    if(ninja1 < ninja2) {return -1;}
    if(ninja1 > ninja2) {return 1;}

    return 0;
});
console.log(ninjas);

console.log(ninjas[0].name === "Kuma", "Kuma is first");    // false Kuma is first
console.log(ninjas[1].name === "Yagyu", "Yagyu is second"); // true Yagyu is second
console.log(ninjas[2].name === "Yoshi", "Yoshi is third");  // false Yoshi is third
*/

/*
const arr = [23, 12, 7, 48, 14];
console.log(arr);
arr.sort(function (a, b) {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
});
console.log(arr);
// [ 23, 12, 7, 48, 14 ]
// [ 7, 12, 14, 23, 48 ]
*/


// ================
console.log("=== Агрегування елементів масиву ===");
/*
const numbers = [1, 2, 3, 4, 5, 6, 7];
let sum = 0;
numbers.forEach(number => {
    sum += number;
});
console.log(sum); // 28
console.log(sum === 28, "The sum of first four numbers is 28") ;
*/

// ================
console.log("=== Агрегування елементів масиву за допомогою метода reduce() ===");

/*
const numbers = [1, 2, 3, 4, 5, 6, 7];
const sum = numbers.reduce((aggregated, number) =>
aggregated + number, 0);
console.log(sum);  // 28
console.log(sum === 28, "The sum of first four numbers is 28" );
*/

// ================
console.log("=== Повторне використання вбудованих методів обробки масивів ===");

console.log("=== Імітація методів обробки масивів ===");
// Дивись simulating_array.js

// ================
console.log("=== Відображення ===");
console.log("=== Створення першого відображення ===");

const ninjaIsLandMap = new Map();
const ninja1 = {name: "Yoshi"};
const ninja2 = {name: "Hattori"};
const ninja3 = {name: "Kuma"};

ninjaIsLandMap.set(ninja1, {homeIsLand: "Honshu"});
ninjaIsLandMap.set(ninja2, {homeIsLand: "Hokkaido"});

console.log(ninjaIsLandMap.get(ninja1).homeIsLand === "Honshu", "The first mapping works");
console.log(ninjaIsLandMap.get(ninja2).homeIsLand === "Hokkaido", "The second mapping works");

console.log(ninjaIsLandMap.get(ninja3) === undefined,
    "There is no mapping for third ninja!");

console.log(ninjaIsLandMap.size === 2,
    "We`ve created two mappings");

console.log(ninjaIsLandMap.has(ninja1) && ninjaIsLandMap.has(ninja2),
    "We have mapping for the first two ninjas");
console.log(ninjaIsLandMap.has(ninja3), "But not for the third ninja!");

ninjaIsLandMap.delete(ninja1);
console.log(ninjaIsLandMap.has(ninja1) && ninjaIsLandMap.size === 1,
    "There`s no first ninja mapping anymore!");

ninjaIsLandMap.clear();
console.log(ninjaIsLandMap.size === 0, "All mapping have been cleared");

console.log(ninjaIsLandMap); // Map(0) {}
console.log(ninja1);         // script.js:401 {name: "Yoshi"}
console.log(ninja2);         // script.js:402 {name: "Hattori"}
console.log(ninja3);         // script.js:403 {name: "Kuma"}

// ================
console.log("=== Рівність ключів в відображеннях ===");

const map = new Map();
const currentLocation = location.href;

const firstLink = new URL(currentLocation);
const secondLink = new URL(currentLocation);

map.set(firstLink, {description: "firstLink"});
map.set(secondLink, {description: "secondLink"});

console.log(map.get(firstLink).description === "firstLink",
    "First link mapping");
console.log(map.get(secondLink).description === "secondLink",
    "Second link mapping");
console.log(map.size === 2, "There are two mapping");
// true "First link mapping"
// script.js:419 true "Second link mapping"
// script.js:421 true "There are two mapping"

// ================
console.log("=== Перебір елементів відображення ===");

const directory = new Map();

directory.set("Yoshi", "+81 23 2323");
directory.set("Kuma", "+81 32 3232 3232");
directory.set("Hiro", "+81 33 3222 2223");

console.log("---- item ----");
for (let item of directory) {
    console.log(item[0] !== null, "Key: " + item[0]);
    console.log(item[1] !== null, "Value: " + item[1]);
}

console.log("---- keys() ----");
for (let key of directory.keys()) {
    console.log(key !== null, "Key: " + key);
    console.log(directory.get(key) !== null,
        "Value: " + directory.get(key));
}

console.log("---- values() ----");
for (let value of directory.values()) {
    console.log(value !== null, "Value: " + value);
}
console.log("---------");

// ================
console.log("=== Безліччі ===");
console.log("=== Імітація безлічі за допомогою об'єктів ===");

/*
function Set() {
    this.data = {};
    this.length = 0;
}

Set.prototype.has = function (item) {
    return typeof this.data[item] !== "undefined";
};

Set.prototype.add = function (item) {
    if (!this.has(item)) {
        this.data[item] = true;
        this.length++;
    }
};

Set.prototype.remove = function (item) {
    if (this.has(item)) {
        delete this.data[item];
        this.length--;
    }
};

const ninjas = new Set();
ninjas.add("Hattori");
ninjas.add("Hattori");

console.log(ninjas.has("Hattori") && ninjas.length === 1,
    "Our set contains only one Hattori");

ninjas.remove("Hattori");
console.log(!ninjas.has("Hattori") && ninjas.length === 0,
    "Our set is now empty");
*/


// ================
console.log("=== Створення першої безліччі ===");
console.log("=== Створення безліччі ===");

/*
const ninjas = new Set(["Kuma", "Hattori", "Yogyu", "Hattori"]);

console.log(ninjas.has("Hattori"), "Hattori is in our set");
console.log(ninjas.size === 3, "There are only three ninjas in our set!");

console.log(ninjas.has("Yoshi"), "Yoshi is not in, yet...");
ninjas.add("Yoshi");
console.log(ninjas.has("Yoshi"), "Yoshi is added");
console.log(ninjas.size === 4, "There are four ninjas in our set!");

console.log(ninjas.has("Kuma"), "Kuma is already added");
ninjas.add("Kuma");
console.log(ninjas.size === 4, "Adding Kuma again has no effect");

for(let ninja of ninjas) {
    console.log(ninja !== null, ninja);
}*/

// ================
console.log("=== Об'єднання множин ===");
console.log("=== Об'єднання множин з метою злиття елементів колекцій даних ===");

/*
const ninjas = ["Kuma", "Hattori", "Yagyu"];
const samurai = ["Hattori", "Oda", "Tomoe"];

const warriors = new Set([...ninjas, ...samurai]);

console.log(warriors.has("Kuma"), "Kuma is here");
console.log(warriors.has("Hattori"), "And Hattori");
console.log(warriors.has("Yagyu"), "And Yagyu");
console.log(warriors.has("Oda"), "And Oda");
console.log(warriors.has("Tomoe"), "Tamoe, last but not least");

console.log(warriors.size === 5, "There are 5 warriors in total");
*/

// ================
console.log("=== Перетин множин ===");

/*
const ninjas = new Set(["Kuma", "Hattori", "Yagyu"]);
const samurai = new Set(["Hattori", "Oda", "Tomoe"]);

const ninjaSamurais = new Set(
    [...ninjas].filter(ninja => samurai.has(ninja))
);

console.log(ninjaSamurais.size === 1, "There`s only one ninja samurai");
console.log(ninjaSamurais.has("Hattori"), "Hattori is his name");
*/

// ================
console.log("=== Різниця множин ===");

const ninjas = new Set(["Kuma", "Hattori", "Yagyu"]);
const samurai = new Set(["Hattori", "Oda", "Tomoe"]);

const pureNinjas = new Set(
    [...ninjas].filter(ninja => !samurai.has(ninja))
);

console.log(pureNinjas.size === 2, "There's only one ninja samurai");
console.log(pureNinjas.has("Kuma"), "Kuma is a true ninja");
console.log(pureNinjas.has ("Yagyu") , "Yagyu is a true ninja") ;
