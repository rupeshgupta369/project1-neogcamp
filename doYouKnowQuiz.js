var readlineSync = require("readline-sync");

var score = 0;

// input >> processing >> output
var userName = readlineSync.question("What's your name? ");

console.log("Welcome to Quiz Game, " + userName + " to DO YOU KNOW Rupesh?");

// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("right!");
    score = score + 1;

  } else {
    console.log("wrong!");

  }

  console.log("current score: ", score);
  console.log("-------------")
}

// array of objects
var questions = [{
  question: "Where do Rupesh live? ",
  answer: "Mumbai"
}, {
  question: "Who is Rupesh's favourite superhero? ",
  answer: "Ironman"
},
{
  question: "Where do I work? ",
  answer: "HUDL"
},
{
  question: "When is his birthday?\na)March 4th\nb)November 9th\n",
  answer: "b",
},
{
  question: "What is Rupesh's fav movie?\na)forrest gump\nb)The pursuit of happiness\n",
  answer: "b",
},
{
  question: 'How many siblings does he have?\na)0\nb)3\n',
  answer: "b",
},
];

// loop
for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

console.log("YAY! You SCORED: ", score);

console.log("Check out the scores")
