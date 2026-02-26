const rl = require("readline-sync")
const func = require("../gameState")

function memoryChallenge() {
    const words = [
    ["firework", "cold", "roar", "teenage", "look"]
    ]

    words.forEach(w =>{
        console.log("Memorize these words: ");
        console.log(w.join(" | "));

        rl.question("Press enter to continue...");
        console.clear();
        let answer = rl.question("Write the words you remember separated by comma: ");

        if (answer === w.join(", ")){
            console.log("Correct!");
            func.addPoints(10);
        } else {
            console.log("Wrong! Correct answer: " + w.join(", "));
            func.loseLife();
        }
    })
}

module.exports = memoryChallenge