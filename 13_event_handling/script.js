let greeting = "hello \u{1F310}";
console.log(greeting);

console.log("=== Особлівості обробки подій ===");


// ========
console.log("=== Тривало виконуються завдання. ===");
/*
const tbody = document.querySelector('tbody');
for( let i = 0; i < 20000; i++) {
    const tr = document.createElement("tr");
    for(let t =0; t < 6; t++) {
        const td = document.createElement("td");
        td.appendChild(document.createTextNode(i + ",  " + t));
        tr.appendChild(td);
    }
    tbody.appendChild(tr);
}
*/

// ========
console.log("=== Переривання довго виконується завдання за допомогою таймера ===");

/*
const rowCount = 20000;
const divideInto = 4;
const chunkSize = rowCount / divideInto;

let iteration = 0;

const table = document.getElementsByTagName("tbody")[0];

setTimeout(function generateRows() {
    const base = chunkSize * iteration;

    for (let i = 0; i < chunkSize; i++) {
        const tr = document.createElement("tr");

        for (let t = 0; t < 6; t++) {
            const td = document.createElement("td");
            td.appendChild(
                document.createTextNode((i + base) + ", " + t + ", " + iteration));
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    iteration++;

    if (iteration < divideInto)
        setTimeout(generateRows, 0);
}, 0);
*/

// ========
console.log("=== Обробка подій ===");
console.log("=== Реєстрайія обробників подій ===");

/*
const myButton = document.getElementById("myButton");

myButton.addEventListener("click", function myHandler(event) {
    console.log(event.target === myButton, "The target of the event is also mYButton");
    console.log(this === myButton, "The handler is registered on myButton");
});
// true "The target of the event is also mYButton"
// true "The handler is registered on myButton"
*/

// ========
console.log("=== Вкладені елементи і обробники подій ===");

/*
const outerContainer = document.getElementById("outerContainer");
const innerContainer = document.getElementById("innerContainer");

outerContainer.addEventListener("click", () => {
    console.log("Outer container click");
});

innerContainer.addEventListener("click", () => {
    console.log("inner container click");
});

document.addEventListener("click", () => {
    console.log("Document click");
});
*/

// ========
console.log("=== Перехоплення в порівнянні зі спливанням ===");

/*
const outerContainer = document.getElementById("outerContainer");
const innerContainer = document.getElementById("innerContainer");

document.addEventListener("click", () => {
    console.log("Document click");
});
// Якщо не вказати третій аргумент,
// то за замовчуванням активується вспливання подій

outerContainer.addEventListener("click", () => {
    console.log("Outer container click");
}, true);
// Якщо вказати логічне значення true, в якості третього аргументу,
// то активується перехват подій

innerContainer.addEventListener("click", () => {
    console.log("inner container click");
}, false);
// Якщо вказати логічне значення false, в якості третього аргументу,
// то активується вспливання подій

// Outer container click
// inner container click
// Document click
*/

// ========
console.log("=== Відмінності посилань this та event.target в обробниках подій ===");

/*
const outerContainer = document.getElementById("outerContainer");
const innerContainer = document.getElementById("innerContainer");

innerContainer.addEventListener("click", function (event) {
    console.log("innerContainer handler");
    console.log(this === innerContainer, "This refers to the innerContainer");
    console.log(event.target === innerContainer, "event.target refers to the innerContainer")
});
// Обидва посилання this та event.target вказують на елемент innerContainer
// в обрробнику подій саме цього елемента

outerContainer.addEventListener("click", function (event) {
    console.log("outerContainer handler");
    console.log(this === outerContainer, "This refers to the outerContainer");
    console.log(event.target === innerContainer, "event.target refers to the innerContainer")
});
// Якщо обробник подій в елементі outerContainer обробляється повідомлення,
// яке винекло в елементі innerContainer,
// то посилання this буде вказувати на елемент outerCounter,
// а посилання event.target - на елемент innerCounter
*/

// ========
console.log("=== Делегування обробки подій батьківському елементу ===");

/*
const cells = document.querySelectorAll('td');
for (let n = 0; n < cells.length; n++) {
    cells[n].addEventListener("click", function () {
        this.style.backgroundColor = 'yellow';
    });
}

// але краще втановити єдиний обробник подій

const table = document.getElementById("someTable");
table.addEventListener("click", function (event) {
    if (event.target.tagName.toLowerCase() === "td")
        event.target.style.backgroundColor = "yellow";
});
*/

// ========
console.log("=== Спеціальні події ===");
console.log("=== Приклад обробки Ajax-запитів ===");

/*document.addEventListener("ajax-start", e => {
    document.getElementById("whirlyThing").style.display = "inline-block";
});
document.addEventListener("ajax-complete", e => {
    document.getElementById('whrilyThing').style.display = "none";
});
// На жаль, ці події насправді не існують. Але нам нічого не заважає їх створити.

console.log("=== Інюцювання спеціальних подій ===");
console.log("=== Застосування специальних подій ===");

function triggerEvent(target, eventType, eventDetail) {
    const event = new CustomEvent(eventType, {
        detail: eventDetail
    });
    target.dispatchEvent(event);
}

function performAjaxOperation() {
    triggerEvent(document, 'ajax-start', {url: 'my-url'});
    setTimeout(() => {
        triggerEvent(document, "ajax-complete");
    }, 5000);
}

const button = document.getElementById("clickMe");

button.addEventListener("click", () => {
    performAjaxOperation();
});

document.addEventListener("ajax-start", e => {
    document.getElementById("whirlyThing").style.display = "inline-block";
    console.log(e.detail.url === 'my-url', "We can pass in event data");
});

document.addEventListener("ajax-complete", e => {
    document.getElementById("whirlyThing").style.display = "none";
});
*/


// ========
console.log("=== Вправа-3 ===");
/*
setTimeout(function () {
    console.log("Timeout ");
}, 1000);

setInterval(function () {
    console.log(" Interval ");
}, 500);
*/

// ========
console.log("=== Вправа-4 ===");
/*
const timeoutid = setTimeout(function () {
    console.log("Timeout ");
}, 1000);

setInterval(function () {
    console.log(" Interval ");
}, 500);
*/

// ========
console.log("=== Вправа-5 ===");
/*
const innerElement = document.querySelector("#inner");
const outerElement = document.querySelector("#outer");
const bodyElement = document.querySelector("body");

innerElement.addEventListener("click", function () {
    console.log("Inner");
});

outerElement.addEventListener("click", function () {
    console.log("Outer");
}, true);

bodyElement.addEventListener("click", function () {
    console.log("Body");
});
*/


