// map ==> loops through each element of the array and do the operation that you passed in the call back function and hold the result from each operation in an array and finally returns you the array

const numbers = [4, 5, 2, 8];

const double2 = (x) => x * 3;

function doubleIt(num) {
  console.log("number now", num);
  return num * 3;
}

const number = numbers.map(doubleIt);
console.log(number);
const output = numbers.map(double2);
console.log(output);

// const doubled = [];

// for(const num of numbers){
//     const double = num * 2;
//     doubled.push(double);
// }
// console.log(doubled)

const output2 = numbers.map((n) => n * 2);
console.log(output2)
