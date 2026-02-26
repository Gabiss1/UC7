const func = require("./gameState");
const rl = require("readline-sync");

const quiz = require('./games/quiz');
const completeSentence = require('./games/completeSentence');
const sentenceBuilder = require('./games/sentenceBuilder');
const memoryChallenge = require('./games/memoryChallenge');
const battleRPG = require('./games/battleRPG');
const detectiveStory = require('./games/detectiveStory');

function showMenu() {
    while (true) {
        if (func.getLives() <= 0) {
            console.log("Game Over");
            console.log("Final Score: " + func.getScore());
            func.resetGame();
        }
        console.log("\n==== DEVLINGO ARENA ====");
        console.log("Score:", func.getScore(), "| Lives:", func.getLives());
        console.log("1 - Quiz");
        console.log("2 - Complete the Sentence");
        console.log("3 - Sentence Builder");
        console.log("4 - Memory Challenge");
        console.log("5 - Battle RPG");
        console.log("6 - Detective Story");
        console.log("0 - Exit");
        let option = rl.question("Choose an option:");
        switch (option) {
            case "1":
                quiz();
                break;
            case "2":
                completeSentence();
                break;
            case "3":
                sentenceBuilder();
                break;
            case "4":
                memoryChallenge();
                break;
            case "5":
                battleRPG();
                break;
            case "6":
                detectiveStory();
                break;
            case "0":
                process.exit();
                break;
            default:
                console.log("Invalid option")
                break;
        }
    }
}

module.exports = showMenu