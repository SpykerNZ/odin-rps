const choiceArray = ["Paper", "Scissors", "Rock"];
const beatsArray = ["Rock", "Paper", "Scissors"];
const resultArray = ["Win", "Lose", "Draw"];
const outcomeArray = ["Beats", "Draws"];

function getPlayerChoice() {
    while (true)
    {
        c = prompt('Enter your choice - Rock, Paper or Scissors:');
        if (checkValidChoice(c)) {
            return c.charAt(0).toUpperCase() + c.slice(1);
        } 
    }
}

function checkValidChoice(c) {
    for (let i = 0; i < choiceArray.length; i++) {
        if (c.toLowerCase()===choiceArray[i].toLowerCase()) return true;
    }
    return false;
}

function getComputerChoice() {
    const index = Math.floor(Math.random()*choiceArray.length);
    return choiceArray[index];
}

function playRound(playerChoice, computerChoice) {
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
            console.log(choiceArray[i]);
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
            console.log(choiceArray[i]);
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

function game() {
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    console.log(playerChoice);
    console.log(computerChoice);
    const result = playRound(playerChoice, computerChoice);
    console.log(result);
}

game();