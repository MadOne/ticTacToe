
const symbols = ["rock", "paper", "scissors"];
let scoreComputer = 0;
let scorePlayer = 0;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    return symbols[getRandomInt(3)];
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    
    //player rock
    if(playerSelection == "rock" && computerSelection == "rock") {
        console.log("Draw");
    }
    if(playerSelection == "rock" && computerSelection == "paper") {
        console.log("You Lose! Paper beats Rock");
    }
    if(playerSelection == "rock" && computerSelection == "scissors") {
        console.log("You Win! Rock smashes scissors");
    }

    //player paper
    if(playerSelection == "paper" && computerSelection == "rock") {
        console.log("You Win! Paper wraps Rock");
    }
    if(playerSelection == "paper" && computerSelection == "paper") {
        console.log("Draw!");
    }
    if(playerSelection == "paper" && computerSelection == "scissors") {
        console.log("You Loose! Scissors cut paper!");
    }

    //player scissors
    if(playerSelection == "scissors" && computerSelection == "rock") {
        console.log("You Lose! Rock smashes Scissors");
    }
    if(playerSelection == "scissors" && computerSelection == "paper") {
        console.log("You Win! Scissors cut Paper");
    }
    if(playerSelection == "scissors" && computerSelection == "scissors") {
        console.log("Draw");
    }
}


playRound("rock", "rock");