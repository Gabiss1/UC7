const rl = require("readline-sync");
const func = require("../gameState");

function sentenceBuilder() {
    const shuffledSentences = [
        {
            words: ["easy", "don't", "come", "Words"],
            correct: "Words don't come easy"
        },
        {
            words: ["Under", "eh eh", "umbrella", "my", "ella ella"],
            correct: "Under my umbrella ella ella eh eh"
        }
    ];

    shuffledSentences.forEach(c =>{
        console.log("Reorder the words to form a sentence: ");
        console.log(c.words.join(" | "));
    });

    let answer = rl.question("Write the sentence in the correct order: ");

    if (answer === c.answer) {
        console.log("Correct!");
        func.addPoints(5);
    } else {
        console.log("Wrong! The right answer is " + c.answer);
        func.loseLife();
    };
};

module.exports = sentenceBuilder;