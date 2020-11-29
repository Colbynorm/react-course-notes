//variable notes
const myName = "Colby";
console.log(myName);

let myNewName = "Linnea";
console.log(myNewName);

//arrow functions
function printMyName(name, age) {
    console.log(name, age);
}
printMyName('Colby', 25);

const multiply = number => number * 2;
console.log(multiply(2));

//Classes
class Human {
    constructor() {
        this.gender = "male";
    }
    printGender() {
        console.log(this.gender)
    }
}

class Person extends Human{
    constructor() {
        super();
        this.name = "Colby";
    }
    printMyName() {
        console.log(this.name);
    }
}

const person  = new Person();
person.printMyName();
person.printGender();