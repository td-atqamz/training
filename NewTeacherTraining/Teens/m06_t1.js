// Atqa Munzir - Javascript Developer - Homework Part 3 - LMS Version

for (var i = 0; i < 10; i++)
{
    var num1 = Math.floor(Math.random() * 10) + 1;
    var num2 = Math.floor(Math.random() * 10) + 1;
    var operators = ['x', '+','-',':']
    var random = Math.floor(Math.random() * operators.length)
    var choosenOperator = operators[random]
    var total = 0;
    switch(choosenOperator){
        case 'x':
            total = num1 * num2;
            break;
        case '+' :
            total = num1 + num2;
            break;
        case '-' :
            total = num1 - num2;
            break;
        case ':' :
            total = num1 / num2;
            break;
    }
    console.log(`${num1} \t${choosenOperator} \t${num2} \t= \t${total}`);
}