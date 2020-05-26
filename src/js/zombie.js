import Character from './character';

export default class Zombie extends Character {
  constructor() {
    super();
    this.attack = 40;
    this.defence = 10;
  }
}
