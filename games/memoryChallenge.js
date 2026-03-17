const rl = require("readline-sync")
const func = require("../gameState")

function memoryChallenge() {
    const words = [
    ["firework", "cold", "roar", "teenage", "look"],
    ["high", "cold", "heart", "yesterday's", "mistakes"],
    ["chromakopia", "sticky", "baloon", "noid", "jane"]
    ]

    for (let i = 0; i < words.length; i++) {
        words[i].forEach(w =>{
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
}

module.exports = memoryChallenge