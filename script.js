
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
        setText("Draw");
    }
    if(playerSelection == "rock" && computerSelection == "paper") {
        setText("You Lose! Paper beats Rock");
        scoreComputer++;
    }
    if(playerSelection == "rock" && computerSelection == "scissors") {
        setText("You Win! Rock smashes scissors");
        scorePlayer++;
    }

    //player paper
    if(playerSelection == "paper" && computerSelection == "rock") {
        setText("You Win! Paper wraps Rock");
        scorePlayer++;
    }
    if(playerSelection == "paper" && computerSelection == "paper") {
        setText("Draw!");
    }
    if(playerSelection == "paper" && computerSelection == "scissors") {
        setText("You Loose! Scissors cut paper!");
        scoreComputer++;
    }

    //player scissors
    if(playerSelection == "scissors" && computerSelection == "rock") {
        setText("You Lose! Rock smashes Scissors");
        scoreComputer++;
    }
    if(playerSelection == "scissors" && computerSelection == "paper") {
        setText("You Win! Scissors cut Paper");
        scorePlayer++;
    }
    if(playerSelection == "scissors" && computerSelection == "scissors") {
        setText("Draw");
    }
}


function game() {
    for(let i = 0; i < 5; i++) {
        playerSelection = prompt("Whats your choice? rock, paper or scissors")
        playRound(playerSelection, getComputerChoice())
    }
}


function result(scorePlayer, scoreComputer){
    if (scorePlayer > scoreComputer) {
        setText(`You won the game ${scorePlayer} / ${scoreComputer}`);
    }
    if (scorePlayer < scoreComputer) {
        setText(`You loose the game ${scorePlayer} / ${scoreComputer}`);
    }

    if (scorePlayer == scoreComputer) {
        setText(`The game is draw! ${scorePlayer} / ${scoreComputer}`);
    }
}


let buttons = document.querySelector(".button-container");
buttons.addEventListener('click', (event) => {
    let target = event.target;
    switch(target.id) {
        case "rock":
            playRound("rock", getComputerChoice())
            updateScore()
            break;
        case "paper":
            playRound("paper", getComputerChoice())
            updateScore()
            break;
        case "scissors":
            playRound("scissors", getComputerChoice())
            updateScore()
            break;
    }
})


function updateScore(){
    let domScorePlayer =  document.querySelector("#playerScore");
        domScorePlayer.textContent = scorePlayer;
        let domScoreComputer =  document.querySelector("#computerScore");
        domScoreComputer.textContent = scoreComputer;

        if (scoreComputer == 5) {
            result(scoreComputer, scorePlayer);
            reset();
        }

        if (scorePlayer == 5) {
            result(scorePlayer, scoreComputer);
            reset();
        }
}

function reset(){
    scoreComputer = 0;
    scorePlayer = 0;
    updateScore();
}

function setText(text){
    let domText =  document.querySelector(".text");
    domText.textContent = text
}