'use script';
// parameters
const checkBtn = document.querySelector('.check');
const secretNumber = document.querySelector('.number');
let randomNumber = Math.trunc(Math.random() * 20 + 1);
const displayMessage = document.querySelector('.message');
const scoreNum = document.querySelector('.score');
const highScores = document.querySelector('.highscore');
const againBtn = document.querySelector('.again');
let highScore = 0;
let score = 20;

// update scores
const updateScore = () => {
  if (score > 0) {
    score--;
    scoreNum.textContent = score;
  }
  if (score === 0) {
    displayMessage.textContent = 'YOU LOST THE GAME!';
    document.querySelector('.guess').disabled = true;
    document.querySelector('body').style.backgroundColor = 'red';
    scoreNum.textContent = 0;
  }
};
// check btn
checkBtn.addEventListener('click', e => {
  const guess = Number(document.querySelector('.guess').value);
  // to check for guess is an empty input,invalid number - higher or less than 1-20,
  if (!guess || guess < 1 || guess > 20) {
    alert('Choose a number between 1 and 20');
    displayMessage.textContent =
      'Invalid Guess, Choose a number between 1 and 20';
    return;
  }

  if (guess === randomNumber) {
    // if the guess is correct
    displayMessage.textContent = 'Correct Guess';
    document.querySelector('body').style.backgroundColor = 'green';
    secretNumber.textContent = randomNumber;
    document.querySelector('.guess').disabled = true;
    // updating highscores
    if (score > highScore) {
      highScore = score;
      highScores.textContent = highScore;
    }
  } else {
    displayMessage.textContent =
      guess > randomNumber ? 'Guess is Too High' : 'Guess is Too Low';
    updateScore();
  }
});

// again button
againBtn.addEventListener('click', () => {
  document.querySelector('body').style.backgroundColor = 'black';
  randomNumber = Math.trunc(Math.random() * 20 + 1);
  secretNumber.textContent = '?';
  score = 20;
  scoreNum.textContent = score;
  displayMessage.textContent = 'Start Guessing';
  document.querySelector('.guess').disabled = false;
  document.querySelector('.guess').value = '';
});

