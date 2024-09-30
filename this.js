class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    sleep(){
        console.log(`Sleeping now ${this.name}`)
    }
}

const name = new Person("sundar", 52);
console.log(name);
name.sleep()
const name2 = new Person("Manik Mia", 28);
console.log(name2);
name2.sleep()

const arr = [{a : 31, b:23}, {a: 21 , b: 37}, {a : 43}, {b: 27}, {a : 13}, {b: 37}, {a : 13}, {b: 57}, {a : 23}, {b: 17} ]
console.table(arr)