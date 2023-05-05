interface SimpleFighter {
  readonly lifePoints: number;
  readonly strength: number;
  attack(enemy: SimpleFighter): void;
  receiveDamage(attackPoints: number): number;
}

export default SimpleFighter;
