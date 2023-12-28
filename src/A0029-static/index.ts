export class Vehicle {
  static defaultName = 'meganane';
  static defaultBrand = 'Fiat';

  constructor(
    public name: string,
    public plate: string,
    public brand: string,
  ) {}

  // nao da acesso pela instancia, apenas pela classe
  // praticamente uma função dentro da classe
  static sayHello(): void {
    console.log('Olá!');
  }

  static crateVehicle(name: string, plate: string): Vehicle {
    return new Vehicle(name, plate, 'fiat');
  }

  normalMethod(): void {
    console.log(`normal method is ${Vehicle.defaultName}`);
  }
}

const myCar = Vehicle.crateVehicle('Ferrari', 'ABC123');
const anotherCar = new Vehicle('palio', '123123', 'fiat');
console.log(myCar);
console.log(anotherCar);

anotherCar.normalMethod();
