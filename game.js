class Game {
  // constructor(game, you, computer) {
  constructor(game) {
  this.game = game;
  // this.players = [you, computer];
  this.you = new Player("you")
  this.computer = new Player("computer")
  this.fighters = [];
  this.winner;
  }
  setCorrectFighters() {
    var spicyFightersArray = ["iconRock", "iconPaper", "iconScissor", "iconCow", "iconChili"];
    var classicFightersArray = ["iconRock", "iconPaper", "iconScissor"];
    if (this.game === "spicyGame") {
      for (var i = 0; i < spicyFightersArray.length; i++) {
        this.fighters.push(spicyFightersArray[i]);
      }
    }
    if (this.game === "classicGame") {
      for (var i = 0; i < classicFightersArray.length; i++) {
        this.fighters.push(classicFightersArray[i]);
      }
    }
  }
  checkWinConditions(compChoice) {
    console.log("comp choice =", compChoice)
    console.log("player 1=", this.you.choice)
    if (this.you.choice === compChoice) {
      this.winner = "DRAW"
      // this.you.increaseWins()
    } else if (this.you.choice === "iconRock" && (compChoice === "iconScissor" || compChoice === "iconChili")) {
      this.winner = "YOU"
      // this.you.increaseWins()
    } else if (this.you.choice === "iconPaper" && (compChoice === "iconRock" || compChoice === "iconChili")) {
      this.winner = "YOU"
      // this.you.increaseWins()
    } else if (this.you.choice === "iconScissor" && (compChoice === "iconPaper" || compChoice === "iconCow")) {
      this.winner = "YOU"
      // this.you.increaseWins()
    } else if (this.you.choice === "iconChili" && (compChoice === "iconScissor" || compChoice === "iconCow")) {
      this.winner = "YOU"
      // this.you.increaseWins()
    } else if (this.you.choice === "iconCow" && (compChoice === "iconPaper" || compChoice === "iconRock")) {
      this.winner = "YOU"
      // this.you.increaseWins()
    } else {
      this.winner = "COMP"
      this.computer.increaseWins()
      console.log("comp choice =", compChoice)
      console.log("player 1=", player1.choice)
    }
      displayWinner();
    }
  // checkForDraw(yourChoice, compChoice) {
  //   if (yourChoice === compChoice) {
  //     this.winner = "DRAW"
  //   }
  // }
}
// when human clicks on icon, function is fired called game.startGame
// in side of function, player 1 and 2 take turns
