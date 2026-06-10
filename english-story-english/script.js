const chapters = [
    {
        image: "images/poke1.png",

        text: 'Ash ___ his last badge and began _____ to compete in the league.',

        options: [
            [
                { word: "get", correct: true },
                { word: "wins", correct: true },
                { word: "buys", correct: false },
                { word: "enter", correct: false }
            ],
            [
                { word: "preparing", correct: true },
                { word: "running", correct: false },
                { word: "crying", correct: false },
                { word: "going", correct: true }
            ]
        ],

        feedback: 'Correct! "get"/"wins" and "preparing"/"going" are the best options to complete this sentence.'
    },

    {
        image: "images/poke2.jpg",

        text: 'He decided to ____ Pikachu, Heracross and Totodile in his team. To complete the party to his first chellenge, he ______ Sceptile, Charizard and Dragonite',

        options: [
            [
                { word: "keep", correct: true },
                { word: "kill", correct: false },
                { word: "seal", correct: false },
                { word: "see", correct: false }
            ],
            [
                { word: "lost", correct: false },
                { word: "ate", correct: false },
                { word: "chose", correct: true },
                { word: "spoke", correct: false }
            ]
        ],

        feedback: '"keep" and "chose" are the best options to complete.'
    },

    {
        image: "images/poke3.jpg",

        text: "Heracross ____ ash's last pokémon and he needed to defeat Blastoise, when the battle seems lost he moved forward and ___ the battle.",

        options: [
            [
                { word: "was", correct: true },
                { word: "is", correct: false },
                { word: "are", correct: true },
                { word: "changed", correct: false }
            ],
            [
                { word: "made", correct: true },
                { word: "stared", correct: false },
                { word: "became", correct: true },
                { word: "won", correct: false }
            ]
        ],

        feedback: '"was" and "won" are the best options to use in this case.'
    },

    {
        image: "images/poke4.png",

        text: '',

        options: [
            [
                { word: "was", correct: true },
                { word: "were", correct: false },
                { word: "opened", correct: true },
                { word: "open", correct: false }
            ],
            [
                { word: "was", correct: true },
                { word: "were", correct: false },
                { word: "opened", correct: true },
                { word: "open", correct: false }
            ]
        ],

        feedback: 'Perfect answer!'
    },

    {
        image: "images/poke5.jpg",

        text: '',

        options: [
            [
                { word: "is", correct: true },
                { word: "are", correct: false },
                { word: "has", correct: true },
                { word: "have", correct: false }
            ],
            [
                { word: "is", correct: true },
                { word: "are", correct: false },
                { word: "has", correct: true },
                { word: "have", correct: false }
            ]
        ],

        feedback: ''
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

    chapter.options.forEach(list => {
        list.forEach(option => {
            const button = document.createElement("button");
    
            button.innerText = option.word;
    
            button.classList.add("option-button");
    
            button.onclick = () => selectOption(option);
    
            optionsContainer.appendChild(button);
        });
        chapterText.innerText = currentChapter + 1;
    
        progressBar.style.width = ((currentChapter) / chapters.length) * 100 + "%";
    
        completeStory.push(chapter);
    });

}

let correctSelections = 0;

function selectOption(option) {

    if(option.correct) {
        xp += 10;
        correctSelections++;
    } else {
        xp += 3;
    }
    feedback.innerHTML = chapters[currentChapter].feedback;

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