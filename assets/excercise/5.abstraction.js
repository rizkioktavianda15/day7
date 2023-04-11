class Car {
    #make
    #model

    constructor(make, model){
        this.#make = make
        this.#model = model
    }

    // getter
    get make(){
        return this.#make
    }
    get model(){
        return this.#model
    }
}

let myCar = new Car("Toyota", "Camry")
myCar = "honda"
console.log(myCar.make)