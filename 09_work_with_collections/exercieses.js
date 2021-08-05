console.log("-----------------");
console.log("=== Вправа 1. Яким виявиться склад масиву samurai після виконання наступного фрагменту коду? ===");

/*
const samurai = ["Oda", "Tomoe"];
samurai[3] = "Hattori";
*/

console.log("-----------------");
console.log("=== Вправа 2. Яким виявиться склад масиву ninjas після виконання наступного фрагменту коду? ===");

/*
const ninjas = [];
ninjas.push("Yoshi") ;
ninjas.unshift ("Hattori") ;
ninjas.length = 3;
ninjas.pop() ;
*/

console.log("-----------------");
console.log("=== Вправа 3. Яким виявиться склад масиву samurai після виконання наступного фрагменту коду? ===");

/*
const samurai = [];
samurai.push("Oda") ;
samurai.unshift("Tomoe") ;
samurai.splice(1, 0, "Hattori", "Takeda") ;
samurai.pop();
*/

console.log("-----------------");
console.log("=== Вправа 4. Що залишитться в зінних first, second та third після виконання наступного фрагменту коду? ===");

/*
const ninjas = [
    {name: "Yoshi", age: 18},
    {name: "Hattori", age: 19},
    {name: "Yagyu", age: 20}
];
const first = ninjas.map(ninja => ninja.age);
const second = first.filter(age => age % 2 == 0);
const third = first.reduce((aggregate, item) => aggregate + item, 0);
*/

console.log("-----------------");
console.log("=== Вправа 5. Що залишитться в зінних first та second після виконання наступного фрагменту коду? ===");

/*
const ninjas = [
    {name: "Yoshi", age: 18},
    {name: "Hattori", age: 19},
    {name: "Yagyu", age: 20}
];
const first = ninjas.some(ninja => ninja.age % 2 == 0);
const second = ninjas.every(ninja => ninja.age % 2 == 0);
*/

console.log("-----------------");
console.log("=== Вправа 6. Які з наведених нижче тверджень пройдуть? ===");

/*
const samuraiClanMap = new Map();

const samurai1 = {name: "Toyotomi"};
const samurai2 = {name: "Takeda"};
const samurai3 = {name: "Akiyama"};

const oda = {clan: "Oda"};
const tokugawa = {clan: "Tokugawa"};
const takeda = {clan: "Takeda"};

samuraiClanMap.set(samurai1, oda);
samuraiClanMap.set(samurai2, tokugawa);
samuraiClanMap.set(samurai2, takeda);

console.log(samuraiClanMap.size === 3, "There are three mappings ");
console.log(samuraiClanMap.has(samurail), "The first samurai has a mapping");
console.log(samuraiClanMap.has(samurai3), "The third samurai has a mapping");
*/

console.log("-----------------");
console.log("=== Вправа 7. Які з наведених нижче тверджень пройдуть? ===");

const samurai = new Set("Toyotomi", "Takeda", "Akiyama", "Akiyama");

console.log(samurai.size === 4, "There are four samurai in the set");

samurai.add("Akiyama");
console.log(samurai.size === 5, "There are five samurai in the set");

console.log(samurai.has("Toyotomi", "Toyotomi is in!"));
console.log(samurai.has("Hattori", "Hattori is in'"));

console.log("-----------------");
