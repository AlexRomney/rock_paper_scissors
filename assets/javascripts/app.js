var choices = ['rock', 'paper', 'scissors'];
var result = '';
var winLose = document.getElementById('win-lose');
var winnerCount = document.getElementById('winner-count');
var loserCount = document.getElementById('loser-count');
var tieCount = document.getElementById('tie-count');
var wins = 0;
var losses = 0;
var ties = 0;
var playerBox = document.getElementById('player-box');
var compBox = document.getElementById('comp-box');

function computerChoice() {
  var index = Math.floor(Math.random() * choices.length);
  computer = choices[index];
}

function userChoice(choice) {
  user = choice;
  if (user === 'rock') {
    playerBox.style.backgroundImage = "url('./assets/images/rock_image.png')";
    playerBox.style.backgroundSize = "300px 300px";
  } else if(user === 'paper') {
    playerBox.style.backgroundImage = "url('./assets/images/paper_image.jpeg')";
    playerBox.style.backgroundSize = "300px 300px";
  } else if(user === 'scissors') {
    playerBox.style.backgroundImage = "url('./assets/images/scissor_image.png')";
    playerBox.style.backgroundSize = "300px 300px";
  }
  computerChoice();
  if (computer === 'rock') {
    compBox.style.backgroundImage = "url('./assets/images/rock_image.png')";
    compBox.style.backgroundSize = "300px 300px";
  } else if(computer === 'paper') {
    compBox.style.backgroundImage = "url('./assets/images/paper_image.jpeg')";
    compBox.style.backgroundSize = "300px 300px";
  } else if(computer === 'scissors') {
    compBox.style.backgroundImage = "url('./assets/images/scissor_image.png')";
    compBox.style.backgroundSize = "300px 300px";
  }
  game(user, computer);
}

function game(user, computer) {
 if (user === computer) {
   result = "It's a tie!"
   ties++
 }
 else if (user === 'rock') {
   switch(computer) {
     case 'paper':
       result = 'HA! HA! You Lose!'
       losses++
       break;
     case 'scissors':
       result = 'You Win, But You Got Lucky!'
       wins++
       break;
   }
 } else if(user === 'paper') {
     switch(computer) {
       case 'rock':
         result = 'Boo! You Win!'
         wins++
         break;
       case 'scissors':
           result = 'Loser! You Lose!'
           losses++
         break;
     }
 } else {
   switch(computer) {
     case 'rock':
       result = 'Pffft! You Lose!'
       losses++
       break;
     case 'paper':
       result = 'Ah Man! You Win!'
       wins++
       break;
   }
 }
  winLose.innerText = result;
  winnerCount.innerText = "Wins: " + wins;
  loserCount.innerText = "Losses: " + losses;
  tieCount.innerText = "Ties: " + ties;
}

function getName() {
  var name = prompt('Welcome to Rock, Paper, Scissors! What is your name?');
  if (name === null || name === '') {
    alert('Please put a valid name');
    getName();
  } else {
    var welcome = document.getElementById('welcome');
    welcome.innerText = 'Prepare Yourself ' + name + '!';
  }
}

getName();
