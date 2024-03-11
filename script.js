class Ship {
  constructor(length) {
    this.length = length;
    this.hit = [];
    this.sunk = false;
  }
  toHit(arr) {
    return this.hit.push(arr);
  }
  isSunk() {
    if (this.hit.length === this.length) {
      return (this.sunk = true);
    }
  }
}

const fiveShip = new Ship(5);
const fourShip = new Ship(4);
const threeShip = new Ship(3);
const ships = [fiveShip, fourShip, threeShip];

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

  receiveAttack(x, y) {
    if (this.missedShots[x][y] == true) {
      return false;
    }
    if (this.board[x][y] == null) {
      this.missedShots[x][y] = true;
    } else {
      let ship = this.board[x][y];
      const alreadyShot = ship.hit.some(
        (sub) => JSON.stringify(sub) === JSON.stringify([x, y])
      );
      if (alreadyShot) return false;
      ship.toHit([x, y]);
      ship.isSunk();
    }
  }

  isAllShipSunk(shipsArr) {
    let count = 0;
    for (const ship of shipsArr) {
      if (ship.sunk) {
        count += 1;
      }
    }
    if (count === shipsArr.length) {
      return true;
    } else {
      return false;
    }
  }
}

const h = new Gameboard();
h.initialize();
h.placeShip(3, 4, fiveShip);
h.placeShip(5, 6, fourShip);
h.placeShip(8, 3, threeShip);
console.log(h);
