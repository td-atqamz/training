// Atqa Munzir - Javascript Developer - Homework Part 3 - LMS Version

var questionList = [
  "What country has the longest coastline in the world?",
  "By size, what is the smallest country in the world?",
  "Which country has a unicorn as it's national animal?",
  "Which country is home to the world's tallest building?",
  "Officially, what is the coldest country in the world?"
];
var answerKeyList =[ "canada", "vatican city", "scotland", "united arab emirates", "russia" ];
var life = 3;
var score = 0;
var i  = 0;

do { 
  var playerAnswer = prompt(questionList[i]).toLowerCase()
  var answerKey = answerKeyList[i];
  if (playerAnswer === answerKey) {
    score++;
  } else {
    life--;
    if (life === 0) {
      break;
    }
  }
  i++;
} while (i < questionList.length);

console.log(`Your score ${score} and remaining life ${life}`);