class Player {
  constructor(name, icon) {
    this.name = name;
    this.token = icon;
    this.wins = 0;
    this.choice;
  }
  takeTurn(fighters, event) {
    if (this.name === "you") {
    return this.choice = event.target.id
  } else if (this.name === "computer") {
    return this.choice = this.getRandomFighterFromArray(fighters);
    // console.log("from take turn function:",this.choice);
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

/*
goal is to

*/
