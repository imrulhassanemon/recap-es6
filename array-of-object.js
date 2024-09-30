const company = [
    {id: 1, name: "Ollyo", profession: "software", salary: 25000},
    {id: 2, name: "Brain-station", profession: "software", salary: 30000},
    {id: 3, name: "Kaz farm", profession: "software", salary: 20000},
    {id: 4, name: "Cefalo", profession: "software", salary: 20000},

]
// map 
const names = company.map(company => company.name);
console.log(names)
const prices = company.map(salary => salary.salary);
console.log(prices);

// for each
company.forEach(id => console.log(id.id));

// filter 
const mostSalary = company.filter(x  => x.salary > 20000);
console.log(mostSalary);

// find get the first one who is matched the value.

const affordable = company.find(x => x.salary > 20000);
console.log(affordable);




