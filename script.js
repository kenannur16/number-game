'use strict';

let score = 20;
let highScore = 0;
let secretNumber = Number(Math.ceil(Math.random() * 10));
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const guess = function () {
  const inputNumber = Number(document.querySelector('.guess').value);

  //const secretNumber = 5;
  console.log(inputNumber);
  console.log(secretNumber);

  if (inputNumber === secretNumber) {
    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    score++;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (!inputNumber) {
    displayMessage('No Number!');

    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 0) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--;
    } else {
      displayMessage('You lost the game!');
    }
  }

  document.querySelector('.score').textContent = score;

  console.log(secretNumber);
};

document.querySelector('.check').addEventListener('click', guess);

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Number(Math.ceil(Math.random() * 10));
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
