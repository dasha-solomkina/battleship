class Ship {
  constructor(length) {
    this.length = length;
    this.hit = 0;
    this.sunk = false;
  }
  toHit() {
    return this.hit++;
  }
  isSunk() {
    if (this.hit === this.length) {
      return true;
    }
  }
}

const fiveShip = new Ship(5);
const fourShip = new Ship(4);
const threeShip = new Ship(3);

const SIZE = 10;
class Gameboard {
  constructor() {
    this.board = [];
    this.missedShots = [];
    // this.initialize();
  }

  initialize() {
    for (let i = 0; i < SIZE; i++) {
      this.board[i] = [];
      this.missedShots[i] = [];
      for (let j = 0; j < SIZE; j++) {
        this.board[i][j] = null;
        this.missedShots[i][j] = false;
      }
    }
  }

  placeShip(x, y, ship) {
    for (let i = 0; i < ship.length; i++) {
      if (this.board[x][y + i] !== null) {
        return false;
      } else {
        this.board[x][y + i] = ship;
      }
    }
  }
}

const h = new Gameboard();
h.initialize();
h.placeShip(3, 4, fiveShip);
h.placeShip(5, 6, fourShip);
h.placeShip(8, 3, threeShip);
console.log(h);
