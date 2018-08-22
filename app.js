/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var currentNumb, currentPlayer, player1, player2, newGameBtn, player1Score, player2Score, player1Current, player2Current, diceImg, rollDiceBtn, currentScore1, currentScore2, active0, active1, holdBtn;

currentNumb = 0;
currentPlayer = 1;
player1 = 0;
player2 = 0;


newGameBtn = document.getElementById("newgame");
player1Score = document.getElementById("score-0");
player2Score = document.getElementById("score-1");
player1Current = document.getElementById("current-0");
player2Current = document.getElementById("current-1");
diceImg = document.getElementById("dice");
rollDiceBtn = document.getElementById("rolldice");
currentScore1 = document.getElementById("current-0");
currentScore2 = document.getElementById("current-1");
active0 = document.getElementById("active-0");
active1 = document.getElementById("active-1");
holdBtn = document.getElementById("holdbtn");


newGameBtn.addEventListener("click", gameReset);
rollDiceBtn.addEventListener("click", diceRoll);
holdBtn.addEventListener("click", holdPoints);


function gameReset(){
  player1Score.innerHTML = 0;
  player2Score.innerHTML = 0;
  player1Current.innerHTML = 0;
  player2Current.innerHTML = 0;
  currentPlayer = 1;
  diceImg.style.visibility = "hidden";
  currentNumb = 0;
}



function holdPoints(){
  if (currentPlayer == 1){
    player1  = player1 + currentNumb;
    player1Score.innerHTML = player1;
    currentNumb = 0;
    currentScore1.innerHTML = 0;
    activatePlayer2();
  } else {
    player2 = player2 + currentNumb;
    player2Score.innerHTML = player2;
    currentNumb = 0;
    currentScore2.innerHTML = 0;
    activatePlayer1();
  }
}


function diceRoll(){
  var diceNumb = Math.floor(Math.random() * 6) + 1;
  if (diceNumb >= 2){
    diceImg.src = "dice-" + diceNumb +".png";
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
      activatePlayer2();
    } else {
      currentScore2.innerHTML = currentNumb;
      actiatePlayer1();
    }
  }
}


function activatePlayer2(){
  active0.classList.remove("active");
  active1.classList.add("active");
  currentPlayer = 2;
}

function activatePlayer1(){
  active0.classList.add("active");
  active1.classList.remove("active");
  currentPlayer = 1;
}
gameReset();
