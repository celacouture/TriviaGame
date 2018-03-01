console.log("works");
var timer=0;
var correct=0;
var gamePanel= $('.quizBoard');

$(document).on('click', '#start', function(){
  

})
//trivia guestions, choices and answers
var questionArr=[
  {
    question: "In what year did Austin become the capital of Texas?",
    answers: {
      a: "1839",
      b: "1845",
      c: "1900",
      d: "1803"
    },
    correctAnswer: "a"
  },
  {
    question: "Before being named Austin, the city was called...?",
    answers: {
      a: "Colorado City",
      b: "Capital City",
      c: "Waterloo",
      d: "Armadillo"
    },
    correctAnswer: "c"
  },
  {
    question: "Austin was named for...",
    answers: {
      a: "Sam Austin",
      b: "Stephen F. Austin",
      c: "Davey Austin",
      d: "Jane Austen"
    },
    correctAnswer: "b"
  },
  {
    question: "Lady Bird Lake used to be called...",
    answers: {
      a: "City Lake",
      b: "Stevie Ray Vaughn Lake",
      c: "Congress Lake",
      d: "Town Lake"
    },
    correctAnswer: "d"
  },

  {
    question: "Which famous person below has called Austin home?",
    answers: {
      a: "Robert Plant",
      b: "Elijah Wood",
      c: "Sandra Bullock",
      d: "All of the above",
      e: "None of the above"
    },
    correctAnswer: "d"
  },
]

function createGame (){

}
