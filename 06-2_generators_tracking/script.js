console.log("=== Generator Tracking. ===");
function* ninjaGenerator(action) {
    yield "Hattori " + action;
    yield "Toyota " + action;
    return "Yoshi " + action;
}
const ninjaIterator = ninjaGenerator("skulk");
const result1 = ninjaIterator.next();
const result2 = ninjaIterator.next();
const result3 = ninjaIterator.next();
const result4 = ninjaIterator.next();

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);

/*
// результат роботи генератора
{ value: 'Hattori skulk', done: false }
{ value: 'Toyota skulk', done: false }
{ value: 'Yoshi skulk', done: true }
{ value: undefined, done: true }
*/