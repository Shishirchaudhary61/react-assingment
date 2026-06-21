class Vehicle {
    constructor(name) {
        this.name = name;
    }
}

class Bike extends Vehicle {

}

const b1 = new Bike("Yamaha");

console.log(b1.name);