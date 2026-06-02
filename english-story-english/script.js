const chapters = [
    {
        image: "images/castle.jpg",

        text: 'Emma _____ a new student when she _____ the magic castle.',

        options: [
            { word: "was", correct: true },
            { word: "were", correct: false },
            { word: "entered", correct: true },
            { word: "enter", correct: false }
        ],

        feedbackCorrect: 'Correct! "was" and "entered" are correct.',
        feedbackWrong: 'Incorrect. Try to remember verb forms.'
    },

    {
        image: "images/forest.jpg",

        text: 'The students _____ walking when they _____ a strange creature.',

        options: [
            { word: "were", correct: true },
            { word: "was", correct: false },
            { word: "saw", correct: true },
            { word: "see", correct: false }
        ],

        feedbackCorrect: 'Great! Present Continuous and Simple Past are correct.',
        feedbackWrong: 'Incorrect answer.'
    },

    {
        image: "images/potion.jpg",

        text: 'Emma _____ a magic potion and it _____ blue.',

        options: [
            { word: "made", correct: true },
            { word: "make", correct: false },
            { word: "became", correct: true },
            { word: "become", correct: false }
        ],

        feedbackCorrect: 'Excellent! Both verbs are in the correct form.',
        feedbackWrong: 'Wrong verb tense.'
    },

    {
        image: "images/dragon.jpg",

        text: 'The dragon _____ sleeping when Emma _____ the door.',

        options: [
            { word: "was", correct: true },
            { word: "were", correct: false },
            { word: "opened", correct: true },
            { word: "open", correct: false }
        ],

        feedbackCorrect: 'Perfect answer!',
        feedbackWrong: 'Incorrect grammar choice.'
    },

    {
        image: "images/ending.jpg",

        text: 'Emma _____ now a great wizard and she _____ many friends.',

        options: [
            { word: "is", correct: true },
            { word: "are", correct: false },
            { word: "has", correct: true },
            { word: "have", correct: false }
        ],

        feedbackCorrect: 'Amazing! You finished the game!',
        feedbackWrong: 'Not quite correct.'
    }
];

const completeStory = []

let currentChapter = 0;
let xp = 0;
let selectedAnswers = [];

const storyText = document.getElementById("story-text");
const optionsContainer = document.getElementById("options-container");
const feedback = document.getElementById("feedback");
const xpText = document.getElementById("xp");
const chapterText = document.getElementById("chapter");
const progressBar = document.getElementById("progress-bar");
const storyImage = document.getElementById("story-image");

function loadChapter() {

    const chapter = chapters[currentChapter];

    storyText.innerHTML = chapter.text;

    optionsContainer.innerHTML = "";

    feedback.innerHTML = "";

    storyImage.src = chapter.image;

    chapter.options.forEach(option => {

        const button = document.createElement("button");

        button.innerText = option.word;

        button.classList.add("option-button");

        button.onclick = () => selectOption(option);

        optionsContainer.appendChild(button);
    });

    chapterText.innerText = currentChapter + 1;

    progressBar.style.width = ((currentChapter) / chapters.length) * 100 + "%";

    completeStory.push(chapter);
}

let correctSelections = 0;

function selectOption(option) {

    if(option.correct) {
        xp += 10;
        correctSelections++;

        feedback.innerHTML = chapters[currentChapter].feedbackCorrect;
    } else {
        xp += 3;

        feedback.innerHTML = chapters[currentChapter].feedbackWrong;
    }

    xpText.innerText = xp;

    selectedAnswers.push(option.word);

    if(selectedAnswers.length % 2 === 0) {

        currentChapter++;

        if(currentChapter < chapters.length) {

            setTimeout(() => {
                loadChapter();
            }, 1500);

        } else {

            showFinalScreen();
        }
    }
}

function showFinalScreen() {

    progressBar.style.width = "100%";
    
    const completeStoryText = document.createElement("div");
    const p = document.createElement("p");
    completeStory.forEach(fragment => {
        console.log(fragment)
        p = fragment
        completeStoryText.appendChild(p)
    });

    document.querySelector(".game-container").innerHTML = `
    
        <h1>Game Finished!</h1>

        <h2>Your XP: ${xp}</h2>

        <p>You completed the magic adventure!</p>

        ${completeStoryText}

        <p>Your choices were:</p>

        <p>${selectedAnswers.join(", ")}</p>

        <button onclick="location.reload()" class="option-button">
            Restart Game
        </button>
    `;
}

loadChapter();