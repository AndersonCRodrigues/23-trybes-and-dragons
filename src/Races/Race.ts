export default abstract class Race {
  private _name: string;
  private _dexterity: number;
  private static _instances = 0;

  constructor(name: string, dexterity: number) {
    this._name = name;
    this._dexterity = dexterity;
    Race.createdRacesInstances();
  }

  get name() {
    return this._name;
  }

  get dexterity() {
    return this._dexterity;
  }

  static createdRacesInstances(): number {
    // Race._instances += 1;
    // return Race._instances;
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints(): number;
}
