const choiceArray = ["Paper", "Scissors", "Rock"];
const beatsArray = ["Rock", "Paper", "Scissors"];
const resultArray = ["Win", "Lose", "Draw"];
const outcomeArray = ["Beats", "Draws"];

function playRound(choice) {
    result.textContent = fight(choice.textContent, getComputerChoice());
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
    return `You ${result}! ${winner} ${outcome} ${loser}.`;
}

function addChoiceListener(e) {

}

const choices = document.querySelectorAll('.choice');
const result = document.querySelector('.result');

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        playRound(choice);
    })
});