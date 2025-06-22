// Atqa Munzir - Javascript Developer - Homework Part 3 - LMS Version

// Task 1
console.log("Task 1");
let testPlayerX = [ 10, -10, 0  ];
let testPlayerY = [ 10, -10, 0  ];

for (let i = 0; i < testPlayerX.length; i++)
{
    let playerX = testPlayerX[i];
    let playerY = testPlayerY[i];
    if (playerX == 0 && playerY == 0)
    {
        console.log("Player is in the middle");
    }
    else if (playerX > 0 && playerY > 0)
    {
        console.log("Player is on the top right");
    }
    else if (playerX < 0 && playerY < 0)
    {
        console.log("Player is at the bottom left");
    }
    else if (playerX > 0 && playerY < 0)
    {
        console.log("Player is at the bottom right");
    }
}

console.log("\n\n\n");
// Task 2
console.log("Task 2");

let testLife = [ 10, 0, 3 ];
let testTime = [ 10, 0, 10 ];

for (let i = 0; i < testLife.length; i++)
{
    let life = testLife[i];
    let time = testTime[i];
    if (life <= 0 || time <= 0)
    {
        console.log("Game Over");
    }
    else
    {
        console.log("Game On");
    }
}

