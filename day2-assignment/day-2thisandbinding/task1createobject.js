
const person = {
    name:"shishiir", //using name
    greet:function () {
        console.log("Hello,I am" + this.name);
    }
}

person.greet(); //Output : Hello, I am shishir

person.greet()