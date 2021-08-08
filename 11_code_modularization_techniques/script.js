console.log("=== Методики модуляризиції коду ===");
console.log("=== Code modularization techniques ===");

// =====================
console.log("=== Функції в якості модулів ===");

/*
(function countClicks() {
    let numClicks = 0;
    document.addEventListener('click', () => {
    alert (++numClicks);
    console.log(++numClicks);
    });
}) ();
*/

// =====================
console.log("=== Проектний шаблон Модуль ===");

/*
const MouseCounterModule = function () {
    let numClick = 0;
    const handleClick = () => {
        alert(++numClick);
    };

    return {
        countClicks: () => {
            document.addEventListener("click", handleClick);
        }
    };
} ();

console.log(typeof MouseCounterModule.countClicks === "function",
    "We can access module functionality");
console.log(typeof MouseCounterModule.countClicks === "undefined"
&& typeof MouseCounterModule === "undefined",
    "We can not access internal module details");
*/

// =====================
console.log("=== Розширення модулів ===");

/*
const MouseCounterModule = function () {
    let numClick = 0;
    const handleClick = () => {
        alert(++numClick);
    }
    return {
        countClicks: () => {
            document.addEventListener("click", handleClick);
        }
    };
}();

(function(module){
    let numScrolls = 0;
    const handleScrolls = () => {
        alert(++numScrolls);
    }
    module.countScrolls = () => {
        document.addEventListener("wheel", handleScrolls);
    }
})(MouseCounterModule);

console.log(typeof MouseCounterModule.countClicks === "function",
    "We can initial access module functionality");
console.log(typeof MouseCounterModule.countScrolls === "function",
    "We access augmented module functionality");
*/

// =====================
console.log("=== Модуляризація по стандартам AMD та CommonJS ===");

// =====================
console.log("=== Визначення модуля з залежністю від бібліотеки jQuery по стандарту AMD ===");
/*
define("MouseCounterModule", ['jQuery'], $ => {
    let numClick = 0;
    const handleClick = () => {
        alert(++numClick);
    };
    return {
        countClick: () => {
            $(document).on("click", handleClick);
        }
    };
});
*/

// =====================
console.log("=== Визначення модуля по стандарту CommonJS ===");

// MouseCounterModule.js
const $ = require("jQuery");
let numClick = 0;
const handleClick = () => {
    alert(++numClick);
};

module.exports = {
    countClicks: () => {
        $(document).on("click", handleClick);
    }
};