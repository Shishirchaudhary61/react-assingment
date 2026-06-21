class Vehicle {
    constructor(name) {
        this.name = name;
    }

    drive() {
        console.log("Vehicle is driving");
    }
}

class Bike extends Vehicle {
    drive() {
        console.log(this.name + " bike is racing");
    }
}

const b1 = new Bike("Honda");

b1.drive();