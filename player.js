class Player {
  constructor(name, icon) {
    this.name = name;
    this.token = icon;
    this.wins = 0;
  }
  saveWinsToStorage() {
    return this.wins++
  }
  takeTurn() {

  }
}
