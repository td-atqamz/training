// Atqa Munzir - Javascript Developer - Homework Part 3 - LMS Version

var operator = prompt('Enter operator( +, -, * or / )\t: ');
var number1 = parseFloat(prompt('Enter first number\t\t\t\t: '));
var number2 = parseFloat(prompt('Enter second number\t\t\t\t: '));
var result;

if(!isNaN(number1) && !isNaN(number2)){
  switch(operator) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    case '*':
      result = number1 * number2;
      break;
    case '/':
      result = number1 / number2;
      break;
    default:
      alert('Invalid operator');
      break;
  }
} else {
  alert('Your input is not a number')
}

console.log(`${number1}\t${operator}\t${number2}\t=\t${result}`);