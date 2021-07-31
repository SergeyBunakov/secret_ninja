console.log("=== Впарви до глави-6 'Генератори та обіцянки' ===");
console.log("=== Вправа 1 ===");
// Які значення набудуть змінні a1-a4 після виконання наведеного нжче коду?
/*
function* EvenGenerator() {
    let num = 2;
    while (true) {
        yield num;
        num = num + 2;
    }
}

let generator = EvenGenerator();

let a1 = generator.next().value;
let a2 = generator.next().value;
let a3 = EvenGenerator().next().value;
let a4 = generator.next().value;

console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
*/

console.log("=== Вправа 2 ===");
// Яким стане вміст масиву ninjas після виконання наступного фрагменту коду?
// Як організувати цикл for of за допомогою циклу while?
/*
function* NinjaGenerator() {
    yield "Hattori";
    return "Yoshi";
    yield "Hanzo";
}

let ninjas = [];
for (let ninja of NinjaGenerator()) {
    ninjas.push(ninja);
}

// ninjas;
console.log(ninjas);
*/

console.log("=== Вправа 3 ===");
// Яких значень набудуть змінні a1-a2 після виконання наведеного нижче коду?
/*
function* Gen(val) {
    val = yield val * 2;
    yield val;
}

let generator = Gen(2);
let a1 = generator.next(3).value;
let a2 = generator.next(5).value;

console.log(a1);
console.log(a2);
*/

console.log("=== Вправа 4 ===");
// Яким буде рузультат виконання наведеного нижче фрагменту коду?
/*
const promise = new Promise((resolve, reject) => {
    reject("Hattori");
});

promise.then(val => console.log("Success: " + val))
    .catch(e => console.log("Error " + e));
*/

console.log("=== Вправа 5 ===");
// Яким буде рузультат виконання наведеного нижче фрагменту коду?
/*
const promise = new Promise((resolve, reject) => {
    resolve("Hattori");
    setTimeout(() => reject("Yoshi"), 500);
});

promise.then(val => console.log("Seccess: " + val))
    .catch(e => console.log("Error: " + e));
*/


