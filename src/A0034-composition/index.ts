// Se uma classe deixa de existir a outra também deixará
export class Car {
  constructor(private readonly motor = new Motor()) {}
  turnOn(): void {
    this.motor.turnOn();
  }

  turnOff(): void {
    this.motor.turnOff();
  }

  turnUp(): void {
    this.motor.turnUp();
  }

  brake(): void {
    this.motor.brake();
  }
}

export class Motor {
  turnOn(): void {
    console.log('motor está ligado');
  }

  turnOff(): void {
    console.log('motor está desligado');
  }

  turnUp(): void {
    console.log('motor está acelerando');
  }

  brake(): void {
    console.log('motor está freando');
  }
}

const car = new Car();

car.turnUp();
