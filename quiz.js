// let questions = [
//   {
//     question: 'Which HTML tag is used to define an inline style?',
//     choice1: '<script>',
//     choice2: '<css>',
//     choice3: '<style>',
//     choice4: '<span>',
//     answer:3,
//   },
//   {
//     question: 'Which property is used to change the text color in CSS',
//     choice1: 'text-color',
//     choice2: 'font-color',
//     choice3: 'text-style',
//     choice4: 'color',
//     answer:4,
//   },
//   {
//     question: 'Which of the following is the correct way to comment in HTML?',
//     choice1: '//Comment',
//     choice2: '<!-- Comment -->',
//     choice3: '/* Comment */',
//     choice4: '<! Comment>',
//     answer:2,
//   },
// ];

// const questionText = document.querySelector(".Statement");
// const optionsContainer = document.querySelector(".OptionsContainer");
// const optionButtons = document.querySelectorAll(".option");
// const progressBar = document.querySelector(".progress");
// const progressBarText = document.querySelector(".progressBarText");
// const scoreDisplay = document.querySelector(".score .scoreValue");

// let currentQuestion;
// let remainingQuestions = [...questions];
// let score = 0;
// let questionCounter = 0;

// function getRandomNumber(min, max) {
//   const step1 = max - min + 1;
//   const step2 = Math.random() * step1;
//   const result = Math.floor(step2) + min;
//   return result;
// }

// function displayRandomQuestion() {
//   if (remainingQuestions.length === 0) {
//     localStorage.setItem('finalScore', score);
//     redirectToEndPage();
//     return;
//   }

//   const randomIndex = getRandomNumber(0, remainingQuestions.length - 1);
//   currentQuestion = remainingQuestions[randomIndex];
//   remainingQuestions.splice(randomIndex, 1);

//   questionText.innerHTML = currentQuestion.question;

//   optionButtons.forEach((button, index) => {
//     button.querySelector('span').innerText = currentQuestion[`choice${index + 1}`];
//     button.onclick = handleChoiceSelection;
//     button.style.backgroundColor = '';
//   });

  
// }

// function handleChoiceSelection(event) {
//   const selectedButton = event.currentTarget;
//   const selectedAnswerIndex = Array.from(optionButtons).indexOf(selectedButton) + 1;
  
//   if (selectedAnswerIndex === currentQuestion.answer) {
//     selectedButton.style.backgroundColor = 'green';
//     score += 10;
//     updateScore();
//   } else {
//     selectedButton.style.backgroundColor = 'red';
//   }
//    updateProgressBar();
//   // Allow time for the user to see the result before displaying the next question
//   setTimeout(displayRandomQuestion, 1000);
// }

// function updateScore() {
//   scoreDisplay.innerText = `${score}`;
// }

// function updateProgressBar() {
//   questionCounter++;
//   const progress = (questionCounter / questions.length) * 100;
//   progressBar.style.width = `${progress}%`;
//   progressBarText.innerText = `Question ${questionCounter}/${questions.length}`;
// }

// function redirectToEndPage() {
//   window.location.href = "end.html";
// }


// document.addEventListener('DOMContentLoaded', displayRandomQuestion);
let questions = [
  {
    question: 'Which HTML tag is used to define an inline style?',
    choice1: '<script>',
    choice2: '<css>',
    choice3: '<style>',
    choice4: '<span>',
    answer: 3,
  },
  {
    question: 'Which property is used to change the text color in CSS?',
    choice1: 'text-color',
    choice2: 'font-color',
    choice3: 'text-style',
    choice4: 'color',
    answer: 4,
  },
  {
    question: 'Which of the following is the correct way to comment in HTML?',
    choice1: '// Comment',
    choice2: '<!-- Comment -->',
    choice3: '/* Comment */',
    choice4: '<! Comment>',
    answer: 2,
  },
];

const questionText = document.querySelector(".Statement");
const optionsContainer = document.querySelector(".OptionsContainer");
const optionButtons = document.querySelectorAll(".option");
const progressBar = document.querySelector(".progress");

const scoreDisplay = document.querySelector(".scoreValue");

let currentQuestion;
let remainingQuestions = [...questions];
let score = 0;
let questionCounter = 0;

function getRandomNumber(min, max) {
  const step1 = max - min + 1;
  const step2 = Math.random() * step1;
  const result = Math.floor(step2) + min;
  return result;
}

function displayRandomQuestion() {
  if (remainingQuestions.length === 0) {
    localStorage.setItem('finalScore', score);
    redirectToEndPage();
    return;
  }

  const randomIndex = getRandomNumber(0, remainingQuestions.length - 1);
  currentQuestion = remainingQuestions[randomIndex];
  remainingQuestions.splice(randomIndex, 1);

  questionText.innerHTML = currentQuestion.question;

  optionButtons.forEach((button, index) => {
    button.querySelector('span').innerText = currentQuestion[`choice${index + 1}`];
    button.onclick = handleChoiceSelection;
    button.style.backgroundColor = '';
  });
  
  
}

function handleChoiceSelection(event) {
  const selectedButton = event.currentTarget;
  const selectedAnswerIndex = Array.from(optionButtons).indexOf(selectedButton) + 1;
  
  if (selectedAnswerIndex === currentQuestion.answer) {
    selectedButton.style.backgroundColor = 'green';
    score += 10;
    updateScore();
  } else {
    selectedButton.style.backgroundColor = 'red';
  }
  updateProgressBar();
  // Allow time for the user to see the result before displaying the next question
  setTimeout(displayRandomQuestion, 1000);
}

function updateScore() {
  scoreDisplay.innerText = `${score}`;
}

function updateProgressBar() {
  questionCounter++;
  const progress = (questionCounter / questions.length) * 100;
  progressBar.style.width = `${progress}%`;
  
}

function redirectToEndPage() {
  window.location.href = "end.html";
}

document.addEventListener('DOMContentLoaded', displayRandomQuestion);
