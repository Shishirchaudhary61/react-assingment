class Vehicle {
    constructor(name) {
        this.name = name;
    }

    drive() {
        console.log(this.name + " is driving");
    }
}

const v1 = new Vehicle("Truck");

v1.drive();