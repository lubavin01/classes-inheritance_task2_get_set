import Character from './character';

export default class Daemon extends Character {
  constructor() {
    super();
    this.attack = 10;
    this.defence = 40;
  }
}
