class Game {
  constructor(game) {
  this.game = game;
  this.you = new Player("you");
  this.computer = new Player("computer");
  this.winner;
  }
  checkWinConditions(compChoice) {
    if (this.you.choice === this.computer.choice) {
      this.winner = "DRAW"
    } else if (this.you.choice === "iconRock" && (this.computer.choice === "iconScissor" || this.computer.choice === "iconChili")) {
      this.winner = "YOU"
      this.you.increaseWins();
    } else if (this.you.choice === "iconPaper" && (this.computer.choice === "iconRock" || this.computer.choice === "iconChili")) {
      this.winner = "YOU"
      this.you.increaseWins();
    } else if (this.you.choice === "iconScissor" && (this.computer.choice === "iconPaper" || this.computer.choice === "iconCow")) {
      this.winner = "YOU"
      this.you.increaseWins();
    } else if (this.you.choice === "iconChili" && (this.computer.choice === "iconScissor" || this.computer.choice === "iconCow")) {
      this.winner = "YOU"
      this.you.increaseWins();
    } else if (this.you.choice === "iconCow" && (this.computer.choice === "iconPaper" || this.computer.choice === "iconRock")) {
      this.winner = "YOU"
      this.you.increaseWins();
    } else {
      this.winner = "COMP"
      this.computer.increaseWins();
    }
      displayWinner();
    }
  };
