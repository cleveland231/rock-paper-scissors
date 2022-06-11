class Game {
  constructor(game, you, computer) {
  this.game = game;
  this.players = [you, computer];
  this.fighters = [];
  }
  checkForDraw(event) {
    // if (event.target.id === compChoice) {
    //   return "draw"
    // }
  }
  resetGame() {
    setTimeout()
  }
  setCorrectFighters() {
    var spicyFightersArray = ["iconRock", "iconPaper", "iconScissor", "iconCow", "iconChili"];
    var classicFightersArray = ["iconRock", "iconPaper", "iconScissor"];
    console.log(this.game);
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
}

// when human clicks on icon, function is fired called game.startGame
// in side of function, player 1 and 2 take turns
