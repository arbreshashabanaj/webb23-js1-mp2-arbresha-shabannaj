let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result');
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');
let userName = '';

function startGame() {
  userName = document.getElementById('nameInput').value;
  document.getElementById('nameInput').disabled = true; 
}



function getComputerChoice() {
const choices = ['rock', 'paper', 'scissors'];
const randomNumber = Math.floor(Math.random() * 3);
return choices[randomNumber];
}

function convertCase(anythingIwant) {
if (anythingIwant === 'paper') return 'Paper';
if (anythingIwant === 'scissors') return 'Scissors';
return 'Rock';
}


function win(user, computer) {
userScore++;
userScore_span.innerHTML = userScore;
result_div.innerHTML = `<p>${convertCase(user)}${userName} beats ${convertCase(computer)}${compName}. You win!</p>`;
const roundStatus = document.getElementById(user);
roundStatus.classList.add('winningStyles');
setTimeout(() => roundStatus.classList.remove('winningStyles'), 300);
checkGameEnd();
}

function loses(user, computer) {
computerScore++;

computerScore_span.innerHTML = computerScore;

result_div.innerHTML = `<p>${convertCase(computer)}${compName} beats ${convertCase(user)}${userName}. You lose!</p>`;
const roundStatus = document.getElementById(user);
roundStatus.classList.add('losingStyles');
setTimeout(() => roundStatus.classList.remove('losingStyles'), 300);
checkGameEnd();
}



function game(userChoice) {
const computerChoice = getComputerChoice();

switch (userChoice + computerChoice) {
case 'paperrock':
case 'rockscissors':
case 'scissorspaper':
win(userChoice, computerChoice);

break;
case 'rockpaper':
case 'scissorsrock':
case 'paperscissors':
loses(userChoice, computerChoice);

break;
case 'rockrock':
case 'scissorsscissors':
case 'paperpaper':
draw(userChoice, computerChoice);
console.log("draw");
break;
}
}


function checkGameEnd() {
    if (userScore === 3 || computerScore === 3) {
      
      endGame();
    }
  }
 
  function win(user, computer) {
    
    userScore++;
    userScore_span.innerHTML = userScore;
    // ...
    checkGameEnd();
  }
  
  function loses(user, computer) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    // ...
    checkGameEnd();
  }
  
  function draw(user, computer) {
    // ...
    checkGameEnd();
  } 


  function restartGame() {
    userScore = 0;
    computerScore = 0;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
   
    rock_div.addEventListener('click', rockClickHandler);
    paper_div.addEventListener('click', paperClickHandler);
    scissors_div.addEventListener('click', scissorsClickHandler);
  }


  function endGame() {
    rock_div.removeEventListener('click', rockClickHandler);
    paper_div.removeEventListener('click', paperClickHandler);
    scissors_div.removeEventListener('click', scissorsClickHandler);
  

    if (userScore > computerScore) {
        result_div.innerHTML += `<p>Congratulations, ${userName}! Du vann spelet!</p>`;
        alert(`Congratulations, ${userName}! Du vann spelet!`);
      } else if (userScore < computerScore) {
      
        result_div.innerHTML += `<p>Tyvärr, ${userName}! Du förlorade spelet.</p>`;
        alert(`Tyvärr, ${userName}! Du förlorade spelet.`);
      } else {
        result_div.innerHTML += '<p>The game ended in a draw.</p>';
        alert('The game ended in a draw.');
      }
      restartGame();
    }
    



function main() {
        rock_div.addEventListener('click', rockClickHandler);
        paper_div.addEventListener('click', paperClickHandler);
        scissors_div.addEventListener('click', scissorsClickHandler);
      }

function rockClickHandler() {
    game('rock');
  }
  
  function paperClickHandler() {
    game('paper');
  }
  
  function scissorsClickHandler() {
    game('scissors'); 
  }
  
  
main();