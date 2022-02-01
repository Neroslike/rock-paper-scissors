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

function playRound(playerSelection, computerSelection) {
    playerSelection = capitalize(playerSelection)
    if (computerSelection == playerSelection) {
        console.log(`Game tie!`)
        return 50
    } else if ((computerSelection == 'Rock' && playerSelection ==  'Paper')  ||
    (computerSelection == 'Paper' && playerSelection ==  'Scissors') ||
    (computerSelection == 'Scissors' && playerSelection ==  'Rock')){
        console.log(`You won! ${playerSelection} beats ${computerSelection}`)
        return 100
    } else {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`)
        return -100
    }
}

function game(){
    let score = 0
    for (let i = 0; i < 5;i++) {
        console.log(score)
        score = score + playRound(prompt('Pick rock, paper or scissors'),  computerPlay(getRndInteger(1,4)));;
        console.log(`The current score is ${score}`)
    }
    if (score == 250) {
        console.log(`The game tied, Total score: ${score}`)
    } else if (score > 250) {
        console.log(`Congratulations, you won! Total score: ${score}`)
    } else {
        console.log(`You lost, better luck next time, Total score: ${score}`)
    }
}

game();

// When the user inputs a selection, compare it to the computer selection and decide the winner