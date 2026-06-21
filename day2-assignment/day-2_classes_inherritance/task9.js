class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    info() {
        console.log(this.name + " scored " + this.marks);
    }
}

class Programmer extends Student {
    constructor(name, marks, language) {
        super(name, marks);

        this.language = language;
    }

    showLanguage() {
        super.info();

        console.log("Language: " + this.language);
    }
}

const p1 = new Programmer("Vanja", 95, "JavaScript");

p1.showLanguage();