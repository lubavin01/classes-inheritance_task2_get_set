import Bowman from '../bowman';
import Daemon from '../daemon';
import Magician from '../magician';
import Swordman from '../swordman';
import Undead from '../undead';
import Zombie from '../zombie';

const data = [
  new Bowman(),
  new Swordman(),
  new Daemon(),
  new Magician(),
  new Undead(),
  new Zombie(),
];

describe.each(data)('.character test', (a) => {
  test('health initialized', () => {   
    expect(a.health).toEqual(100);
  });

  test('health replenished', () => {
    a.health = 10;   
    a.levelUp();
    expect(a.health).toEqual(100);
  });

  test('health initialized', () => {
    a.health = 0;   
    expect(() => {a.levelUp()}).toThrow();
  });
});
