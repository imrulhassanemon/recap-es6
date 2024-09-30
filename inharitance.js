
class Vehicle {
    constructor (name, price){
        this.name = name;
        this.price = price;
    }
    
    move(move){
        console.log(`the car is so ${move}`)
    }
}

class bus extends Vehicle(){
    constructor(name, price, tiket, seat){
        super(name, price)
        this.tiket = tiket;
        this.seat = seat;
    }
}



// const buss = new bus("sakura", 200000, 3000, 20)
