console.log("Hello World")

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
console.log(getComputerChoice())

function getHumanChoice() {
    choice = prompt("rock, paper, scissors. Shoot!")
    return choice
    
}
console.log(getHumanChoice())