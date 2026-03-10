const rl = require("readline-sync")
const func = require("../gameState")

function completeSentence() {
    const sentences = [
        {
            sentence: "Glitter all ___ the room...",
            answer: "over"
        },
        {
            sentence: "Say you ____ remember me...",
            answer: "will"
        },
        {
            sentence: "I wish you ____ here...",
            answer: "were"
        },
        {
            sentence: "Let's run away and ___ not ever look back...",
            answer: "do"
        }
    ];

    sentences.forEach(s =>{
        console.log("Complete: ");
        console.log(s.sentence);

        let answer = rl.question("Answer: ")

        if (answer === s.answer) {
            console.log("Correct!");
            func.addPoints(10);
        } else {
            console.log("Wrong! Correct answer: " + s.answer);
            func.loseLife();
        }
    });
};

module.exports = completeSentence