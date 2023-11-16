function getComputerChoice() {
    let randomNumber = Math.random();
    if (randomNumber < 1/3) {
        return 'rock';
    } else if (randomNumber > 2/3) {
        return 'paper';
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    let playerSelectionLower = playerSelection.toLowerCase();
    if (playerSelectionLower === computerSelection) {
        return 0;
    } else if (playerSelectionLower == 'rock' && computerSelection == 'paper') {
        return -1
    } else if (playerSelectionLower == 'rock' && computerSelection == 'scissors') {
        return 1;
    } else if (playerSelectionLower == 'paper' && computerSelection == 'rock') {
        return 1;
    } else if (playerSelectionLower == 'paper' && computerSelection == 'scissors') {
        return -1;
    } else if (playerSelectionLower == 'scissors' && computerSelection == 'rock') {
        return -1;
    }  else if (playerSelectionLower == 'scissors' && computerSelection == 'paper') {
        return 1;
    }
  }


  function game() {
    let computerWin = 0, playerWin = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Choose Rock, Paper of Scissors");
        const playerSelectionNew = playerSelection.split(' ')
        .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
        .join(' ');
        const computerSelection = getComputerChoice();
        const computerSelectionNew = computerSelection.split(' ')
        .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
        .join(' ');
        result = playRound(playerSelection, computerSelection);
        if (result === 0) {
            console.log("It's a draw");
        } else if (result === -1) {
            computerWin++;
            console.log(`You lost. ${computerSelectionNew} beats ${playerSelectionNew}`);
        } else {
            playerWin++;
            console.log(`You won. ${playerSelectionNew} beats ${computerSelectionNew}`);
        }
    }

    if (playerWin === computerWin) {
        console.log('Game finished as draw');
    } else if (playerWin > computerWin) {
        console.log('You won the game. Confratulation!');
    } else {
        console.log('You lost');
    }
  }
   
  game();
