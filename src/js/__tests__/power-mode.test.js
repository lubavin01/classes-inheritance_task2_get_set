import Bowman from '../bowman';

describe('testing bowman stats', () => {
  test('bowman stats correct', () => {
    const bowman = new Bowman();

    expect(bowman.attack).toEqual(25);
    expect(bowman.defence).toEqual(25);
    expect(bowman.health).toEqual(100);
  });




  test('bowman stats correct after powermode', () => {
    const bowman = new Bowman();
    bowman.powerMode = 1;

    expect(bowman.powerMode).toBeTruthy();
    expect(bowman.attack).toEqual(50);
    expect(bowman.defence).toEqual(50);
    expect(bowman.health).toEqual(200);
  });

  test('bowman stats correct after 3 attacks', () => {
    const bowman = new Bowman();
    bowman.powerMode = 1;

    expect(bowman.performAttack()).toEqual(50);
    expect(bowman.performAttack()).toEqual(50);
    expect(bowman.performAttack()).toEqual(50);
    expect(bowman.performAttack()).toEqual(25);

    expect(bowman.powerMode).toBeFalsy();    
    expect(bowman.attack).toEqual(25);
    expect(bowman.defence).toEqual(25);
    expect(bowman.health).toEqual(100);

    bowman.powerMode = 1;
    expect(bowman.powerMode).toBeFalsy();
  });

});
