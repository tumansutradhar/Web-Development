let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector("#submit");
const input = document.querySelector("#guessField");
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHigh = document.querySelector(".lowOrHigh");
const resultParas = document.querySelector(".resultParas");
const p = document.createElement("p");

let previousGuess = [];
let numberGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(input.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid NUMBER");
  } else if (guess < 1) {
    alert("Please enter a Number more than 1");
  } else if (guess > 100) {
    alert("Please enter a Number less than 100");
  } else {
    previousGuess.push(guess);
    if (numberGuess === 10) {
      displayGuess(guess);
      displayMessage(`GAME OVER...Random Number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You Guessed it RIGHT`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOO LOW!!!`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOO HIGH!!!`);
  }
}

function displayGuess(guess) {
  input.value = "";
  guesses.innerHTML += `${guess}, `;
  numberGuess++;
  lastResult.innerHTML = `${11 - numberGuess}`;
}

function displayMessage(message) {
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  input.value = "";
  input.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">START NEW GAME</h2>`;
  resultParas.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGame = document.querySelector("#newGame");
  newGame.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    previousGuess = [];
    numberGuess = 1;
    guesses.innerHTML = "";
    displayMessage("");
    lastResult.innerHTML = `${11 - numberGuess}`;
    input.removeAttribute("disabled");
    resultParas.removeChild(p);
    playGame = true;
  });
}
