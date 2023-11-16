
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
        scoreComputer++;
    }
    if(playerSelection == "rock" && computerSelection == "scissors") {
        console.log("You Win! Rock smashes scissors");
        scorePlayer++;
    }

    //player paper
    if(playerSelection == "paper" && computerSelection == "rock") {
        console.log("You Win! Paper wraps Rock");
        scorePlayer++;
    }
    if(playerSelection == "paper" && computerSelection == "paper") {
        console.log("Draw!");
    }
    if(playerSelection == "paper" && computerSelection == "scissors") {
        console.log("You Loose! Scissors cut paper!");
        scoreComputer++;
    }

    //player scissors
    if(playerSelection == "scissors" && computerSelection == "rock") {
        console.log("You Lose! Rock smashes Scissors");
        scoreComputer++;
    }
    if(playerSelection == "scissors" && computerSelection == "paper") {
        console.log("You Win! Scissors cut Paper");
        scorePlayer++;
    }
    if(playerSelection == "scissors" && computerSelection == "scissors") {
        console.log("Draw");
    }
}


function game() {
    for(let i = 0; i < 5; i++) {
        playerSelection = prompt("Whats your choice? rock, paper or scissors")
        playRound(playerSelection, getComputerChoice())
    }
}

game()

if (scorePlayer > scoreComputer) {
    console.log(`You won the game ${scorePlayer} / ${scoreComputer}`);
}
if (scorePlayer < scoreComputer) {
    console.log(`You loose the game ${scorePlayer} / ${scoreComputer}`);
}

if (scorePlayer == scoreComputer) {
    console.log(`The game is draw! ${scorePlayer} / ${scoreComputer}`);
}