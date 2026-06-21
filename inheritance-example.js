

class Vehicles{
    constructor(name){
        this.name = name
    }
    move(){
        console.log("vehicle ${this.name} can move")
    }
}

//inheritance vehicle class
class Car extends Vehicles{
    constructor(name,colour){
        //providing value to the parent constructure
        super(name)
        this.colour = colour
    }
    start(){
        console.log("car color is: ${this.name} has started")
    }
}
let forObj = new Car ("ford v!", "yellow")
forObj.move()
forObj.start()
// forObj.display()