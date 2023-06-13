var optionA = document.querySelector(".option-A");
var optionB = document.querySelector(".option-B");
var optionC = document.querySelector(".option-C");
var optionD = document.querySelector(".option-D");
var timer = doucument.querySelector('.timer');
var questionText = document.querySelector('.question-text');
var startText = document.querySelector(".start-text")
var startBtn = document.querySelector('.start-btn');
var submitBtn = document.querySelector('.submit-btn');
var restartBtn = document.querySelector('.restart-btn');
var quitBtn = document.querySelector('.quit-btn');
var quizBox = document.querySelector('.quiz-box');
var finalScore = document.querySelector('.results');
var mediaBox = document.querySelector('media-box');
var results = document.querySelector(".results");
var highScores = document.querySelector(".high-scores");
var timeLeft = 75;
var timerInterval;
var userScore = 0;
var lastQuestion = questionInfo.length;
var questionIndex = 0;
var correctAnswer = "";



var questionInfo = [
    {
        question: "Which of the following is not one of the four cornerstones of computational thinking?",
        optionA: "Decomposition",
        optionB:"Pattern recognition",
        optionC:"Abstraction",
        optionD:"Completion",
        answer:"Completion",
    },
    {
        question:"What information does the <head> element contain?",
        optionA:"Content the User can see",
        optionB:"Metadata",
        optionC:"Link to the HTML document",
        optionD:"<h1>, <h2>, <h3> elements",
        answer:"Metadata",
    },
    {
        question:"Which of the following is not used to identify elements in a CSS style sheet?",
        optionA:"* universal",
        optionB:". class",
        optionC:"# id",
        optionD:"All of the above",
        answer:"All of the above",
    },
    {
        question:"Declarations in CSS contain which of the following important components?",
        optionA:"Property and Value",
        optionB:"Property and Element",
        optionC:"Length and Value",
        optionD:"Length and Element",
        answer:"Property and Value",
    },
    {
        question:"A single variable used to hold a group of data in JavaScript is known as:",
        optionA:"A Function",
        optionB:"A For Loop",
        optionC:"An Array",
        optionD:"A Property",
        answer:"An Array",
    },
    {
        question:"What loop uses the predictable pattern of indices to perform a task on all the items in an array by allowing a single code block to be executed over and over?",
        optionA:"A While Loop",
        optionB:"An If Else Loop",
        optionC:"A Hula Loop",
        optionD:"A For Loop",
        answer:"A For Loop",
    },
    {
        question:"jQuery uses which symbol at the beginning of its syntax?",
        optionA:"&",
        optionB:"*",
        optionC:"^",
        optionD:"$",
        answer:"$",
    }
];

startBtn.addEventListener("click", startQuiz);

function startQuiz() {
  startText.style.display = "none";
  quizBox.style.display = "flex";
  renderQuestion();
  startTimer();
}

quitBtn.onClick = () => {
  results.style.display = "none";
  highScores.style.display = "flex"
  alert("Thanks for playing!");
  mediaBox.classList.add("high-scores");
}

// Timer that counts down from 5
function startTimer() {
  var timeLeft = 75;

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = "Time Left:" + timeLeft + " seconds";
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft >= 0) {
      timerEl.textContent = "Time Left:" + timeLeft + " second";
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = '';
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      // Call the `displayMessage()` function
      showResults();
    }
  }, 1000);
}

function renderQuestion(){
  var q= questionInfo[questionIndex];
  questionText.innerHTML = "<p>" + q.question + "</p>";
  optionA.innerHTML = "<button class='option-btn'>" + q.optionA + "</button>";
  optionB.innerHTML = "<button class='option-btn'>" + q.optionB + "</button>";
  optionC.innerHTML = "<button class='option-btn'>" + q.optionC + "</button>";
  optionD.innerHTML = "<button class='option-btn'>" + q.optionD + "</button>";
  if (questionIndex === lastQuestion) {
    return showResults();
    }
  }

  function checkAnswer(answer) {
    var q = questionInfo[questionIndex];
    if (answer === q.answer) {
      alert("Correct!");
      answerIsCorrect = true;
    } else {
      alert ("Sorry, Inccorect.")
      andswerIsCorrect = false;
      timeLeft - 10;
    }
    questionIndex++;
    if (questionIndex === lastQuestion) {
      showResults();
    } else {
      renderQuestion();
    }
  }

  function showResults() {

  }



restartBtn.onclick = ()=>{
  mediaBox.classList.add(startText);
  mediaBox.classList.remove(results);
  timeLeft = 75;
  questionIndex = 0;
  renderQuestion();
  startTimer();
}