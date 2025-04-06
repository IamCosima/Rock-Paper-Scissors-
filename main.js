humanScore = 0;
computerScore = 0;


function getComputerChoice() {
    seed = Math.random();
    console.log(seed)
    if (seed <= 0.33) {
        move = 'rock';
    }
    else if (seed > 0.33 && seed <= 0.67) {
        move = 'paper';
    } else {
        move = 'scissors';
    }
     return move  
}

function getHumanChoice() {
    return prompt("rock, paper, scissors. Shoot!")   
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    //rock beats scissors looses to paper
    //scissors looses to rock and beats paper
    //papper beats rock but looses to scissors
    
    if (humanChoice === 'rock' && computerChoice === 'scissors') {
        return console.log("You Win! Rock beats Scissors");
    }
    else if (humanChoice === 'scissors' && computerChoice === 'paper'){
        return console.log("You Win! Scissors beats Paper");

    }
    else if (humanChoice === 'paper' && computerChoice === 'rock'){
        return console.log("You Win! Paper beats Rock");
    }
    else if (humanChoice === computerChoice){
        return console.log("You Tie! " + computerChoice + ' draws ' + humanChoice);
    }

    else {
        return console.log("You Loose! " + computerChoice + ' beats ' + humanChoice);
    }
  }
  
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  console.log("Human: " + humanSelection);
  console.log("Computer: " + computerSelection);
  
  playRound(humanSelection, computerSelection);
  