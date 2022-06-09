class Game {
  constructor(game, you, computer) {
  this.game = game;
  this.players = [you, computer];
  this.fighters = [];
  this.spicyTurn = false;
  }
  trackGameData() {
    // when human clicks on icon, function is fired called game.startGame
    // in side of function, player 1 and 2 take turns
  }
  checkWinConditions(event) {
    console.log(compChoice);
    if (event.target.id == rock && compChoice == scissors) {

    }
  }
  checkForDraw() {
    // if (player1.fighter === ) {
    // }
  }
  resetGame() {
    setTimeout()
  }
  setCorrectFighters() {
    var spicyFightersArray = ["rock", "paper", "scissor", "cow", "chili"];
    var classicFightersArray = ["rock", "paper", "scissor"];
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
