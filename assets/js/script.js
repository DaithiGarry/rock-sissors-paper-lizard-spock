//Game will wait for DOM to full load before starting
//Get button elements and add event listeners for player input
document.addEventListener("DOMContentLoaded", function() {
  let buttons = document.getElementsByTagName("button");
  
  for (let button of buttons) {
    button.addEventListener('click', function() {
        if (this.getElementById() === 'submit') {
          alert('You clicked submit!');
        } else {
          let gametype = this.getElementById();
          alert(`You clicked ${gametype}`);
      
      }
    })
  }
})

const userChoiceDisplay = document.getElementById('user-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
const resetGameButton = document.getElementsByClassName('reset');
let userChoice;
let computerChoice;
let result;



possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML= userChoice;
    generateComputerChoice();
    getResult();
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    
    if (randomNumber === 1) {
      computerChoice = 'rock'
    }
    if (randomNumber === 2) {
      computerChoice = 'scissors'
    }
    if (randomNumber === 3) {
      computerChoice = 'paper'
    }
    if (randomNumber === 4) {
      computerChoice = 'lizard'
    }
    if (randomNumber === 5) {
      computerChoice = 'spock'
      }
    computerChoiceDisplay.innerHTML = computerChoice
  }
 
function getResult() {
  if (computerChoice === userChoice) {
    result = 'its a draw!'
    }
  if (computerChoice === 'scissors' && userChoice === "paper") {
      result = 'you lost!'
      incrementincorrect();
    }
  if (computerChoice === 'paper' && userChoice === "rock") {
      result = 'you lost!'
      incrementincorrect();
    }
  if (computerChoice === 'rock' && userChoice === "lizard") {
      result = 'you lost!'
      incrementincorrect();
    }
  if (computerChoice === 'lizard' && userChoice === "spock") {
      result = 'you lost!'
      incrementincorrect();
    }
  if (computerChoice === 'spock' && userChoice === "scissors") {
      result = 'you lost!'
      incrementincorrect();
    }
  if (computerChoice === 'scissors' && userChoice === "lizard") {
      result = 'you lost!'
      incrementincorrect();
    }
  if (computerChoice === 'lizard' && userChoice === "paper") {
      result = 'you lost!'
      incrementincorrect();
    }
  if (computerChoice === 'paper' && userChoice === "spock") {
      result = 'you lost!'
      incrementincorrect();
    }
  if (computerChoice === 'spock' && userChoice === "rock") {
      result = 'you lost!'
      incrementincorrect();
    }
  if (computerChoice === 'rock' && userChoice === "scissors") {
      result = 'you lost!'
      incrementincorrect();
    }
  if (computerChoice === 'paper' && userChoice === "scissors") {
      result = 'you win!'
      incrementcorrect();
    }
  if (computerChoice === 'rock' && userChoice === "paper") {
      result = 'you win!'
      incrementcorrect();
    }
  if (computerChoice === 'lizard' && userChoice === "rock") {
      result = 'you win!'
      incrementcorrect();
    }
  if (computerChoice === 'spock' && userChoice === "lizard") {
      result = 'you win!'
      incrementcorrect();
    }
  if (computerChoice === 'scissors' && userChoice === "spock") {
      result = 'you win!'
      incrementcorrect();
    }
  if (computerChoice === 'lizard' && userChoice === "scissors") {
      result = 'you win!'
      incrementcorrect();
    }
  if (computerChoice === 'paper' && userChoice === "lizard") {
      result = 'you win!'
      incrementcorrect();
    }
  if (computerChoice === 'spock' && userChoice === "paper") {
      result = 'you win!'
      incrementcorrect();
    }
  if (computerChoice === 'rock' && userChoice === "spock") {
      result = 'you win!'
      incrementcorrect();
    }
  if (computerChoice === 'scissors' && userChoice === "rock") {
      result = 'you win!'
      incrementcorrect();
    }
  resultDisplay.innerHTML = result;
}

function incrementcorrect() {
  let oldscore = parseInt(document.getElementById('correct').innerText);
  document.getElementById('correct').innerText = ++oldscore;
  if (oldscore > 4) {
    alert('Game Over you win!'); 
}
}
function incrementincorrect() {
  let oldscore = parseInt(document.getElementById('incorrect').innerText);
  document.getElementById('incorrect').innerText = ++oldscore;
  if  (oldscore >4) {
    alert('Game Over you lose'); 
  }
}


  resetGameButton.addEventListener('click', resetGame);
  
  function resetGame() {
  oldscore = 0;
  }



/*function getEndGame() {
  if (oldscore > 5) {
    alert('Game Over you win!');
  }
  if  (oldscore >5) {
    alert('Game Over you lose'); 
  }
}

//creats a random competitor (rock, paper, scissors, lizard or spock) to play against
/*function generateComputerChoice() {
    computerChoice = possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
    computerChoiceDisplay.innerHTML= computerChoice;
    
}
*/
//rules of the game
/*const getResult = () => {
    switch (userChoice + computerChoice) {
      case 'scissorspaper':
      case 'paperrock':
      case 'rocklizard':
      case 'lizardspock':
      case 'spockscissors':
      case 'scissorlizard':
      case 'lizardpaper':
      case 'paperspock':
      case 'spockrock':
      case 'rockscissors':    
        resultDisplay.innerHTML = "YOU WIN!"
        break
      case 'paperscissors':
      case 'rockpaper':
      case 'lizardrock':
      case 'spocklizard':
      case 'scissorsspock':
      case 'lizardscissor':
      case 'paperlizard':
      case 'spockpaper':
      case 'rockspock':
      case 'scissorsrock':
        resultDisplay.innerHTML = "YOU LOSE!"
        break
      case 'paperpaper':
      case 'scissorsscissors':
      case 'rockrock':
      case 'lizardlizard':
      case 'spockspock':
        resultDisplay.innerHTML = "ITS A DRAW!"
        break
    }
}*/



