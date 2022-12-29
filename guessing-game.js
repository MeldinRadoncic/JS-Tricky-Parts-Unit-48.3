function guessingGame() {
    let target = Math.floor(Math.random() * 100);
    let numGuesses = 0;
    let gameOver = false;
  
    return function(guess) {
      if (gameOver) {
        return "The game is over, you already won!";
      }
      numGuesses++;
      if (guess === target) {
        gameOver = true;
        return `You win! You found ${target} in ${numGuesses} guesses.`;
      } else if (guess < target) {
        return `${guess} is too low!`;
      } else {
        return `${guess} is too high!`;
      }
    }
  }

module.exports = { guessingGame };
