export class Person {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log("Hi, I am " + this.name);
    }
}