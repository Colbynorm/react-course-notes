// //variable notes
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

// //Classes
// class Human {
//         gender = "male";
//     printGender = () => {
//         console.log(this.gender)
//     }
// }

// class Person extends Human{
//         name = "Colby";
//         gender = "Male";
//     }
//     printMyName = () => {
//         console.log(this.name);
// }

// const person  = new Person();
// person.printMyName();
// person.printGender();


// Spread & Rest Operators
// const numbers = [1, 2, 3];
// const newNumbers = [...numbers, 4];
// console.log(newNumbers);

// const person = {
//     name: "Colby"
// };
// const newPerson = {
//     ...person, 
//     age: 25
// };
// console.log(newPerson);

// const filter = (...args) => {
//     return args.filter(el => el === 1);
// }
// console.log(filter(1, 2, 3));

//Destructuring
const numbers =[1, 2, 3];
[num1, ,num3] = numbers;
console.log(num1, num3);

//Reference and Primative types
//primative
const number = 1;
const num2 = number;
console.log(num2);

//reference
const person = {
    name: "Colby"
};
const secondPerson = {
    ...person
}
person.name = "Linnea";
console.log(secondPerson);