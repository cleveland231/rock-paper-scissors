// query selectors
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
var spicyGame = document.querySelector("#spicy-game");
var classicGame = document.querySelector("#classic-game");
var computerWins = document.querySelector(".computer-wins");
var yourWins = document.querySelector(".your-wins");
var winnerIcons = document.querySelector(".winner-icons");

// global variables
var game = new Game();
var spicyFightersArray = ["iconRock", "iconPaper", "iconScissor", "iconCow", "iconChili"];
var classicFightersArray = ["iconRock", "iconPaper", "iconScissor"];

// event listeners
window.addEventListener("load", loadingPage);
buttonChangeGame.addEventListener("click", changeGameMode);
classicGameRules.addEventListener("click", chooseClassicGame);
spicyGame.addEventListener("click", chooseSpicyGame);
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
  hide(fightersSection)
  show(buttonChangeGame);
  getFighters(event);
  game.checkWinConditions();
  setTimeout(resetBoard, 2000)
  show(winnerIcons)
};

function displayWinner() {
  displayWinnerScreen()
  if (game.winner === "YOU") {
    gameTitle.innerHTML = "<h1> YOU WON! </h1>"
    yourWins.innerText = `WINS: ${game.you.wins}`
  } else if (game.winner === "COMP") {
    gameTitle.innerHTML = "<h1> COMPUTER WON!  </h1>"
    computerWins.innerText = `WINS: ${game.computer.wins}`
  } else {
    gameTitle.innerHTML = "<h1> DRAW </h1>"
    }
  }

function displayWinnerScreen() {
  winnerIcons.innerHTML = `
  <h3> YOU - </h3>
  <img class="win-icons" src="./assets/${game.you.choice}.svg">
  <h2> vs </h2>
  <img class="win-icons" src="./assets/${game.computer.choice}.svg">
  <h3> - COMPUTER </h3>
  `
}

function changeGameMode() {
  show(gameMode)
  hide(buttonChangeGame)
  hide(fightersSection)
  gameTitle.innerHTML = "<h3> CHOOSE YOUR GAME </h3>"
}

function getFighters(event) {
  game.you.choice = event.target.id
  game.computer.setCorrectCompFighters()
};

function chooseClassicGame(event) {
  hide(gameMode);
  show(buttonChangeGame);
  show(fightersSection);
  gameTitle.innerHTML = "<h3> CHOOSE YOUR FIGHTER </h3>"
  fightersSection.innerHTML = `
  <img class="icon" id="iconRock" src="./assets/iconRock.svg" alt="rock">
  <img class="icon" id="iconPaper" src="./assets/iconPaper.svg" alt="paper">
  <img class="icon" id="iconScissor" src="./assets/iconScissor.svg" alt="scissor">
  `
  game.game = "classicGame"
};

function chooseSpicyGame(event) {
  hide(gameMode);
  show(buttonChangeGame);
  show(fightersSection);
  gameTitle.innerHTML = "<h3> CHOOSE YOUR FIGHTER </h3>"
  fightersSection.innerHTML = `
  <img class="icon" id="iconCow" src="./assets/iconCow.svg" alt="cow">
  <img class="icon" id="iconChili" src="./assets/iconChili.svg" alt="chili">
  <img class="icon" id="iconRock" src="./assets/iconRock.svg" alt="rock">
  <img class="icon" id="iconPaper" src="./assets/iconPaper.svg" alt="paper">
  <img class="icon" id="iconScissor" src="./assets/iconScissor.svg" alt="scissor">
  `
  game.game = "spicyGame"
};

function resetBoard() {
  gameTitle.innerHTML = ""
  show(fightersSection)
  hide(gameMode)
  hide(winnerIcons)
};
