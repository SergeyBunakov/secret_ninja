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
console.log("=== Сортування масивів ===");


// ================
