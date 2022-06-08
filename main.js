// querySelectors

var classicGameRules = document.querySelector(".classic-game-rules");
var spicyGameRules = document.querySelector(".spicy-game-rules");
var buttonChangeGame = document.querySelector(".change-game");
var rockIcon = document.querySelector(".rock-icon");
var paperIcon = document.querySelector(".paper-icon");
var scissorIcon = document.querySelector(".scissor-icon");
var chiliIcon = document.querySelector(".chili-icon");
var cowIcon = document.querySelector(".cow-icon");
var gameMode = document.querySelector(".game-mode");
var gameTitle = document.querySelector(".game-title");
var classicFighters = document.querySelector(".classic-fighters");
var spicyFighters = document.querySelector(".spicy-fighters");

// global variables

var player1 = new Player("you", "./assets/you.svg")
var player2 = new Player("computer", "./assets/computer.svg")

// event listeners

// window.addEventListener("load", loadingPage)
// buttonChangeGame.addEventListener("click", changeGameMode);
classicGameRules.addEventListener("click", chooseClassicGame);
spicyGameRules.addEventListener("click", chooseSpicyGame);

// functions

function chooseClassicGame() {
  gameTitle.innerHTML = "<h3> CHOOSE YOUR FIGHTER </h3>"
  classicFighters.innerHTML = `
  <img class="rock-icon" src="./assets/rock.svg" alt="rock">
  <img class="paper-icon" src="./assets/paper.svg" alt="paper">
  <img class="scissor-icon" src="./assets/scissor.svg" alt="scissor">
  `
  var game = new Game("classicGameMode", player1, player2);
  hide(spicyGameRules);
  console.log(game.players);
  console.log(game);
}

function chooseSpicyGame() {
  gameTitle.innerHTML = "<h3> CHOOSE YOUR FIGHTER </h3>"
  spicyFighters.innerHTML = `
  <img class="cow-icon" src="./assets/cow.svg" alt="cow">
  <img class="chili-icon" src="./assets/chili.svg" alt="chili">
  <img class="rock-icon" src="./assets/rock.svg" alt="rock">
  <img class="paper-icon" src="./assets/paper.svg" alt="paper">
  <img class="scissor-icon" src="./assets/scissor.svg" alt="scissor">
  `
  var game = new Game("spicyGameMode", player1, player2);
  hide(classicGameRules);
  console.log(game.players);
  console.log(game);
}


/*
gios
make rules for each icon
give each icon a value of number? each number can be less/greater
for each outcome, values change? if icon is clicked, value is assigned. or from start?

get console log of fighters of correct game.


*/













function show(element) {
  element.classList.remove('hidden');
};

function hide(element) {
  element.classList.add('hidden');
}

// function changeGameMode() {
//   gameTitle.innerHTML = "<h3> CHOOSE YOUR GAME </h3>"
//   show(spicyGame)
//   show(classicGame)
//   hide(classicFighters)
//   hide(spicyFighters)
// }




// window.addEventListener("load", loadingPage)
// buttonChangeGame.addEventListener("click", changeGameMode);
// classicGame.addEventListener("click", chooseClassicGame);
// spicyGame.addEventListener("click", chooseSpicyGame);
//
// function loadingPage(event) {
//   event.preventDefault()
//   hide(spicyFighters)
//   hide(classicFighters)
//   hide(buttonChangeGame)
// }
//
// function chooseClassicGame() {
//   gameTitle.innerHTML = "<h3> CHOOSE YOUR FIGHTER </h3>"
//   hide(spicyGame)
//   hide(classicGame)
//   show(classicFighters)
//   show(buttonChangeGame)
//   var game = new Game("classicGameMode", player1, player2);
//   console.log(game.players);
// }
//
// function chooseSpicyGame() {
//   gameTitle.innerHTML = "<h3> CHOOSE YOUR FIGHTER </h3>"
//   hide(spicyGame)
//   hide(classicGame)
//   show(spicyFighters)
//   show(buttonChangeGame)
//   var game = new Game("spicyGameMode", player1, player2);
//   console.log(game.players);
// }
