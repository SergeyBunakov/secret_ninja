console.log("=== Simulating array method ===");

const elems = {
    length: 0,
    add: function (elem) {
        Array.prototype.push.call(this, elem);
    },
    gather: function (id) {
        this.add(document.getElementById(id));
    },
    find: function (callback) {
        return Array.prototype.find.call(this, callback);
    },
};

elems.gather("first");
console.log(elems.length === 1 && elems[0].nodeType,
    "Verify that we have an element in our stash"
);

elems.gather("second");
console.log(elems.length === 2 && elems[1].nodeType,
    "Verify the other insertion"
);

elems.find(elems => elems.id === "second");
console.log(find && find.id === "second",
    "We`ve found our element"
);
// 1 "Verify that we have an element in our stash"
// 1 "Verify the other insertion"
// false "We`ve found our element"

console.log("=== Відображення значень на вузли HTML-документа за допомогою об'єктів ===");

/*
const firstElement = document.getElementById("firstElement");
const secondElement = document.getElementById("second");

const map = {};

map[firstElement] = {data: "firstElement"};
console.log(map[firstElement].data === "firstElement",
    "The first element is correctly mapped");

map[secondElement] = {data: "secondElement"};
console.log(map[secondElement].data === "secondElement",
    "The second element is correctly mapped");

console.log(map[firstElement].data === "firstElement",
    "But now the first element is overriden ???");
// true "The first element is correctly mapped"
// simulating_array.js:46 true "The second element is correctly mapped"
// simulating_array.js:49 true "But now the first element is overriden ???"
*/

