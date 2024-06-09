// 2. Guessing Game (Using while loop ):

const maxValue: number = 100;

const randomNumber:number = Math.floor(Math.random()*maxValue) + 1;
console.log(`Random number (for development purpose): ${randomNumber}`);

let isGuessCorrect: boolean = false;

const predefinedGuesses: number[] = [10,20,30,40,50,60,70,80,90,100];


let index:number = 0;

while(!isGuessCorrect && index < predefinedGuesses.length){
    let currentGuess: number = predefinedGuesses[index];
    console.log(`User's guess: ${currentGuess}`);


    if(currentGuess === randomNumber){
        console.log("Congratulations! You guessed the correct number.");
        isGuessCorrect = true;
    }else if(currentGuess < randomNumber){
        console.log("Your guess is too low.");
    }else{
        console.log("Your guess is too high.");
    }
    index++;
}

if (!isGuessCorrect){
    console.log("Sorry, you did not guess the correct number. The correct number was " + randomNumber);
}