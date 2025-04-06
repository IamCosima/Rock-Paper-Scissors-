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
  
  //const humanSelection = getHumanChoice();
  //const computerSelection = getComputerChoice();
  //console.log("Human: " + humanSelection);
  //console.log("Computer: " + computerSelection);
  
  //playRound(humanSelection, computerSelection);
    playgame()
  function playgame() {
    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        //rock beats scissors looses to paper
        //scissors looses to rock and beats paper
        //papper beats rock but looses to scissors
        
        if (humanChoice === 'rock' && computerChoice === 'scissors') {
            humanScore += 1;
            return console.log("You Win! Rock beats Scissors");
        }
        else if (humanChoice === 'scissors' && computerChoice === 'paper'){
            humanScore += 1;
            return console.log("You Win! Scissors beats Paper");
    
        }
        else if (humanChoice === 'paper' && computerChoice === 'rock'){
            humanScore += 1;
            return console.log("You Win! Paper beats Rock");
        }
        else if (humanChoice === computerChoice){
            return console.log("You Tie! " + computerChoice + ' draws ' + humanChoice);
        }
    
        else {
            computerScore += 1;
            return console.log("You Loose! " + computerChoice + ' beats ' + humanChoice);
        }
      }

    for (let i = 0; i < 5; i++) {
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        playRound(humanSelection,computerSelection);
      }
      if (humanScore > computerScore) {
        console.log("Human Wins with " + humanScore)
      }
      else{
        console.log("Computer Wins with " + computerScore)
      }
    
  }
  