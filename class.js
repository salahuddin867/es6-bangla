class Parent {
    constructor() {
        this.father = "Jabbar";
    }
}
class Child extends Parent {
    constructor(name) {
        super(); // inheritance
        this.name = name;
    }
    getFullName() {
        return this.name + ' ' + this.father
    }
}


const baby = new Child("Salah Uddin");
console.log(baby.getFullName());

