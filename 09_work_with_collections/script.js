console.log("=== Робота з колекціями ===");
console.log("=== Створення масивів ===");
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
