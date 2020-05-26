import Character from './character';

export default class Undead extends Character {
  constructor() {
    super();
    this.attack = 25;
    this.defence = 25;
  }
}
