console.log("=== Вправа 1 ===");
// В якому із вирвзів в двух останніх рядках наведеного нижче фрагменту коду
// можуть бути сгенерорвані виключення при його виконанні, та чому це може статися?
/*
const ninja = {
    get name() {
        return "Akijama";
    }
}
ninja.name();
const name = ninja.name;
*/

// ==============

console.log("=== Вправа 2 ===");
// Який механізм дозволяє методу отримання звернутися до закритої об'єктної змінної
// в наведеному нижче фрагменту коду?

/*
function Samurai() {
    const _weapon = "katana";
    Object.defineProperty(this, "weapon", {
       get: () => _weapon
    });
}
const samurai = new Samurai();
console.log(samurai.weapon === "katana", "A katana wielding samurai");
*/

// ==============

console.log("=== Вправа 3 ===");
// Яке наведене нижче тверджень пройде?
/*
const daimyo = {name: "Matsu", clan: "Takasu"};
const proxy = new Proxy(daimyo, {
    get: (target, key) => {
        if(key === "clan") {
            return "Tokugawa";
        }
    }
});

console.log(daimyo.clan === "Takasu", "Matsu of clan Takasu");
console.log(proxy.clan === "Tokugawa", "Matsu of clan Tokugawa");

proxy.clan = "Tokugawa";
console.log(daimyo.clan === "Takasu", "Matsu of clan Takasu");
console.log(proxy.clan === "Tokugawa", "Matsu of clan Tokugawa");
*/

// ==============

console.log("=== Вправа 4 ===");
// Яке наведене нижче тверджень пройде?

const daimyo = {name: "Matsu", clan: "Takasu", armySize: 10000};
const proxy = new Proxy(daimyo, {
    set: (target, key, value) => {
        if (key === "armySize") {
            const number = Number.parseInt(value);
            if (!Number.isNaN(number)) {
                target[key] = number;
            }
        } else {
            target[key] = value;
        }
    }
});

console.log(daimyo.armySize === 10000, "Matsu has 10000 men at arms");
console.log(proxy.armySize === 10000, "Matsu has 10000 men at arms");

proxy.armySize = "large";
console.log(daimyo.armySize === "large", "Matsu has a large arms");

daimyo.armySize = "large";
console.log(daimyo.armySize === "large", "Matsu has a large arms");
// ==============


