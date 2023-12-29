// Essa classe nao pode mais ser instanciada diretamente
// Só via poder chamar ou guerreira ou monstro
// Classe abstrada so é instanciada quando for extended
export abstract class Character {
  protected abstract emoji: string;

  constructor(
    protected name: string,
    protected attackPower: number,
    protected health: number,
  ) {}

  attack(character: Character): void {
    this.staff();
    character.lostHealth(this.attackPower);
  }

  lostHealth(_attackPower: number): void {
    this.health -= _attackPower;
    console.log(`${this.emoji} ${this.name} - now has ${this.health}hp`);
  }

  abstract staff(): void;
  // Precisa ser instanciado e definido em todas subclasses
}

export class Warrior extends Character {
  protected emoji = '\u{1F9DD}';

  staff(): void {
    console.log(
      this.emoji +
        this.name +
        '  ' +
        "i'm the best warrior in the world, let's gooo!!",
    );
  }
}
export class Monster extends Character {
  protected emoji = '\u{1F9DF}';

  staff(): void {
    console.log(this.emoji + this.name + ' ' + 'guaaarrr!! Lets attack');
  }
}

const warrior = new Warrior('Valquiria', 300, 1500);
const monster = new Monster('Goblin', 200, 8000);

warrior.attack(monster);
warrior.attack(monster);
warrior.attack(monster);
monster.attack(warrior);
