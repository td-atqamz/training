// Atqa Munzir - Javascript Developer - Homework Part 3 - LMS Version

for (var i = 0; i < 10; i++)
{
    var score = Math.floor(Math.random() * 200) + 1;
    console.log(`Score is ${score} with level ${score > 100 ? 2 : 1}`);
}