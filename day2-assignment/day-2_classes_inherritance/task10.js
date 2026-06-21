class Animal {
    speak() {
        console.log("Animal makes sound");
    }
}

class Dog extends Animal {
    speak() {
        console.log("Dog barks");
    }
}

class Cat extends Animal {
    speak() {
        console.log("Cat meows");
    }
}

class Cow extends Animal {
    speak() {
        console.log("Cow moos");
    }
}

const d1 = new Dog();
const c1 = new Cat();
const cow1 = new Cow();

d1.speak();
c1.speak();
cow1.speak();