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
var message = document.querySelector(".message");
var spicyGame = document.querySelector("#spicy-game");
var classicGame = document.querySelector("#classic-game")

// global variables
var game = new Game();
var compChoice
var spicyFightersArray = ["iconRock", "iconPaper", "iconScissor", "iconCow", "iconChili"];
var classicFightersArray = ["iconRock", "iconPaper", "iconScissor"];

// event listeners
window.addEventListener("load", loadingPage)
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
  show(buttonChangeGame);
  getYourFighter(event);
  console.log(game.you.choice)
  game.checkWinConditions();
  displayWinner();
  // console.log(yourChoice);
  // console.log(compChoice);
  // setTimeout(resetBoard, 3000)
};

function displayWinner() {
  // console.log("start", game.winner)
  if (game.winner === "YOU") {
    gameTitle.innerHTML = "<h3> YOU WON </h3>"
  } else if (game.winner === "COMP") {
    gameTitle.innerHTML = "<h3> COMPUTER WON </h3>"
  } else {
    gameTitle.innerHTML = "<h3> DRAW </h3>"
    }
  }

function changeGameMode() {
  show(gameMode)
  show(buttonChangeGame)
  hide(fightersSection)
}

function getYourFighter(event) {
  game.you.choice = event.target.id
};

function chooseClassicGame(event) {
  hide(gameMode);
  hide(buttonChangeGame);
  show(fightersSection);
  gameTitle.innerHTML = "<h3> CHOOSE YOUR FIGHTER </h3>"
  fightersSection.innerHTML = `
  <img class="icon" id="iconRock" src="./assets/rock.svg" alt="rock">
  <img class="icon" id="iconPaper" src="./assets/paper.svg" alt="paper">
  <img class="icon" id="iconScissor" src="./assets/scissor.svg" alt="scissor">
  `
  game.game = "classicGame"
  game.computer.setCorrectCompFighters()
  console.log(game.computer.choice);
};

function chooseSpicyGame(event) {
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
  game.game = "spicyGame"
  game.computer.setCorrectCompFighters()
  // console.log(game.computer.choice);
};

  // function resetBoard() {
  //   gameTitle = ""
  //   hide(buttonChangeGame)
  //   hide(fighters)
  //   show(gameMode)
  // }


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
