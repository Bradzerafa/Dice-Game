/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/



var newGameBtn = document.getElementById("newgame");
var player1Score = document.getElementById("score-0");
var player2Score = document.getElementById("score-1");
var player1Current = document.getElementById("current-0");
var player2Current = document.getElementById("current-1");
var diceImg = document.getElementById("dice");


newGameBtn.addEventListener("click", gameReset);



function diceRoll(){
  
}


function gameReset(){
  player1Score.innerHTML = 0;
  player2Score.innerHTML = 0;
  player1Current.innerHTML = 0;
  player2Current.innerHTML = 0;
  diceImg.style.visibility = "hidden";
};
