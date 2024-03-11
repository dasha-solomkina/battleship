import { Ship } from './script';
import { Gameboard } from './script';

describe('Ship testing', () => {
  let newShip;

  beforeEach(() => {
    newShip = new Ship(5);
  });

  test('length', () => {
    const n = newShip.length;
    expect(n).toBe(5);
  });

  test('hits', () => {
    newShip.toHit([1, 3]);
    newShip.toHit([1, 3]);
    expect(newShip.hit.length).toBe(2);
  });

  test('sunk ship', () => {
    newShip.toHit();
    newShip.toHit();
    newShip.toHit();
    newShip.toHit();
    newShip.toHit();
    expect(newShip.isSunk()).toBe(true);
  });
});

describe('Gameboard', () => {
  let myBoard;

  beforeEach(() => {
    myBoard = new Gameboard();
    myBoard.initialize();
  });

  test('board created', () => {
    expect(myBoard.board[5][5]).toBe(null);
    expect(myBoard.missedShots[5][5]).toBe(false);
  });

  test('placeShip', () => {
    const ship = new Ship(2);
    myBoard.placeShip(5, 5, ship);
    expect(myBoard.board[5][5]).not.toBeNull();
  });

  test('receiveAttack', () => {
    myBoard.receiveAttack(1, 2);
    myBoard.board[1][2] = null;

    expect(myBoard.missedShots[1][2]).toBeTruthy();
  });

  test('isAllShipSunk', () => {
    const ship1 = new Ship(2);
    ship1.sunk = true;
    const ship2 = new Ship(3);
    ship2.sunk = true;
    const ships = [ship1, ship2];

    expect(myBoard.isAllShipSunk(ships)).toBeTruthy();
  });
});
