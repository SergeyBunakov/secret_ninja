console.log("=== Working with 06-3_promises ===");
const ninjaPromise = new Promise((resolve, reject) => {
    resolve("Hattori");
    // reject("An error resolving a promise!")
});

ninjaPromise.then(ninja => {
    console.log(ninja === "Hattori", "We were 06-3_promises Hattori.");
}, err => {
    fail("There shouldn`t be an error.");
});

// Порядок виконання обіцянок
console.log("=== Порядок виконання обіцянок ===");

console.log("At code start");

const ninjaDelayedPromise = new Promise((resolve, reject) => {
    console.log("ninjaDelayedPromise executor.");
    setTimeout(() => {
        console.log("Resolving ninjaDelayedPromise.");
        resolve("Hattori");
    }, 500);
});

console.log(ninjaDelayedPromise !== null, "After creating ninjaDelayedPromise.");

ninjaDelayedPromise.then(ninja => {
    console.log(ninja === "Hattori", "ninjaDelayedPromise resolve handle with Hattori");
});

const ninjaImmediatePromise = new Promise((resolve, reject) => {
    console.log("ninjaImmediatePromise executor. Immediate resolve.");
    resolve("Yoshi");
});

ninjaImmediatePromise.then(ninja => {
    console.log(ninja !== "Yoshi", "ninjaImmediatePromise resolve handle with Yoshi.");
});

console.log("At code end.");

/*
// Результат виведений до консолі
At code start
ninjaDelayedPromise executor.
true After creating ninjaDelayedPromise.
ninjaImmediatePromise executor. Immediate resolve.
At code end.
true We were 06-3_promises Hattori.
false ninjaImmediatePromise resolve handle with Yoshi.
Resolving ninjaDelayedPromise
true ninjaDelayedPromise resolve handle with Hattori
*/

console.log("=== Відхилення обіцянок ===");

console.log("=== Явне відхилення обіцянок ===");
/*
const promise = new Promise((resolve, reject) => {
    reject("Explicitly reject a promise!");
});
promise.then(() => {
    fail("Happy path, won`t be called!"),
        error => pass("A promise was explicitly rejected!");
});
*/

console.log("=== Виклик методу catch() по ланцюжку ===");
/*
const promise = new Promise((resolve, reject) => {
  reject("Explicitly reject a promise!");
});
promise.then(() => fail("Happy path, won`t be called!"))
    .catch(() => pass("Promise was also reject!"));
*/

console.log("=== Неявне відхилення обіцянок зи допомогою винятків ===");
/*
const promise = new Promise((resolve, reject) => {
    undeclaredVariable++;
});
promise.then(() => fail("Happy path, won`t be called!"))
    .catch(error => ("Third promise was also rejected"));
*/

console.log("=== Створення першої справжньої обіцянки ===");
/*
// для виконання цього прикладу потрібен сервер
// напріклад: https://www.npmjs.com/package/http-server
function getJSON(url) {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.open("GET", url);
        request.onload = function () {
            try {
                if (this.status === 200) {
                    resolve(JSON.parse(this.response));
                } else {
                    reject(this.status + " " + this.statusText);
                }
            } catch (e) {
                reject(e.message);
            }
        };
        request.onerror = function () {
            reject(this.status + " " + this.statusText);
        };
        request.send();
    });
}

getJSON("data/ninja.json").then(ninjas => {
    console.log(ninjas !== null, "Ninjas obtained!");
}).catch(e => fail("Shouldn`t be here" + e));
*/

console.log("=== Зв'язування обіцянок в ланцюжок ===");
console.log("=== Зв'язування обіцянок в ланцюжок за допомогою методів then() ===");
/*
getJSON(data / ninjas.json)
    .then(ninjas => getJSON(ninjas[0].missionsUrl))
    .then(missions => getJSON(missions[0].detailsUrl))
    .then(mission => console.log(mission !== null, "Ninja mission obtained!"))
    .catch(error => fail("An error has occurred"));
*/

console.log("=== Очікування ряду обіцянок ===");
console.log("=== Очікування ряду обіцянок за допомогою метода Promise.all() ===");
/*
Promise.all([getJSON("data/ninjas.json"),
    getJSON("data/mapInfo.json"),
    getJSON("data/plan.json")])
    .then(results => {
        const ninjas = results[0], mapInfo = results[1], plan = results[2];
        console.log(ninjas !== undefined
            && mapInfo !== undefined
            && plan !== undefined,
            "The plan is ready to be set in motion!");
    }).catch(error => {
    fail("A problem in carrying out our plan!");
});
*/

console.log("=== Стан обіцянок за допомогою метода Promise.race() ===");
/*
Promise.race([getJSON("data/youshi.json"),
getJSON("data/hattori.json"),
    getJSON("data/hanso.json")])
    .then(ninja => {
        console.log(ninja !== null, ninja.name + " responded first");
    }).catch(error => fail("Failure!"));
*/

console.log("=== Поєднання генераторів і обіцянок ===");
async(function* () {
    try {
        const ninjas = yield getJSON("data/ninjas.json");
        const missions = yield getJSON(ninjas[0].missionsUrl);
        const missionsDescription = yield getJSON(missions[0].detailsUrl);
        // вивчити опис завдання
    } catch (e) {
        // отримати подробиці завдання не вдалося
    }
});

function async(generator) {
    const iterator = generator();

    function handle(iteratorResult) {
        if (iteratorResult.done) {
            return;
        }
        const iteratorValue = iteratorResult.value;

        if (iteratorValue instanceof Promise) {
            iteratorValue.then(res => handle(iterator.next(res)))
                .catch(err => iterator.throw(err));
        }
    }

    try {
        handle(iterator.next());
    } catch (e) {
        iterator.throw(e);
    }
}
