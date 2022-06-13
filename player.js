class Player {
  constructor(name, icon) {
    this.name = name;
    this.token = icon;
    this.wins = 0;
    this.choice = "";
  }
  setCorrectCompFighters() {
    if (game.game === "spicyGame") {
      game.computer.choice = spicyFightersArray[this.getRandomFighterFromArray(spicyFightersArray)]
      console.log(game.computer.choice);
    } else if (game.game === "classicGame") {
      game.computer.choice = classicFightersArray[this.getRandomFighterFromArray(classicFightersArray)]
    }
  }
  getRandomFighterFromArray(array) {
    return Math.floor(Math.random() * array.length);
  }
  increaseWins() {
    this.wins ++
  }
}
