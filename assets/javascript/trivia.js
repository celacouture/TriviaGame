$(document).ready(function(){
//trivia guestions, choices and answers
var questionList=["In what year did Austin become the capital of Texas?", "Before being named Austin, the city was called...?", "Austin was named for...", "Lady Bird Lake used to be called...", "What temperature does Barton Springs famously claim to be?"];
var answer=["1839", "Waterloo", "Stephen F Austin", "Town Lake", "68 degrees"];
var choiceOne=["1839", "Colorado City", "Sam Austin", "City Lake", "68 degress"];
var choiceTwo=["1845", "Capital City", "Stephen F Austin", "Stevie Ray Vaughn Lake", "36 degress"];
var choiceThree=["1900", "Waterloo", "Davey Austin", "Congress Lake", "50 degrees"];
var choiceFour=["1803", "Armadillo", "Jane Austen", "Town Lake", "32 degrees"];


/*  {
    question: ,
    choices: ["1839","1845","1900","1803"],
    correctAnswer: 1
  },
  {
    question:
    choices: ["Colorado City", "Capital City","Waterloo","Armadillo"],
    correctAnswer: 3
  },
  {
    question:
    answers: ["Sam Austin", "Stephen F. Austin", "Davey Austin", "Jane Austen"],
    correctAnswer: 2
  },
  {
    question:
    answers: ["City Lake", "Stevie Ray Vaughn Lake", "Congress Lake", "Town Lake"],
    correctAnswer: 4
  },

  {
    question:
    answers: ["68 degress", "36 degrees", "50 degrees", "32 degrees"],
    correctAnswer: 1
  },
]*/

var correct = 0;
var count=0;
var time=61;
var isSelected=false;

function createQuiz (){
 var gameDiv=$(".quizBoard");
 var showQuestion=$("<span class='showquestion'>" + questionList[count] + "</span>");
 gameDiv.append(showQuestion);
 var choicesDiv=$(".quizBoard");
 var showChoiceOne=$("<p><input type='radio' id='one choice'> " + choiceOne[count]+ "</input></p>");
 var showChoiceTwo=$("<p><input type='radio' id='two choice'> "  + choiceTwo[count]+ "</input></p>");
 var showChoiceThree=$("<p><input type='radio' id='three choice'> "  + choiceThree[count]+ "</input></p>");
 var showChoiceFour=$("<p><input type ='radio' id='four choice'> "  + choiceFour[count]+ "</input></p>");
showQuestion.append(showChoiceOne, showChoiceTwo, showChoiceThree, showChoiceFour);
}

$("#start").on('click', function (){

  startGame();
  startTimer();
})

$("#next").on('click', function (){
  nextQuestion();
})

$("#one").on("click", checkAnswer)
$("#two").on("click", checkAnswer)
$("#three").on("click", checkAnswer)
$("#four").on("click", checkAnswer)

function checkAnswer(){
  if($('input').on('click')===answer[count]){
    isSelected=true;
    correct ++;

  }
  else{
    isSelected=true;

  }
console.log(checkAnswer);
}

function checkGameOver(){
  if (count >= questionList.length){
  stopTimer();
  finalScore();
  }
}
function startTimer(){
  time --;
  $("#start").html("<h3> You have  " + time + " seconds left </h3");
  if (time===0){
    alert("Times up!")
    stopTimer();
    checkGameOver();
  }

}

function stopTimer(){
  clearInterval(counter);
}

function nextQuestion(){
  createQuiz();
  count ++;
checkGameOver();
}
function startGame(){
  counter= setInterval(startTimer, 1000);
}

function reset(){

}

function finalScore(){
    $(".quizBoard").html("<span id='score'> You have scored " + correct + " out of 5 correct !!</span>")
}
checkGameOver();


});
