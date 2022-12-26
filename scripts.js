const choiceArray = ["Paper", "Scissors", "Rock"];
const beatsArray = ["Rock", "Paper", "Scissors"];
const resultArray = ["Win", "Lose", "Draw"];
const outcomeArray = ["Beats", "Draws"];

function playRound(choice) {
    resultString.textContent = fight(choice.textContent, getComputerChoice());
    updateScores();
    checkWinner();
}

function updateScores() {
    playerScoreValue.textContent = playerScore;
    computerScoreValue.textContent = computerScore;
}

function checkWinner() {
    if (computerScore>=maxScore) {
        resultString.textContent = 'Computer Wins!';
        computerScoreBox.style.borderColor = 'green';
        computerScoreBox.style.borderWidth = '4px';
        gameEnd();
    }
    else if (playerScore>=maxScore) {
        resultString.textContent = 'Challenger Wins!'
        playerScoreBox.style.borderColor = 'green';
        playerScoreBox.style.borderWidth = '4px';
        gameEnd();
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    updateScores();
    gameStart();
}

function gameEnd() {
    // show rematch button
    rematchButton.style.display = 'block';
    // deactivate buttons
    choiceButtons.forEach(choice => {
        choice.disabled = true;
    });
}

function gameStart() {
    // Set game state
    gameActive = true;
    // hide rematch button
    rematchButton.style.display = 'none';
    // set boxes to default color
    computerScoreBox.style.borderColor = 'blue';
    computerScoreBox.style.borderWidth = '2px';
    playerScoreBox.style.borderColor = 'blue';
    playerScoreBox.style.borderWidth = '2px';
    // reset string
    resultString.textContent = 'The showdown of a lifetime!';
    // activate buttons
    choiceButtons.forEach(choice => {
        choice.disabled = false;
    });
}

function getComputerChoice() {
    const index = Math.floor(Math.random()*choiceArray.length);
    return choiceArray[index];
}

function fight(playerChoice, computerChoice) {
    let result = null;
    let winner = null;
    let outcome = null;
    let loser = null;

    if (playerChoice===computerChoice) {
        result=resultArray[2];
        winner=playerChoice;
        outcome=outcomeArray[1];
        loser=computerChoice;
    } else { 
        for (let i = 0; i < choiceArray.length; i++) {
            if (choiceArray[i]==playerChoice &&
                beatsArray[i]==computerChoice) {
                    result=resultArray[0];
                    winner=playerChoice;
                    outcome=outcomeArray[0];
                    loser=computerChoice;
                    break;
                };
        }
        for (let i = 0; i < choiceArray.length; i++) {
            if (choiceArray[i]==computerChoice &&
                beatsArray[i]==playerChoice) {
                    result=resultArray[1];
                    winner=computerChoice;
                    outcome=outcomeArray[0];
                    loser=playerChoice;
                    break;
                };
        }
    }

    if (result===resultArray[1]) {
        computerScore += 1;
    } else if (result===resultArray[0]) {
        playerScore += 1;
    }

    return `You ${result}! ${winner} ${outcome} ${loser}.`;
}

const choiceButtons = document.querySelectorAll('.choice');
const rematchButton = document.querySelector('.rematch');
const resultString = document.querySelector('.result');
const playerScoreValue = document.querySelector('.player > .score-value');
const computerScoreValue = document.querySelector('.computer > .score-value');
const playerScoreBox = document.querySelector('.player.score-box');
const computerScoreBox = document.querySelector('.computer.score-box');

const maxScore = 5;
let computerScore = 0;
let playerScore = 0;
let gameActive = 1;

gameStart();

choiceButtons.forEach(choice => {
    choice.addEventListener('click', () => {
        playRound(choice);
    })
});

rematchButton.addEventListener('click', () => {
    resetGame();
});