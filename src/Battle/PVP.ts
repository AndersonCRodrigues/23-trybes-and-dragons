import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private _player1 : Fighter | SimpleFighter;
  private _player2 : Fighter | SimpleFighter;

  constructor(
    player1: Fighter | SimpleFighter,
    player2: Fighter | SimpleFighter,
  ) {
    super(player1);
    this._player1 = player1;
    this._player2 = player2;
  }

  fight(): number {
    while (this._player1.lifePoints > 0 && this._player2.lifePoints > 0) {
      this._player1.attack(this._player2);
      this._player2.attack(this._player1);
      // console.log(this._player1.lifePoints);
      // console.log(this._player2.lifePoints);
    }
    return super.fight();
  }
}

// const p1 = new Character('anao', 'dwarf', 'warrior');
// const p2 = new Character('elfo');
// const battle = new PVP(new Character('player1'), new Monster());
// console.log(p1.race);
// console.log(p2.race);
// console.log(battle);
// console.log(battle.fight());