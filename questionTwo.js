"use strict";
// 2. Guessing Game (Using while loop ):
const maxValue = 100;
const randomNumber = Math.floor(Math.random() * maxValue) + 1;
console.log(`Random number (for development purpose): ${randomNumber}`);
let isGuessCorrect = false;
const predefinedGuesses = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let index = 0;
while (!isGuessCorrect && index < predefinedGuesses.length) {
    let currentGuess = predefinedGuesses[index];
    console.log(`User's guess: ${currentGuess}`);
    if (currentGuess === randomNumber) {
        console.log("Congratulations! You guessed the correct number.");
        isGuessCorrect = true;
    }
    else if (currentGuess < randomNumber) {
        console.log("Your guess is too low.");
    }
    else {
        console.log("Your guess is too high.");
    }
    index++;
}
if (!isGuessCorrect) {
    console.log("Sorry, you did not guess the correct number. The correct number was " + randomNumber);
}
