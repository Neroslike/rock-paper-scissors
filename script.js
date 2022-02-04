function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

function computerPlay(option) {
    if (option == 3) {
        return 'Paper'
    } else if (option == 2) {
        return 'Scissors'
    } else {
        return 'Rock'
    }
}

function capitalize(word) {
    let capletter = word.slice(0, 1).toUpperCase();
    word = word.slice(1).toLowerCase();
    return capletter + word
}

let score = 0
let compScore = 0
function playRound(playerSelection, computerSelection) {
    const result = document.querySelector('#results')
    const scoreDiv = document.querySelector('#score')
    const compScoreDiv = document.querySelector('#compScore')
    playerSelection = capitalize(playerSelection)
    if (computerSelection == playerSelection) {
        result.textContent = "Game tie!"
        scoreDiv.textContent = `Score: ${score}`
        compScoreDiv.textContent = `Computer Score: ${compScore}`
    } else if ((computerSelection == 'Rock' && playerSelection ==  'Paper')  ||
    (computerSelection == 'Paper' && playerSelection ==  'Scissors') ||
    (computerSelection == 'Scissors' && playerSelection ==  'Rock')){
        score = score + 1
        if(compScore < 0){
            compScore = 0
        }
        result.textContent = `You won! ${playerSelection} beats ${computerSelection}`
        scoreDiv.textContent = `Score: ${score}`
        compScoreDiv.textContent = `Computer Score: ${compScore}`
    } else {
        compScore = compScore + 1
        if(score < 0){
            score = 0
        }
        result.textContent = `You lose! ${computerSelection} beats ${playerSelection}`
        scoreDiv.textContent = `Score: ${score}`
        compScoreDiv.textContent = `Computer Score: ${compScore}`
    }
    if(score >= 5){
        result.textContent = 'You won!'
        score = 0
        compScore = 0
        scoreDiv.textContent = `Score: ${score}`
        compScoreDiv.textContent = `Computer Score: ${compScore}`
    } else if(compScore >= 5){
        result.textContent = 'You lose!'
        score = 0
        compScore = 0
        compScoreDiv.textContent = `Score: ${score}`
        compScoreDiv.textContent = `Computer Score: ${compScore}`
    }
}

const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")

function playerPick(){
    playRound(this.id, computerPlay(getRndInteger(1, 4)))
}

rock.addEventListener('click', playerPick)
paper.addEventListener('click', playerPick)
scissors.addEventListener('click', playerPick)