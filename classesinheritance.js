//class and object (instance of class)
// students {ram,hari}
//properties =>variable , feature=> method/function 

class Car {
    // constructure: initial setup for the class
    constructor(brand, color, noofwheel, price, name) {
        this.brand = "ford";
        this.colour = colour;
        this.noofwheel = 4;
        this.price = price;
        this.name = name;
    }
    //feature /method
    // horn method => the car,[name],sound peep peep.its price is [price] and has [colour] colour.
    start() {
        console.log("${this.name}has started")
    }
    
    horn(){
        console.log("The car ,forobj.name ")
        forobj
    }
}




// creating instance or object of car
let forobj = new Car("ford", "red", 4, "6000000", "ford T5")
console.log("ford car brand:", forobj.name)
fordObj.start()


let bydobj = new Car("Byd", "black", 4, "9000000", "ford T5")
console.log("Byd car name:", forobj.name)
bydobj.start()
