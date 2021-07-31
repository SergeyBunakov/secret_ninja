console.log(" === Generators functions. === ");

console.log(" === Generator id. === ");

function* idGenerator() {
    let id = 0;
    while (true) {
        yield ++id;
    }
}

const idIterator = idGenerator();

const ninja1 = {id: idIterator.next().value};
const ninja2 = {id: idIterator.next().value};
const ninja3 = {id: idIterator.next().value};
const ninja4 = {id: idIterator.next().value};

console.log(ninja1.id === 1, "First ninja has id = 1");
console.log(ninja2.id === 2, "Second ninja has id = 2");
console.log(ninja3.id === 3, "Third ninja has id = 3");
console.log(ninja4.id === 3, "Fourth ninja has id = 4");

console.log("=== Рекурсивний обхід моделі DOM ===");

function traverseDOM(element, callback) {
    callback(element);
    element = element.firstElementChild;
    while (element) {
        traverseDOM(element, callback);
        element = element.nextElementSibling;
    }
}

const subTreeRecursive = document.getElementById("subTree");
traverseDOM(subTreeRecursive, function (element) {
    console.log(element !== null, element.nodeName);
});
/*
// результат виведений до консолі:
true "DIV"
true "FORM"
true "INPUT"
true "P"
true "SPAN"
*/

console.log("=== Обхід моделі DOM за допомогою генераторів ===")

function* DomTraversal(element) {
    yield element;
    element = element.firstElementChild;
    while (element) {
        yield* DomTraversal(element);  // звернути увагу на yield* зі знаком *
        element = element.nextElementSibling;
    }
}

const subTreeGenerator = document.getElementById("subTree");
for (let element of DomTraversal(subTreeGenerator)) {
    console.log(element !== null, element.nodeName);
}
/*
// результат виведений до консолі:
true "DIV"
true "FORM"
true "INPUT"
true "P"
true "SPAN"
*/

console.log("=== Відправка та отримання даних із генератора ===");

function* NinjaGenerator1(action) {
    const imposter = yield ("Hattori " + action);

    console.log(imposter === "Hanzo", "The generator has been infiltrated");
    yield ("Yoshi (" + imposter + ") " + action);
}

const ninjaIterator1 = NinjaGenerator1("skulk");

const result_1_1 = ninjaIterator1.next();
console.log(result_1_1.value === "Hattori skulk", "Hottori is skulking");

const result_1_2 = ninjaIterator1.next("Hanzo");
console.log(result_1_2.value = "Yoshi (Hanzo) skulk", "We have an imposter");
/*
// результат виведений до консолі:
true "Hottori is skulking"
false "The generator has been infiltrated"
Yoshi (Hanzo) skulk We have an imposter
*/

console.log("=== Генерування виключень в генераторі ===");

function* NinjaGenerator2() {
    try {
        yield "Hattori";
        fail("The expected exception didn`t occur");
    } catch (e) {
        console.log(e === "Catch this!", "Aha! We caught an exception");
    }
}

const ninjaIterator2 = NinjaGenerator2();
const result2 = ninjaIterator2.next();
console.log(result2.value === "Hattori", "We got Hattori");

ninjaIterator2.throw("Catch throw");
/*
// результат виведення до консолі
true "We got Hattori"
false "Aha! We caught an exception"
*/