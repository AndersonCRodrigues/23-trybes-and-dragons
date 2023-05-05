import Energy from '../Energy';
import SimpleFighter from './SimpleFighter';

interface Fighter extends SimpleFighter {
  readonly defense: number;
  readonly energy?: Energy;
  special?(enemy: Fighter): void;
  levelUp(): void;
}

export default Fighter;
