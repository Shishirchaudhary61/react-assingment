class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }
}

class Programmer extends Student {

}

const p1 = new Programmer("Vanja", 90);

console.log(p1.name);
console.log(p1.marks);