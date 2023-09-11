const min = 1;
const max = 20;
// let's generate a random number

const randomNumber = Math.trunc(Math.random() * (max - min + 1)) + min;
let start, results;
let score = 20;
//this will be executed whenever we click the check button

document.querySelector(".check").addEventListener("click", function () {
  // the variable that stores the number that is guessed by the player
  const inputGuess = document.querySelector(".guess").value;

  // conditions to consider in the game

  if (inputGuess == randomNumber) {
    start = document.querySelector(".message");
    start.innerHTML = "Correct!";
    document.querySelector(".score").innerHTML = score;

    const highscore = document.querySelector(".highscore");
    results = highscore.innerHTML;

    if (results > score) {
      highscore.innerHTML = results;
    } else {
      highscore.innerHTML = score;
    }
  } else if (inputGuess !== randomNumber) {
    if (score > 0) {
      start = document.querySelector(".message");
      start.innerHTML = inputGuess < randomNumber ? "Too low " : "Too high";
      score--;
      document.querySelector(".score").innerHTML = score;
    } else {
      document.querySelector(".message").innerHTML = "You lost the Game";
    }
  }
});
// when we click the again button we reset the game except the high scores
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".score").innerHTML = score;
});
