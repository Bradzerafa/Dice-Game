/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var currentNumb = 0;
var currentPlayer = 1;


var newGameBtn = document.getElementById("newgame");
var player1Score = document.getElementById("score-0");
var player2Score = document.getElementById("score-1");
var player1Current = document.getElementById("current-0");
var player2Current = document.getElementById("current-1");
var diceImg = document.getElementById("dice");
var rollDiceBtn = document.getElementById("rolldice");
var currentScore1 = document.getElementById("current-0");
var currentScore2 = document.getElementById("current-1");
var active0 = document.getElementById("active-0");
var active1 = document.getElementById("active-1");


newGameBtn.addEventListener("click", gameReset);
rollDiceBtn.addEventListener("click", diceRoll);




function holdPoints(){

}


function diceRoll(){
  var diceNumb = Math.floor(Math.random() * 6) + 1;

if (diceNumb >= 2){
  if (diceNumb == 2){
    diceImg.src = "dice-2.png";
  } else if (diceNumb == 3){
    diceImg.src = "dice-3.png";
  } else if (diceNumb == 4){
    diceImg.src = "dice-4.png";
  } else if (diceNumb == 5){
    diceImg.src = "dice-5.png";
  } else {
    diceImg.src = "dice-6.png";
  }
  diceImg.style.visibility = "";
  currentNumb = currentNumb + diceNumb;

  if (currentPlayer == 1){
    currentScore1.innerHTML = currentNumb;
  } else {
    currentScore2.innerHTML = currentNumb;
  }

} else {
    diceImg.style.visibility = "hidden";
    currentNumb = 0;

    if (currentPlayer == 1){
      currentScore1.innerHTML = currentNumb;
      currentPlayer = 2;
      active0.classList.remove = "active player-name::after";
      active1.className = " active";


    } else {
      currentScore2.innerHTML = currentNumb;
      currentPlayer = 1;

    }
  }


  console.log(diceNumb);
  console.log(currentNumb);

}




function gameReset(){
  player1Score.innerHTML = 0;
  player2Score.innerHTML = 0;
  player1Current.innerHTML = 0;
  player2Current.innerHTML = 0;
  diceImg.style.visibility = "hidden";
  currentNumb = 0;
};
