// Atqa Munzir - Javascript Developer - Homework Part 3 - LMS Version

let random = Math.floor(Math.random() * 10);
let adjectives = ["pretty", "beautiful", "lovely", "ugly", "stupid", "smart", "fat", "thin", "tall", "short"];
let nouns = ["cat", "dog", "bird", "fish", "horse", "cow", "pig", "sheep", "goat", "chicken"];
let symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
let newUsername;

function generate(option) {
    if (option == 1) {
        newUsername = adjectives[random] + nouns[random];
        console.log(newUsername);
    } else if (option == 2) {
        newPassword = adjectives[random].toUpperCase() + nouns[random] + Math.floor(Math.random() * 10) + symbols[random];
        console.log(newPassword);
    } else {
        console.log("Invalid option");
    }
}

let userOption;
do {
    userOption = prompt("1. Generate Username or 2. Generate Password\n");
    generate(userOption);
} while (userOption != 1 && userOption != 2);