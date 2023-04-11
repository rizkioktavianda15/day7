class Car {
    constructor(make, model){
        this.make = make 
        this.model = model
    }

    getInfo(){
        return `The car Is a ${this.make} ${this.model}`
    }
}

class ElecticCar extends Car {
    constructor(make, model, batteryCapacity){
        super(make, model)
        this.batteryCapacity = batteryCapacity
    }

    getInfo(){
        return `${super.getInfo()} it has a battery capacity of ${this.batteryCapacity}`
    }
}

let myElectricCar = new ElecticCar("Tesla", "Model-A", 1200)

console.log(myElectricCar.getInfo())