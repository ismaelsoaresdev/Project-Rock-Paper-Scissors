

function getComputerChoice(){

let randomNumber = Math.random()

if (randomNumber <= 0.3) {return 'rock'}

else if (randomNumber <= 0.6 ) {return 'paper'}

else {return 'scissors'}


}










let humanScore = 0
let computerScore = 0

//for (i=0; i<5; i++) { playRound()}



function playRound(){




let computerChoice = getComputerChoice();




choiceFeedback.textContent = ('you choosed: ' + humanChoice)
choiceFeedback.textContent += (' | Computer chose: ' + computerChoice)





if (humanChoice === computerChoice) {returnMatchFeedback.textContent = 'draw'} else
if (humanChoice === 'rock' && computerChoice === 'paper') {returnMatchFeedback.textContent = 'You lost! Paper beats Rock', computerScore++} else
if (humanChoice === 'rock' && computerChoice === 'scissors') {returnMatchFeedback.textContent = 'You won! Rock beats Scissors', humanScore++} else
if (humanChoice === 'scissors' && computerChoice === 'paper') {returnMatchFeedback.textContent = 'You won! Scissors beats Paper', humanScore++} else
if (humanChoice === 'scissors' && computerChoice === 'rock') {returnMatchFeedback.textContent = 'You lost! Rock beats Scissors', computerScore++} else
if (humanChoice === 'paper' && computerChoice === 'rock') {returnMatchFeedback.textContent = 'You won! Paper beats Rock', humanScore++} else
if (humanChoice === 'paper' && computerChoice === 'scissors') {returnMatchFeedback.textContent = 'You lost! Scissors beats Paper', computerScore++} 


scoreMarker.textContent = `Player: ${humanScore} - Computer: ${computerScore}`;

let = matchEndVerifier = 0
if (matchEndVerifier & humanScore === 5 || computerScore === 5){ return } else if        
(humanScore === 5){divannounceWinner.textContent = 'Human Won!!Made 5 points first!!',matchEndVerifier = 1} else if
(computerScore === 5){divannounceWinner.textContent = 'Computer Won!!Made 5 points first!!',matchEndVerifier= 1}


}


if (humanScore === computerScore){console.log('Draw :/')}else
if (humanScore >=  computerScore){console.log('You won!')}else
if (humanScore <=  computerScore){console.log('You lost!')}








const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

rockBtn.addEventListener('click', () => { humanChoice = 'rock'; playRound(); });
paperBtn.addEventListener('click', () => { humanChoice = 'paper'; playRound(); });          
scissorsBtn.addEventListener('click', () => { humanChoice = 'scissors'; playRound(); }); 



const scoreMarker = document.querySelector('#scoreBoard');
const returnMatchFeedback = document.querySelector('#matchFeedback')
const choiceFeedback = document.querySelector('#choiceDisplay')
const divannounceWinner = document.querySelector('#announceWinner')