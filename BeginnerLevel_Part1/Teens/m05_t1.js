// Atqa Munzir - Javascript Developer - Homework Part 3 - LMS Version

// Task 1
console.log("Task 1");
let testNumbers = [ -40, 50, 0 ];

for (let i = 0; i < testNumbers.length; i++)
{
    if (testNumbers[i] ==  0)
    {
        console.log("Not positive or negative");
    } 
    else if (testNumbers[i] >  0)
    {
        console.log("Positive");
    }
    else
    {
        console.log("Negative");
    }
}

console.log("\n\n\n");
// Task 2
console.log("Task 2");
let testAge = [ 8, 17, 20 ];

for (let i = 0; i < testAge.length; i++)
{
    if (testAge[i] >=  17)
    {
        console.log("Eligible");
    } 
    else
    {
        console.log("Not Eligible");
    }
}

console.log("\n\n\n");
// Task 3
console.log("Task 3");
let testScore = [ 95, 76, 60, 30 ];

for (let i = 0; i < testScore.length; i++)
{
    if (testScore[i] >=  90)
    {
        console.log("Grade A");
    } 
    else if (testScore[i] >=  75)
    {
        console.log("Grade B");
    } 
    else if (testScore[i] >=  60)
    {
        console.log("Grade C");
    }
    else 
    {
        console.log("Grade D");
    }
}

console.log("\n\n\n");
// Task 4
console.log("Task 4");
let testTotalPaymentList = [ 200000, 100000, 25000 ];
let testIsMemberList = [ true, false, true ];

for (let i = 0; i < testTotalPaymentList.length; i++)
{
    if (testIsMemberList[i])
    {
        console.log(
            testTotalPaymentList[i],
            " Discount ",
            testTotalPaymentList[i] - (testTotalPaymentList[i] * 0.1),
        );
    }
    else
    {
        console.log(testTotalPaymentList[i], "No Discount");
    }
}

console.log("\n\n\n");
// Task 5
console.log("Task 5");
let testChoosenPlayerList = [ "Knight", "Wizard", "Atqa" ];

for (let i = 0; i < testChoosenPlayerList.length; i++)
{
    if (testChoosenPlayerList[i] == "Knight")
    {
        console.log("Welcome, Knight the hero!");
    }
    else if (testChoosenPlayerList[i] == "Wizard")
    {
        console.log("Welcome, Wizard the witch!");
    }
    else
    {
        console.log("Welcome, Nobody!");
    }
}
