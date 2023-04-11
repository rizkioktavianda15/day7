class Car {
    constructor(make, model){
        this._make = make
        this._model = model
    }

    // getter
    get make(){
        return this._make
    }
    get model(){
        return this._model
    }

    set make(value){
        this._make = value
    }
    set make(value){
        this._make = value
    }
}



let myCar = new Car("Toyota", "Camry")
myCar.make = "Honda"
console.log(myCar.make)
console.log(myCar.model)