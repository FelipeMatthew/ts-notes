export class Character {
  constructor(
    protected name: string,
    protected attackPower: number,
    protected health: number,
  ) {}

  attack(character: Character): void {
    console.log(`${this.name} is attacking`);
    character.lostHealth(this.attackPower);
  }

  lostHealth(_attackPower: number): void {
    console.log(`${this.name} now has ${this.health}hp`);
    this.health -= _attackPower;
  }
}

export class Warrior extends Character {}
export class Monster extends Character {}

const warrior = new Warrior('Valquiria', 300, 1500);
const monster = new Monster('Goblin', 200, 8000);

console.log(warrior);
console.log(monster);
