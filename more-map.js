const numbers = [2, 3, 6, 5, 7];

const doubled = numbers.map((n) => n * 2);
console.log(doubled);

// add 5
const addfive = numbers.map((x) => x + 5);
console.log(addfive);

// squre

const squre = numbers.map((x) => x * x);
console.log(squre);

// half

const half = numbers.map((x) => x / 2);
console.log(half)


const friends = ["tom", "mike", "jack", "jhon", "imrul hassan"]
const length = friends.map((fnd) => fnd.length);
console.log(length)

const firstLetter = friends.map((fnd) => fnd[0]);
console.log(firstLetter)