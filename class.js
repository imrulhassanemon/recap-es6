const companies = [
    {id:1, name: "sefalo", salary:15000},
    {id:1, name: "amazon", salary:12000},
    {id:1, name: "meta", salary:100000},
    {id:1, name: "google", salary:150000},

]
class company {
    location = "San francisco";
    constructor(name, profession){
        this.name = name;
        this.profession = profession;
    }
    speak(talk){
        console.log(`Talk about ${talk}`)
    }
}

const add = new company("Imrul", "developer")
console.log(add);
// add.speak("data structure and algorithm")

const developer = new company("mark","software developer")
console.log(developer)