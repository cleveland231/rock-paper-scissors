class Player {
  constructor(name, icon) {
    this.name = name;
    this.token = icon;
    this.wins = 0;
  }
  takeTurn(fighters) {
    // if (this.name === "you") {
    // return event.target.id
    // } else
    if (this.name === "computer") {
    return this.getRandomFighterFromArray(fighters);
    }
  }
// telling comp to choose
  getRandomFighterFromArray(fighters) {
    var randomArrayIndex = Math.floor(Math.random() * fighters.length);
    return fighters[randomArrayIndex];
  }
  increaseWins() {
    this.wins ++
  }
}
