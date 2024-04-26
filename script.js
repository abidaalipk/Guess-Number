let computerGuess;
let userGuess = [];
let userGuessUpdate = document.getElementById("textOutPut");
let userNumberUpdate = document.getElementById("inputBox");
let audio = new Audio("./audio/music.mp3");

const init = () => {
  computerGuess = Math.floor(Math.random() * 100);
  // console.log(computerGuess);
  document.getElementById("newGameBtn").style.display = "none";
  document.getElementById("gameArea").style.display = "none";
};

const startGame = () => {
  document.getElementById("welcomeScreen").style.display = "none";
  document.getElementById("gameArea").style.display = "block";
  userNumberUpdate.disabled = false;
};

// start new game reload the page

const newgame = () => {
  audio.play();
  // window.location.reload();
  document.getElementById("welcomeScreen").style.display = "block";
  document.getElementById("gameArea").style.display = "none";
  document.getElementById("newGameBtn").style.display = "none";
  userGuessUpdate.innerHTML = "Your😍😍Guess";
  document.getElementById("guesses").innerHTML = 0;
  document.getElementById("attempts").innerHTML = 0;
  userGuess = [];
  userNumberUpdate.disabled = false;
};

const startNewGame = () => {
  audio.play();
  document.getElementById("newGameBtn").style.display = "block";
  userNumberUpdate.disabled = true;
};

// main logic of our app

const compareGuess = () => {
  audio.play();
  const inputBox = document.getElementById("inputBox");
  const userNumber = inputBox.value;
  userGuess = [...userGuess, userNumber];
  document.getElementById("guesses").innerHTML = userGuess;
  document.getElementById("attempts").innerHTML = userGuess.length;
  // check the value low or high
  if (userGuess.length < maxGuess) {
    if (userNumber > computerGuess) {
      userGuessUpdate.innerHTML = "Your Guess Number is High❤️❤️";
      userNumberUpdate.value = "";
    } else if (userNumber < computerGuess) {
      userGuessUpdate.innerHTML = "Your Guess Number is Low😍😍";
      userNumberUpdate.value = "";
    } else {
      userGuessUpdate.innerHTML = "It's Correct💞Answer";
      userNumberUpdate.value = "";
      startNewGame();
    }
  } else {
    if (userNumber > computerGuess) {
      userGuessUpdate.innerHTML = `<h2>Game Over !!</h2> Correct Number Was ${computerGuess}❤️❤️`;
      userNumberUpdate.value = "";
      startNewGame();
    } else if (userNumber < computerGuess) {
      userGuessUpdate.innerHTML = `<h2>Game Over !!</h2> Correct Number Was ${computerGuess}❤️❤️`;
      userNumberUpdate.value = "";
      startNewGame();
    } else {
      userGuessUpdate.innerHTML = "It's Correct💞Answer";
      userNumberUpdate.value = "";
      startNewGame();
    }
  }
};

const easyMode = () => {
  audio.play();
  maxGuess = 10;
  startGame();
};
const hardMode = () => {
  audio.play();
  maxGuess = 5;
  startGame();
};
