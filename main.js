// querySelectors
var classicGameRules = document.querySelector(".classic-game-rules");
var spicyGameRules = document.querySelector(".spicy-game-rules");
var buttonChangeGame = document.querySelector(".change-game");
var icons = document.querySelectorAll(".icon");
var gameMode = document.querySelector(".game-mode");
var gameTitle = document.querySelector(".game-title");
var fightersSection = document.querySelector(".fighters-section");
var iconRock = document.querySelector("#icon-rock");
var iconPaper = document.querySelector("#icon-paper");
var iconScissor = document.querySelector("#icon-scissor");
var iconChili = document.querySelector("#icon-chili");
var iconCow = document.querySelector("#icon-cow");
var message = document.querySelector(".message")

// global variables
var player1 = new Player("you");
var player2 = new Player("computer");
var game = new Game();
var compChoice
var yourChoice

// event listeners
window.addEventListener("load", loadingPage)
buttonChangeGame.addEventListener("click", changeGameMode);
classicGameRules.addEventListener("click", chooseClassicGame);
spicyGameRules.addEventListener("click", chooseSpicyGame);
fightersSection.addEventListener("click", clickIcon);


// functions
function show(element) {
  element.classList.remove('hidden');
};

function hide(element) {
  element.classList.add('hidden');
};

function loadingPage() {
  hide(buttonChangeGame)
};

function clickIcon(event) {
  show(buttonChangeGame);
  game.checkWinConditions();
  game.checkForDraw();
  getYourFighter(event);
  console.log(yourChoice);
};

function getYourFighter(event) {
  yourChoice = event.target.id
};

function changeGameMode() {
  show(gameMode)
  show(buttonChangeGame)
  hide(fightersSection)
}

function chooseClassicGame() {
  hide(gameMode);
  hide(buttonChangeGame);
  show(fightersSection);
  gameTitle.innerHTML = "<h3> CHOOSE YOUR FIGHTER </h3>"
  fightersSection.innerHTML = `
  <img class="icon" id="iconRock" src="./assets/rock.svg" alt="rock">
  <img class="icon" id="iconPaper" src="./assets/paper.svg" alt="paper">
  <img class="icon" id="iconScissor" src="./assets/scissor.svg" alt="scissor">
  `
  game = new Game("classicGameRules", player1, player2);
  game.setCorrectFighters()
  compChoice = player2.takeTurn(game.fighters);
  console.log(compChoice);
};

function chooseSpicyGame() {
  hide(gameMode);
  hide(buttonChangeGame);
  show(fightersSection);
  gameTitle.innerHTML = "<h3> CHOOSE YOUR FIGHTER </h3>"
  fightersSection.innerHTML = `
  <img class="icon" id="iconCow" src="./assets/cow.svg" alt="cow">
  <img class="icon" id="iconChili" src="./assets/chili.svg" alt="chili">
  <img class="icon" id="iconRock" src="./assets/rock.svg" alt="rock">
  <img class="icon" id="iconPaper" src="./assets/paper.svg" alt="paper">
  <img class="icon" id="iconScissor" src="./assets/scissor.svg" alt="scissor">
  `
  game = new Game("spicyGameRules", player1, player2);
  game.setCorrectFighters()
  compChoice = player2.takeTurn(game.fighters);
  console.log(compChoice);
};


// take comp choice and user choice
// updates score and returns the score message
// dom looks at game score

/*

function getScore(event) {
userChoice = event.target.id
compChoice
use user and comp choice to get message from win conditions
display the message

if player chooses rock && comp choses scissors or chili
player wins.

if player chooses paper && comp choses rock or cow
pl WINS

else players loses

*/

// function checkWinConditions(event) {
//   // console.log(compChoice);
//   if (event.target.id === "iconRock" && compChoice === "iconScissor") {
//     gameTitle.innerHTML = "<h3> YOU WON </h3>"
//   } else if (event.target.id === "iconRock" && compChoice === "iconPaper") {
//     gameTitle.innerHTML = "<h3> YOU LOST </h3>"
//   } else if (event.target.id === "iconRock" && compChoice === "iconRock") {
//     gameTitle.innerHTML = "<h3> DRAW </h3>"
//   } else if (event.target.id === "iconRock" && compChoice === "iconChili") {
//     gameTitle.innerHTML = "<h3> YOU WON </h3>"
//   } else if (event.target.id === "iconRock" && compChoice === "iconCow") {
//     gameTitle.innerHTML = "<h3> YOU LOST </h3>"
//   } else if (event.target.id === "iconPaper" && compChoice === "iconRock") {
//     gameTitle.innerHTML = "<h3> YOU WON </h3>"
//   } else if (event.target.id === "iconPaper" && compChoice === "iconScissor") {
//     gameTitle.innerHTML = "<h3> YOU LOST </h3>"
//   } else if (event.target.id === "iconPaper" && compChoice === "iconPaper") {
//     gameTitle.innerHTML = "<h3> DRAW </h3>"
//   } else if (event.target.id === "iconPaper" && compChoice === "iconCow") {
//     gameTitle.innerHTML = "<h3> YOU WON </h3>"
//   } else if (event.target.id === "iconPaper" && compChoice === "iconChili") {
//     gameTitle.innerHTML = "<h3> YOU LOST </h3>"
//   } else if (event.target.id === "iconScissor" && compChoice === "iconPaper") {
//     gameTitle.innerHTML = "<h3> YOU WON </h3>"
//   } else if (event.target.id === "iconScissor" && compChoice === "iconRock") {
//     gameTitle.innerHTML = "<h3> YOU LOST </h3>"
//   } else if (event.target.id === "iconScissor" && compChoice === "iconScissor") {
//     gameTitle.innerHTML = "<h3> DRAW </h3>"
//   } else if (event.target.id === "iconScissor" && compChoice === "iconChili") {
//     gameTitle.innerHTML = "<h3> YOU WON </h3>"
//   } else if (event.target.id === "iconScissor" && compChoice === "iconCow") {
//     gameTitle.innerHTML = "<h3> YOU LOST </h3>"
//   } else if (event.target.id === "iconChili" && compChoice === "iconRock") {
//     gameTitle.innerHTML = "<h3> YOU WON </h3>"
//   } else if (event.target.id === "iconChili" && compChoice === "iconScissor") {
//     gameTitle.innerHTML = "<h3> YOU LOST </h3>"
//   } else if (event.target.id === "iconChili" && compChoice === "iconChili") {
//     gameTitle.innerHTML = "<h3> DRAW </h3>"
//   } else if (event.target.id === "iconChili" && compChoice === "iconCow") {
//     gameTitle.innerHTML = "<h3> YOU WON </h3>"
//   } else if (event.target.id === "iconChili" && compChoice === "iconPaper") {
//     gameTitle.innerHTML = "<h3> YOU LOST </h3>"
//   } else if (event.target.id === "iconCow" && compChoice === "iconScissor") {
//     gameTitle.innerHTML = "<h3> YOU WON </h3>"
//   } else if (event.target.id === "iconCow" && compChoice === "iconPaper") {
//     gameTitle.innerHTML = "<h3> YOU LOST </h3>"
//   } else if (event.target.id === "iconCow" && compChoice === "iconCow") {
//     gameTitle.innerHTML = "<h3> DRAW </h3>"
//   } else if (event.target.id === "iconCow" && compChoice === "iconChili") {
//     gameTitle.innerHTML = "<h3> YOU WON </h3>"
//   } else if (event.target.id === "iconCow" && compChoice === "iconCow") {
//     gameTitle.innerHTML = "<h3> YOU LOST </h3>"
//   }
// }

// function startTime() {
//   const date = new Date();
//   document.getElementById("txt").innerHTML = date.toLocaleTimeString();
//   setTimeout(function() {startTime()}, 1000);
// }

// function addWins() {
//   if (gameTitle === "YOU WON") {
//     return player.increaseWins()
//   }
// }

// function showMessage() {
//   game.message =
// }


/*
set up event listeners for icons as clicks
make chooseFighterForHuman function
we need to know which icon clicked and call take turn method.
add player1.takeTurn(which ever event was targeted)
return fighters so we can see human choice


REFACTOR my checkWinConditions function (excessive amount of else ifs)
Use setTimeout function (where to set it, and on which function)
use increaseWins for each win (within another function, how to add to
that specific player class)

*/
