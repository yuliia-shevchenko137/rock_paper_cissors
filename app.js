function getComputerChoice() {
    let randomNumber = Math.random();
    if (randomNumber < 1/3) {
        return 'Rock';
    } else if (randomNumber > 2/3) {
        return 'Paper';
    } else {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 0;
    } else if (playerSelection == 'Rock' && computerSelection == 'Paper') {
        return -1
    } else if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
        return 1;
    } else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
        return 1;
    } else if (playerSelection == 'Paper' && computerSelection == 'Scissors') {
        return -1;
    } else if (playerSelection == 'Scissors' && computerSelection == 'Rock') {
        return -1;
    }  else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
        return 1;
    }
  }

let totalGamePlayed = 0;

document.addEventListener("DOMContentLoaded", () => {

    function roundInteraction(playerSelection) {
        computerSelection = getComputerChoice();
        result = playRound(playerSelection, computerSelection);
        totalGamePlayed++;
        if (result === 0) {
            resultText.innerText = "It's a tie";
        } else if (result === 1) {
            resultText.innerHTML = "You won. <br>" + playerSelection + " beats " + computerSelection;
            playerCounter.innerText = Number(playerCounter.textContent) + 1;
        } else {
            resultText.innerHTML = "You lost. <br>" + computerSelection + " beats " + playerSelection;
            computerCounter.innerText = Number(computerCounter.textContent) + 1;
        }
        if (totalGamePlayed == 5) {
            if (Number(playerCounter.textContent) > Number(computerCounter.textContent)) {
                resultText.innerHTML = resultText.innerHTML + '<br>' + "You won the match. Congratulations!";
            } else {
                resultText.innerHTML = resultText.innerHTML + '<br>' + "You lost the match. Better luck next time.";
            }
            playerCounter.innerText = 0;
            computerCounter.innerText = 0;
            totalGamePlayed = 0;
        }    
      }

    playerCounter = document.getElementById("player_counter__label");
    computerCounter = document.getElementById("computer_counter__label");    
    rockBtn = document.getElementById("rock__btn");
    paperBtn = document.getElementById("paper__btn");
    scissorsBtn = document.getElementById("scissors__btn");
    resultText = document.getElementById("result__textarea");
    restartBtn = document.getElementById("restart__btn");

    rockBtn.addEventListener('click', function() {roundInteraction("Rock")});
    paperBtn.addEventListener('click', function() {roundInteraction("Paper")});
    scissorsBtn.addEventListener('click', function() {roundInteraction("Rock")});

    restartBtn.addEventListener('click', () => {
        playerCounter.innerText = 0;
        computerCounter.innerHTML = 0;
        totalGamePlayed = 0;
        resultText.innerHTML = '';
    })
    playerCounter.innerText = 0;
    computerCounter.innerHTML = 0;
    resultText.innerHTML = '';
  });
