class vehicle {
    drive() {
        return "The vehicle is driving"
    }
}

class Car extends vehicle {
    drive(){
        return "the Car is Driving"
    }
}

class ElecticCar extends vehicle {
    drive() {
        return "The Electric Car is Driving silently"
    }
}

let myVehicle = new vehicle()
let myCar = new Car()
let myElectricCar = new ElecticCar()

console.log(myVehicle.drive())
console.log(myCar.drive())
console.log(myElectricCar.drive())