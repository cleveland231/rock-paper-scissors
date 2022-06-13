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
var player1 = new Player("you");
var player2 = new Player("computer");
var game = new Game();
var compChoice
// var yourChoice

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

function clickIcon() {
  show(buttonChangeGame);
  // getYourFighter(event);
  game.checkWinConditions();
  // game.checkForDraw();
  // displayWinner();
  // console.log(yourChoice);
  // console.log(compChoice);
  // setTimeout(resetBoard, 3000)
};



function changeGameMode() {
  show(gameMode)
  show(buttonChangeGame)
  hide(fightersSection)
}

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
  // game = new Game("classicGameRules", player1, player2);
  // game = new Game("classicGameRules");
  switchGames(event)
  game.setCorrectFighters()
  compChoice = player2.takeTurn(game.fighters);
  console.log(compChoice);
};

function switchGames(event) {
  if (event.target.id === "classicGame") {
    game.game = "classicGame"
  } if (event.target.id === "spicyGame") {
    game.game = "spicyGame"
  }
}

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
  // game = new Game("spicyGameRules", player1, player2);
  // game = new Game("spicyGameRules");
  switchGames(event)
  game.setCorrectFighters()
  compChoice = player2.takeTurn(game.fighters);
  console.log(compChoice);
};

function displayWinner() {
  console.log("start", game.winner)
  if (game.winner === "YOU") {
    gameTitle.innerHTML = "<h3> YOU WON </h3>"
  } else if (game.winner === "COMP") {
    gameTitle.innerHTML = "<h3> COMPUTER WON </h3>"
  } else {
    gameTitle.innerHTML = "<h3> DRAW </h3>"
    }
  }

  // function resetBoard() {
  //   gameTitle = ""
  //   hide(buttonChangeGame)
  //   hide(fighters)
  //   show(gameMode)
  // }

  // function getYourFighter(event) {
  //   yourChoice = event.target.id
  // };

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


if (yourChoice === "iconRock" && compChoice === "iconScissor" || "iconChili") ||
(yourChoice === "iconPaper" && compChoice === "iconRock" || "iconChili") ||
(yourChoice === "iconScissor" && compChoice === "iconPaper" || "iconCow") ||
(yourChoice === "iconChili" && compChoice === "iconScissor" || "iconCow") ||
(yourChoice === "iconCow" && compChoice === "iconPaper" || "iconRock")) {
// this.message = "YOU WON"
return this.winner = "YOU"
console.log("THEwinner", this.winner)
} else {
// return this.message = "COMPUTER WON"
return this.winner = "COMP"
console.log("winnerchicken", this.winner)


if (yourChoice === "iconRock" && compChoice === "iconScissor" || "iconChili") {
  this.winner = "YOU"
} if (yourChoice === "iconPaper" && compChoice === "iconRock" || "iconChili") {
  this.winner = "YOU"
} if (yourChoice === "iconScissor" && compChoice === "iconPaper" || "iconCow") {
  this.winner = "YOU"
} if (yourChoice === "iconChili" && compChoice === "iconScissor" || "iconCow") {
  this.winner = "YOU"
} if (yourChoice === "iconCow" && compChoice === "iconPaper" || "iconRock") {
this.winner = "YOU";
} else {
this.winner = "COMP";
}
}

if (yourChoice === "iconRock" && compChoice === "iconScissor" || "iconChili") {
  this.winner = "YOU"
} else if (yourChoice === "iconPaper" && (compChoice === "iconRock" || compChoice === "iconChili")) {
  this.winner = "YOU"
} else if (yourChoice === "iconScissor" && (compChoice === "iconPaper" || compChoice === "iconCow")) {
  this.winner = "YOU"
} else if (yourChoice === "iconChili" && (compChoice === "iconScissor" || compChoice === "iconCow")) {
  this.winner = "YOU"
} else if (yourChoice === "iconCow" && (compChoice === "iconPaper" || compChoice === "iconRock")) {
  this.winner = "YOU"
} else {
  this.winner = "COMP";
}
}

if ((yourChoice === "iconRock" && compChoice === "iconScissor" || compChoice === "iconChili") ||
(yourChoice === "iconPaper" && (compChoice === "iconRock" || compChoice === "iconChili")) ||
(yourChoice === "iconScissor" && (compChoice === "iconPaper" || compChoice === "iconCow")) ||
(yourChoice === "iconChili" && (compChoice === "iconScissor" || compChoice === "iconCow")) ||
(yourChoice === "iconCow" && (compChoice === "iconPaper" || compChoice === "iconRock"))) {
  this.winner = "YOU"
} else {
  this.winner = "COMP"
}
}


if (yourChoice === "iconRock" && (compChoice === "iconScissor" || compChoice === "iconChili")) {
  this.winner = "YOU"
} else if (yourChoice === "iconPaper" && (compChoice === "iconRock" || compChoice === "iconChili")) {
  this.winner = "YOU"
} else if (yourChoice === "iconScissor" && (compChoice === "iconPaper" || compChoice === "iconCow")) {
  this.winner = "YOU"
} else if (yourChoice === "iconChili" && (compChoice === "iconScissor" || compChoice === "iconCow")) {
  this.winner = "YOU"
} else if (yourChoice === "iconCow" && (compChoice === "iconPaper" || compChoice === "iconRock")) {
  return this.winner = "YOU"
} else {
  return this.winner = "COMP"
  }
}
*/
