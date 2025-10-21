// ==== Task 1 ====
console.log("Liberna");

// ==== Task 2 ====
let name = "Alina";
let age = 17;

console.log(`Name: ${name}`);
console.log(`Age: ${age}`);

age = name;

console.log(`Name: ${name}`);
console.log(`Age: ${age}`);

// ==== Task 3 ====
let firstName = "Alina";
let surname = "Liberna";
let group = "P-34";
let byear = 2008;
let isStudent = true;

console.log(`Name: ${firstName}`, typeof firstName);
console.log(`Surname: ${surname}`, typeof surname);
console.log(`Group: ${group}`, typeof group);
console.log(`Year: ${byear}`, typeof byear);
console.log(`Student? ${isStudent}`, typeof isStudent);

console.log(`Year: ${byear}`, typeof byear);
console.log(`Student? ${isStudent}`, typeof isStudent);
console.log(`Name: ${firstName}`, typeof firstName);
console.log(`Surname: ${surname}`, typeof surname);
console.log(`Group: ${group}`, typeof group);

// ==== Task 4 ====
let student ={
    fullName: "Liberna Alina",
    age: 17,
    isStudent: true,
};

console.log(`Name: ${student.fullName}`);
console.log(`Age: ${student.age}`);
console.log(`Student: ${student.isStudent}`);

// ==== Task 5 ====
const currentYear = 2025;
let userBYear = prompt("Enter your birth year: ");
let userAge = currentYear - userBYear;

alert(`You are approximately ${userAge} y.o.`)

// ==== Task 6 ====
let isAdult = confirm("Are you 18 y.o.?");
console.log(`Is adult: ${isAdult}`);

// ==== Task 7 ====
let login = prompt("Enter your login:");
let email = prompt("Enter your email:");
let password = prompt("Enter your password:");

alert(`Dear ${login}, your email is ${email}, your password is ${password}.`);