// data access 

const data = [{id:1, name: "jack", profession: "programmer", address: "san francisco"}]


console.log(data[0].address)

const company = {
    count: 5000,
    data: [
        {id:1, name: "google", salary: 200000, branch: "san diego"}, 
        {id:1, name: "netflix", salary: 100000, branch: "wasington"}
    ]
}

console.log(company.data[1].salary);


const user = {
    id: 5001,
    name: "modon das",

    address:{
        street: {
        first: "233/4",
        second: "nondodas goli",
        third: "vojohori"
    },
    city: "dhaka",

}
}

console.log(user.address.street.second)