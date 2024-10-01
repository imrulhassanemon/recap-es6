const number = [1, 3, 5, 7, 9];

const map = number.map((x) => {
  const plus = x + 1;
  return plus
 
});
console.log(map)

const arr = [];

for(let i = 0; i < number.length; i++){
    let get  = number[i] + 1;
    arr.push(get)
}
console.log(arr)