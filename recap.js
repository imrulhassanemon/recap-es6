// 1. var let const 
// 2. default parameter
// 3. template string 
// 4. arrow function 
// 5. destructuring and spread operator
// 6. Object.keys Object.values Object.entries
// 7. for of loop (It's will be use for array string)
// 8. for in loop use in object 




const salary = "250k";
const profession  = "programmer";
const person = {
    name: "Peter",
    age: 24
}

const msg = `Hi, I am ${person.name}. I am ${person.age}. I am a ${profession}. My salary is ${salary} `
console.log(msg)


// arrow function 

const squre = x => x * x;
const sum = (x, y) => x + y;
console.log(sum(3, 4))
console.log(squre(5))


