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

// global variables
var player1 = new Player("you", "./assets/you.svg");
var player2 = new Player("computer", "./assets/computer.svg");


// event listeners
// window.addEventListener("load", loadingPage)
// buttonChangeGame.addEventListener("click", changeGameMode);
classicGameRules.addEventListener("click", chooseClassicGame);
spicyGameRules.addEventListener("click", chooseSpicyGame);
fightersSection.addEventListener("click", clickIcon);

// functions
function clickIcon() {
  game.checkWinConditions()
}

function chooseClassicGame() {
  gameTitle.innerHTML = "<h3> CHOOSE YOUR FIGHTER </h3>"
  fightersSection.innerHTML = `
  <img class="icon" id="iconRock" src="./assets/rock.svg" alt="rock">
  <img class="icon" id="iconPaper" src="./assets/paper.svg" alt="paper">
  <img class="icon" id="iconScissor" src="./assets/scissor.svg" alt="scissor">
  `
  var game = new Game("classicGameRules", player1, player2);
  game.setCorrectFighters()
  var compChoice = player2.takeTurn(game.fighters);
  console.log(compChoice);
  hide(gameMode);
}

function chooseSpicyGame() {
  gameTitle.innerHTML = "<h3> CHOOSE YOUR FIGHTER </h3>"
  fightersSection.innerHTML = `
  <img class="icon" id="iconCow" src="./assets/cow.svg" alt="cow">
  <img class="icon" id="iconChili" src="./assets/chili.svg" alt="chili">
  <img class="icon" id="iconRock" src="./assets/rock.svg" alt="rock">
  <img class="icon" id="iconPaper" src="./assets/paper.svg" alt="paper">
  <img class="icon" id="iconScissor" src="./assets/scissor.svg" alt="scissor">
  `
  var game = new Game("spicyGameRules", player1, player2);
  game.setCorrectFighters()
  var compChoice = player2.takeTurn(game.fighters);
  console.log(compChoice);
}


/*
set up event listeners for icons as clicks
make chooseFighterForHuman function
we need to know which icon clicked and call take turn method.
add player1.takeTurn(which ever event was targeted)
return fighters so we can see human choice

somthing to think about is game class







gios
make rules for each icon
give each icon a value of number? each number can be less/greater
for each outcome, values change? if icon is clicked, value is assigned. or from start?

get console log of fighters of correct game.

goal:
set up classes correctly

input:
for game:
player1, player2, what turn, fighters, rules

output: populated array


set up: game.js






goal: write game logic

input: array values

outputs: game results

set up:

if (event.target == rock) {
var compAnswer == `${paper}`, your win is false || rock is draw || scissors, win is true

if (target == paper) {
var compAnswer == rock, your win is false || paper is draw || scissors, win is true

if (target == scissor) {
var compAnswer == rock, your win is false  || scissors is draw || paper, win is true

if (target == chili ) {
var compAnswer =
YourbooleanWins =
rock= false
paper= true
scissor= false
chili= draw
cow= true
}

if (target == cow) {
var compAnswer = `${}`
YourbooleanWins =
rock= true
paper= true
scissor= true
chili= false
cow= draw
}




*/


function show(element) {
  element.classList.remove('hidden');
};

function hide(element) {
  element.classList.add('hidden');
}
