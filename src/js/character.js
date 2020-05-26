/* eslint no-underscore-dangle: 0 */
/* eslint no-plusplus: 0 */


export default class Character {
  constructor() {
    this._health = 100;
    this._powerMode = false;
    this.powerModeCharges = 1;
    this.attackCount = 3;
  }

  performAttack() {
    const result = this.attack;

    if (this._powerMode) {
      this.attackCount--;
      if (!this.attackCount) {
        this._powerMode = false;
      }
    }

    return result;
  }

  get attack() {
    if (this._powerMode) {
      return this._attack * 2;
    }

    return this._attack;
  }

  set attack(value) {
    this._attack = value;
  }

  get defence() {
    if (this.powerMode) {
      return this._defence * 2;
    }

    return this._defence;
  }

  set defence(value) {
    this._defence = value;
  }

  get health() {
    if (this.powerMode) {
      return this._health * 2;
    }

    return this._health;
  }

  set health(value) {
    this._health = value;
  }

  get powerMode() {
    return this._powerMode;
  }

  set powerMode(value) {
    if (value && this.powerModeCharges) {
      this._powerMode = true;
      this.powerModeCharges--;
    }
  }

  levelUp() {
    if (this._health) {
      this._attack *= 1.2;
      this._defence *= 1.2;
      this._health = 100;
    } else {
      throw Error('Character is dead');
    }
  }
}
