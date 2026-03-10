const readline = require('readline-sync');
const gameState = require('../gameState');

function detectiveStory() {

    const questions = [
        {
            question: "Blue __ the color that represents the best team in the south!",
            options: "1 - where | 2 - are | 3 - is",
            answer: "3",
            clue: "Middle-Fielder"
        },
        {
            question: "He almost _____ three goals against Saint Louis!",
            options: "1 - score | 2 - scored | 3 - scores",
            answer: "2",
            clue: "He used to use the 19th t-shirt"
        },
        {
            question: "Normally he ____ during the matchs.",
            options: "1 - slept | 2 - sleeps | 3 - sleeped",
            answer: "2",
            clue: "Saint Louis Man"
        },
        {
            question: "There aren't ____ middle-fielders than him in the south",
            options: "1 - better | 2 - bitter | 3 - best",
            answer: "1",
            clue: "He was born in Argentina"
        },
        {
            question: "He _____ the most important player of the GREMIO until Christian Pavón arrives at Happy Harbor!",
            options: "1 - was | 2 - were | 3 - where",
            answer: "1",
            clue: "The Mage"
        }
    ]

    const guess = {
        clues: [], 
        options: ["1 - Franco Cristaldo | 2 - Christian Oliveira | 3 - Mathias Arezo"],
        answer: "1"
    }

    questions.forEach(q => {
        console.log(q.question)
        console.log(q.options)
        let answer = readline.question("Choose an option: ")
        if(answer === q.answer) {
            console.log("Clue discovered!");
            guess.clues.push(q.clue);
        } else {
            console.log("Wrong answer!");
        }
    });
    if (guess.clues.length > 0) {

    }

    readline.question("\nPress ENTER to continue...");
}

module.exports = detectiveStory;