
const symbols = ["rock", "paper", "scissors"];
let scoreComputer = 0;
let scorePlayer = 0;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    return symbols[getRandomInt(3)];
}

