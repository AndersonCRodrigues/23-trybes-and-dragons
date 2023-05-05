import { EnergyType } from '../Energy';
import Archetype from './Archetypes';

export default class Warrior extends Archetype {
  private _type: EnergyType;
  private static _instances = 0;

  constructor(name: string) {
    super(name);
    this._type = 'stamina';
  }

  get energyType(): EnergyType {
    return this._type;
  }

  static createdArchetypeInstances() {
    Warrior._instances += 1;
    return Warrior._instances;
  }
}
