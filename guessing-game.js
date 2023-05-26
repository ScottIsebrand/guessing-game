// ***** GUESSING GAME

let maxNum = parseInt(prompt('Enter max num:'));
while (!maxNum) {
  maxNum = parseInt(prompt('Enter valid num as you max num:'));
}
const targetNumber = Math.floor(Math.random() * maxNum) + 1;
console.log(targetNumber);

let guess = prompt('enter your first guess:');
let attempts = 1;

while (parseInt(guess) !== targetNumber) {
  if (guess === 'q') {
    break;
  }
  attempts++;
  if (guess > targetNumber) {
    guess = prompt(`Too high. Guess again. Hint: your max. num. is ${maxNum}.`);
  } else if (guess < targetNumber) {
    guess = prompt(`Too low. Guess again. Hint: your max. num. is ${maxNum}.`);
  } else {
    guess = prompt(`Your guess, ${guess}, is invalid. Guess a number.`);
  }
}
if (guess === 'q') {
  alert(`You quit. You number of attempts: ${attempts}.`);
} else {
  alert(
    `Congrats! ${targetNumber} was correct. Number of attempts: ${attempts}. Click OK and then refresh your browser to play again.`
  );
}
