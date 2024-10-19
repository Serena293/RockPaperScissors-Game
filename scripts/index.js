const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");
const resetBtn = document.getElementById('reset-btn')
let computerMove = "";
let result = "";

const score = {wins: 0,
    losses: 0,
    ties: 0
}



const playGame = () => {
  const randomNumber = Math.random();

  if (randomNumber > 0 && randomNumber < 1 / 3) {
    computerMove = "Rock";
  } else if (randomNumber > 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "Paper";
  } else {
    computerMove = "Scissors";
  }
  return computerMove;
};

const yourMove = (move) => {
  playGame();

  if(move === 'Rock'){
  if (computerMove === "Rock") {
    result = "Tie.";
  } else if (computerMove === "Paper") {
    result = "You Lose.";
  } else {
    result = "You Win.";
  }}
 else if(move ==='Paper')
{
    if (computerMove === "Rock") {
        result = "You Win.";
      } else if (computerMove === "Paper") {
        result = "Tie.";
      } else {
        result = "You Lose.";
      }
}

else
{ if (computerMove === "Rock") {
    result = "You Lose.";
  } else if (computerMove === "Paper") {
    result = "You Win.";
  } else {
    result = "Tie.";
  }}

if(result === 'You Win.'){
    score.wins += 1
}
else if (result === 'You Lose.')
{score.losses += 1}
else{score.ties += 1}

console.log(score)
  alert(`You picked ${move}. Computer picked ${computerMove}. ${result}.
Wins: ${score.wins}. Losses: ${score.losses}. Ties: ${score.ties} .`);
};

const reset = () => {
    score.wins = 0
    score.losses = 0
    score.ties = 0
}



rockBtn.addEventListener("click", () => yourMove('Rock'));
paperBtn.addEventListener("click", () => yourMove('Paper'));
scissorsBtn.addEventListener("click", () => yourMove('Scissors'));
resetBtn.addEventListener('click', reset)
