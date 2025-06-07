// Atqa Munzir - Javascript Developer - Homework Part 3 - LMS Version

let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let hours = [2, 2, 3, 3, 1, 4, 5];
let totalHours = 0;
let exceededHours = 0;

for (let i = 0; i < days.length; i++) {
  totalHours += hours[i];
  if (hours[i] > 2) {
    exceededHours++;
  }
}
console.log('Total hours spent playing games: ' + totalHours);
console.log('Number of times he exceeded the game time limit: ' + exceededHours);