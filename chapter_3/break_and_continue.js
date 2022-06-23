// Break and continue statements

const scores = [50, 34, 67, 10, 45, 67, -5, 101];

for (let i = 0; i < scores.length; i++) {
    console.log('Your score is ', scores[i]);

    if (scores[i] < 0) {
        continue; // This mores on to the next iteration of the for loop without executing any more of the code after this line. Note that the print statement below doesn't run.
        console.log('Congrats! You did so poorly, you broke the game!');
    }

    if (scores[i] > 100) {
        console.log('Congrats! You did so well, you broke the game!');
        break; // Breaks out of the for loop
    }
}