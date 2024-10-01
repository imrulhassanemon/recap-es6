// divisible by 10 using Array.filter 

const array = [33, 50, 79, 78, 90, 101, 30];

const divisible = array.filter((x)=> {
    const divid = x % 10 === 0;
    return divid;
})
console.log(divisible)
