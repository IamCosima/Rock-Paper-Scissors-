humanScore = 0;
computerScore = 0;
//let rock = "rock";
let paper = "paper";
let scissors = "scissors";
let rock = "rock";
document.getElementById("rock").addEventListener("click", function(){
  playRound(rock,getComputerChoice());
    });
document.getElementById("paper").addEventListener("click", function(){
  playRound(paper,getComputerChoice());
});
document.getElementById("scissors").addEventListener("click", function(){
  playRound(scissors,getComputerChoice());
});

function getComputerChoice() {
    seed = Math.random();
    //console.log(seed)
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
  function playRound(humanChoice,computerChoice) {
    //console.log("Human:" + humanChoice)
    //console.log("Computer:" + computerChoice)
    humanChoice = humanChoice.toLowerCase();

    if (humanScore < 5 || computerScore < 5){
      if (humanChoice === 'rock' && computerChoice === 'scissors') {
        humanScore += 1;
        let text = "Human: " + humanScore + " " + "Computer :" + computerScore;
        document.getElementById("score").textContent = text;
        document.getElementById("round").textContent = "You Win! Rock beats Scissors"

        if(humanScore === 5 || computerScore === 5){
          if (humanScore > computerScore) {
            document.getElementById("score").textContent = "Human Wins with " + humanScore
            humanScore = 0
            computerScore = 0
          }
          else{
            document.getElementById("score").textContent ="Computer Wins with " + computerScore
            humanScore = 0
            computerScore = 0
          }
        }
      }
      else if (humanChoice === 'scissors' && computerChoice === 'paper'){
        humanScore += 1;
        let text = "Human: " + humanScore + " " + "Computer :" + computerScore;
        document.getElementById("score").textContent = text;
        document.getElementById("round").textContent ="You Win! Scissors beats Paper";

        if(humanScore === 5 || computerScore === 5){
          if (humanScore > computerScore) {
            document.getElementById("score").textContent = "Human Wins with " + humanScore
            humanScore = 0
            computerScore = 0
          }
          else{
            document.getElementById("score").textContent ="Computer Wins with " + computerScore
            humanScore = 0
            computerScore = 0
          }
        }
      }
      else if (humanChoice === 'paper' && computerChoice === 'rock'){
        humanScore += 1;
        let text = "Human: " + humanScore + " " + "Computer :" + computerScore;
        document.getElementById("score").textContent = text;
        document.getElementById("round").textContent ="You Win! Paper beats Rock";

        if(humanScore === 5 || computerScore === 5){
          if (humanScore > computerScore) {
            document.getElementById("score").textContent = "Human Wins with " + humanScore
            humanScore = 0
            computerScore = 0
          }
          else{
            document.getElementById("score").textContent ="Computer Wins with " + computerScore
            humanScore = 0
            computerScore = 0
          }
        }
      }
      else if (humanChoice === computerChoice){
      let text = "Human: " + humanScore + " " + "Computer :" + computerScore;
      document.getElementById("score").textContent = text;
      document.getElementById("round").textContent ="You Tie! " + computerChoice + ' draws ' + humanChoice;

      if(humanScore === 5 || computerScore === 5){
        if (humanScore > computerScore) {
          document.getElementById("score").textContent = "Human Wins with " + humanScore
          humanScore = 0
            computerScore = 0
        }
        else{
          document.getElementById("score").textContent ="Computer Wins with " + computerScore
          humanScore = 0
          computerScore = 0
        }
      }
      }
      else {
        computerScore += 1;
        let text = "Human: " + humanScore + " " + "Computer :" + computerScore;
        document.getElementById("score").textContent = text;
        document.getElementById("round").textContent ="You Loose! " + computerChoice + ' beats ' + humanChoice;

        if(humanScore === 5 || computerScore === 5){
          if (humanScore > computerScore) {
            document.getElementById("score").textContent = "Human Wins with " + humanScore
            humanScore = 0
            computerScore = 0
          }
          else{
            document.getElementById("score").textContent ="Computer Wins with " + computerScore
            humanScore = 0
            computerScore = 0
          }
        }
      }
  }
} 