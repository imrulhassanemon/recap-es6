const instructor = [
   { name: "lota", age: 24, position: "senior"},
   { name: "mongolkar", age: 24, position: "junior"},
   { name: "jolil", age: 24, position: "senior"}
]
const fil = instructor.filter((x)=> {
    const sen = x.position === "senior";
    return sen
})

console.log(fil)