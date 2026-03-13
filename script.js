console.log("Hello World")


function getComputerChoice(){

let randomNumber = Math.random()

if (randomNumber <= 0.3) {return 'rock'}

else if (randomNumber <= 0.6 ) {return 'paper'}

else {return 'scissors'}


}



function getHumanChoice() { 
let choice = prompt('rock,paper or scissors?')
return choice;
}





humanScore = 0
computerScore = 0

function playRound (humanChoice,computerChoice){

humanChoice.toLowerCase()

if (humanChoice === computerChoice) {console.log('draw')} else
if (humanChoice === 'rock' && computerChoice === 'paper') {console.log('You lost! Paper beats Rock'), computerScore++} else
if (humanChoice === 'rock' && computerChoice === 'scissors') {console.log('You won! Rock beats Scissors'), humanScore++} else
if (humanChoice === 'scissors' && computerChoice === 'paper') {console.log('You won! Scissors beats Paper'), humanScore++} else
if (humanChoice === 'scissors' && computerChoice === 'rock') {console.log('You lost! Rock beats Scissors'), computerScore++} else
if (humanChoice === 'paper' && computerChoice === 'rock') {console.log('You won! Paper beats Rock'), humanScore++} else
if (humanChoice === 'paper' && computerChoice === 'scissors') {console.log('You lost! Scissors beats Paper'), computerScore++} 

}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(humanSelection)
console.log(computerSelection)


console.log(playRound(humanSelection,computerSelection));