var timerEl = doucument.getElementById('countdown');
var mainEl = document.getElementById('main');
var question = '';
var startBtn = document.querySelector('.start-btn');
var quizBox = document.querySelector('.quiz-box');
var finalScore = document.querySelector('.results');
var 
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
]

// Timer that counts down from 5
function countdown() {
  var timeLeft = 75;

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = 'Time: ' + timeLeft;
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = '';
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      // Call the `displayMessage()` function
      displayMessage();
    }
  }, 1000);
}

function displayMessage() {
    var wordCount = 0;
  
    // Uses the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var msgInterval = setInterval(function () {
      // If there are no more words left in the message
      if (words[wordCount] === undefined) {
        // Use `clearInterval()` to stop the timer
        clearInterval(msgInterval);
      } else {
        // Display one word of the message
        mainEl.textContent = words[wordCount];
        wordCount++;
      }
    }, 1000);
  }

  countdown();