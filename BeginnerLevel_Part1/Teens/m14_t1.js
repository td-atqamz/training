// Atqa Munzir - Javascript Developer - Homework Part 3 - LMS Version

var numbers = [ 111, 11, 1, 111, 1111, 11, 11, 111, 1, 111 ];

function findNumberLocation(numbers) {
    for (i=0; i < numbers.length; i++) {
        if (numbers[i] === 1111) {
            return i;
        }
    }
}

var numLocation = findNumberLocation(numbers);
console.log(`1111 is located at index ${numLocation}`);