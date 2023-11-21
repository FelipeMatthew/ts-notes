// Abstraction
export class Person {
  private name: string;
  private lastName: string;
  private age: number;

  constructor(name: string, lastName: string, age: number) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }
}

// Encapsulation
export class RemoteControl {
  constructor(private powerStatus = false) {}

  public turnOn(): void {
    this.powerStatus = true;
    console.log('The television is on');
  }

  public turnOff(): void {
    this.powerStatus = false;
    console.log('The television is off');
  }

  public getStatus(): boolean {
    console.log('the televions is: ' + this.powerStatus);
    return this.powerStatus;
  }
}

// Heritage
export abstract class Animal {
  constructor(public name: string) {}
  abstract makeNoise(): void;
}
export class Dog extends Animal {
  makeNoise() {
    console.log(`${this.name} says Woof!`);
  }
}
export class Cat extends Animal {
  makeNoise() {
    console.log(`${this.name} says Meow!`);
  }
}

// Polimorfism
// Uma classe que pode tomar uma ou mais ações dentro dela
// Ex: brinquedo que sai som de animais e vc define
class AnimalSound {
  public playSound(animal: Animal) {
    animal.makeNoise();
  }
}

const soundMachine = new AnimalSound();
soundMachine.playSound(new Dog('Barney')); // Output: Barney dog says Woof!
soundMachine.playSound(new Cat('lili')); // Output: lili says Meow!
