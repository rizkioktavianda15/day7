class Car{
    constructor(make,model) {
        this.make = make
        this.model = model
    }

    getInfo(){
        return `The Car is a ${this.make} ${this.model}`
    }
}
// object

let myCar = new Car("Toyota", "Camry")
let yourCar = new Car ("Toyota", "Alphard")
console.log(myCar.getInfo())
console.log(yourCar.getInfo())