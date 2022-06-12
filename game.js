class Game {
  constructor(game, you, computer) {
  this.game = game;
  this.players = [you, computer];
  this.fighters = [];
  this.message = "";
  }
  setCorrectFighters() {
    var spicyFightersArray = ["iconRock", "iconPaper", "iconScissor", "iconCow", "iconChili"];
    var classicFightersArray = ["iconRock", "iconPaper", "iconScissor"];
    if (this.game === "spicyGameRules") {
      for (var i = 0; i < spicyFightersArray.length; i++) {
        this.fighters.push(spicyFightersArray[i]);
      }
    }
    if (this.game === "classicGameRules") {
      for (var i = 0; i < classicFightersArray.length; i++) {
        this.fighters.push(classicFightersArray[i]);
      }
    }
  }
  checkWinConditions(yourChoice, compChoice) {
    if (yourChoice === "iconRock" && compChoice === "iconScissor" || "iconChili") {
      player1.increaseWins()
    } if (yourChoice === "iconPaper" && compChoice === "iconRock" || "iconChili") {
      player1.increaseWins()
    } if (yourChoice === "iconScissor" && compChoice === "iconPaper" || "iconCow") {
      player1.increaseWins()
    } if (yourChoice === "iconChili" && compChoice === "iconScissor" || "iconCow") {
      player1.increaseWins()
    } if (yourChoice === "iconCow" && compChoice === "iconPaper" || "iconRock") {
      player1.increaseWins()
      return player1.message = "YOU WON"
    } else player2.increaseWins()
    return player2.message = "COMPUTER WON"
}
  checkForDraw(yourChoice, compChoice) {
    if (yourChoice === compChoice) {
      this.message = "DRAW"
    }
  }
}
// when human clicks on icon, function is fired called game.startGame
// in side of function, player 1 and 2 take turns
