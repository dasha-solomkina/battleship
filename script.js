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

const t = new Ship(5);
t.toHit();
t.toHit();
t.toHit();
t.isSunk();
console.log(t);
t.toHit();
t.toHit();
t.isSunk();

console.log(t);
