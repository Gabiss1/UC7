const rl = require("readline-sync")
const func = require("../gameState")

function quiz() {
    const questions = [
        {
            question: "She __ my friend",
            options: ["1) are", "2) is", "3) eh"],
            answer: "2"
        },
        {
            question: "There __ a stranger __ my bed",
            options: ["1) is / was", "2) are / am", "3) is / in"],
            answer: "3"
        },
        {
            question: "Popcorn ___ ice cream sealers",
            options: ["1) was", "2) are", "3) and"],
            answer: "3"
        },
        {
            question: "But the kid __ not my son...",
            options: ["1) is", "2) he he", "3) am"],
            answer: "1"
        }
    ]

    questions.forEach(q =>{
        console.log("Question: " + q.question);
        q.options.forEach(opt => console.log(opt));

        let answer = rl.question("Your answear: ");
        if (answer === q.answer) {
            console.log("Correct!");
            func.addPoints(10);
        } else {
            console.log("Wrong!");
            func.loseLife();
        }
    })
}

module.exports = quiz;