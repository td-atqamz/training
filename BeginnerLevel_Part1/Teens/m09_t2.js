// Atqa Munzir - Javascript Developer - Homework Part 3 - LMS Version

// Keyword Project
console.log("Keyword Project");
const password1 = "TimedoorKeyword"; 
let input1 = prompt("Enter password\t\t: "); 

while (input1 !== password1) {
    input1 = prompt("Wrong password. \nPlease try again\t: "); 
} 

alert("You have successfully logged in!");

console.log("\n\n\n");
// Task 1
console.log("Task 1");
const password2 = "TimedoorTask1"; 
let input2 = prompt("Enter password\t\t: "); 

do {
  input2 = prompt("Wrong password. \nPlease try again\t: ");
} while (input2 !== password2)

alert("You have successfully logged in!");

console.log("\n\n\n");
// Task 2
console.log("Task 2");
let randomNumber;
let expectedNumber = 5;

do {
    randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log(randomNumber);
} while (randomNumber !== expectedNumber);

console.log("The random number is: " + randomNumber);