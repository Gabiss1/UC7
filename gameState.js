const initialScore = 0;
const initialLives = 3;

let score = initialScore;
let lives = initialLives;

function addPoints(points) {
    return score+= points
}

function loseLife() {
    lives--;
}

function getScore() {
    return score;
}

function getLives() {
    return lives;
}

function resetGame() {
    score = 0;
    lives = 3;
}

module.exports = {
    addPoints,
    loseLife,
    getScore,
    getLives,
    resetGame
}