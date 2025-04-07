const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");
const resetBtn = document.getElementById("reset-btn");
const scoreParagraph = document.getElementById("score");
const resultParagraph = document.getElementById("result");
const movesParagraph = document.getElementById("moves");

let computerMove = "";
let result = "";

const score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

const updateScore = () => {
  scoreParagraph.innerHTML = `
    Wins: ${score.wins}. Losses: ${score.losses}. Ties: ${score.ties}.`;
};

const playGame = () => {
  const randomNumber = Math.random();

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else {
    computerMove = "scissors";
  }
  return computerMove;
};

const yourMove = (move) => {
  playGame();

  if (move === "rock") {
    if (computerMove === "rock") {
      result = "Tie.";
    } else if (computerMove === "paper") {
      result = "You Lose.";
    } else {
      result = "You Win.";
    }
  } else if (move === "paper") {
    if (computerMove === "rock") {
      result = "You Win.";
    } else if (computerMove === "paper") {
      result = "Tie.";
    } else {
      result = "You Lose.";
    }
  } else {
    if (computerMove === "rock") {
      result = "You Lose.";
    } else if (computerMove === "paper") {
      result = "You Win.";
    } else {
      result = "Tie.";
    }
  }

  if (result === "You Win.") {
    score.wins += 1;
  } else if (result === "You Lose.") {
    score.losses += 1;
  } else {
    score.ties += 1;
  }
  
  updateScore();
  resultParagraph.innerHTML = result;
  movesParagraph.innerHTML = `You <img src="./assets/img/${move}-emoji.png" alt="${move}-emoji" > Computer <img src="./assets/img/${computerMove}-emoji.png" alt="${computerMove}-emoji" >`;

  localStorage.setItem("score", JSON.stringify(score));
};

const reset = () => {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.setItem("score", JSON.stringify(score));
  updateScore();
  resultParagraph.innerHTML = "";
  movesParagraph.innerHTML = "";
};

updateScore();
rockBtn.addEventListener("click", () => yourMove("rock"));
paperBtn.addEventListener("click", () => yourMove("paper"));
scissorsBtn.addEventListener("click", () => yourMove("scissors"));
resetBtn.addEventListener("click", reset);