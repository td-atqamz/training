// Atqa Munzir - Javascript Developer - Homework Part 3 - LMS Version

let currentScore = 1858;
const xpInterval = 500;

let pointsIntoCurrentInterval = currentScore % xpInterval;

let pointsNeeded = xpInterval  - pointsIntoCurrentInterval;

console.log("Current Score:", currentScore);
console.log("XP awarded at multiples of:", xpInterval);
console.log("Points past last XP interval:", pointsIntoCurrentInterval);
console.log("Steve needs", pointsNeeded, "scores to collect to get the next XP!");