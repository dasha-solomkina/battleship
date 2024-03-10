import { Ship } from './script';

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
    newShip.toHit();
    newShip.toHit();
    expect(newShip.hit).toBe(2);
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
