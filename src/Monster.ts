// import Character from './Character';
import { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  protected _lifePoints: number;
  private _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this.strength);
  }

  receiveDamage(attackPoints: number): number {
    this._lifePoints -= attackPoints;
    if (this._lifePoints < 1) this._lifePoints = -1;
    return this._lifePoints;
  }
}

// const monster = new Monster();
// const char = new Character('teste');
// monster.attack(char);
// char.attack(monster);
// console.log(monster.strength);