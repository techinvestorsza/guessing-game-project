const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const randomInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

let secretNumber = null; // the number to guess

let numAttempts = 5;

const checkGuess = (num) => {
    if (num > secretNumber) {
        console.log("Too high");

        return false;
    } else if (num < secretNumber) {
        console.log("Too low");

        return false;
    } else {
        console.log("Correct!");

        return true;
    }
}

const askGuess = () => {

    rl.question("Enter guess: ", (answer) => {
        const intAns = Number(answer);

        let bool = checkGuess(intAns);

        if (bool) {
            console.log("You win!")
        } else {
            numAttempts--;

            if (numAttempts !== 0) {
                return askGuess();
            } else {
                console.log("You lose.")
            }
        }

        rl.close();
    });
}

rl.question("Enter the number of rounds: ", askLimit)

function askLimit(limit) {
    numAttempts = limit;

    askRange()
}

function askRange() {
    rl.question("Enter a minimum number: ", min => {
        rl.question("Enter a maximum number: ", max => {
            console.log("I am thinking of a number between " + min + " and " + max + "...")

            secretNumber = randomInRange(Number(min), Number(max));

            askGuess();
        })

    })

}
