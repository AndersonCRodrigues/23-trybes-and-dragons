// import Character from '../Character';
// import Monster from '../Monster';
import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _player1 : Fighter | SimpleFighter;
  private _legion : Fighter[] | SimpleFighter[];
  private isLive: boolean;

  constructor(
    player1: Fighter | SimpleFighter,
    legion: Fighter[] | SimpleFighter[],
  ) {
    super(player1);
    this._player1 = player1;
    this._legion = legion;
    this.isLive = true;
  }

  private getNextEnemy() {
    if (this._legion.length > 0) {
      if (this._legion[0].lifePoints === -1) this._legion.shift();
    } else this.isLive = false;

    return this._legion[0];
  }

  fight(): number {
    while (this._player1.lifePoints > 0 && this.isLive) {
      let enemy = this._legion[0];
      if (this._legion.length > 0) {
        this._player1.attack(enemy);
        this._legion.forEach((e) => e.attack(this._player1));
      }
      enemy = this.getNextEnemy();
    }
    return super.fight();
  }
}

// const p1 = new Character('anao', 'dwarf', 'warrior');
// p1.levelUp();
// p1.levelUp();
// p1.levelUp();
// p1.levelUp();
// p1.levelUp();
// const p2 = new Character('elfo');
// const p3 = new Character('elfa');
// const battle = new PVE(p1, [p2, p3, p2]);
// console.log(battle.fight());