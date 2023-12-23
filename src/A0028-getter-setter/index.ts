export class Vehicle {
  constructor(
    private _name: string,
    private plate: string,
    private brand: string,
    private model: string,
    private chassis: string,
    private year: number,
  ) {
    // SETTER
    this.name = _name;
  }

  // Older getter and setter
  getChassis(): string {
    return this.chassis.replace(/\D/g, '');
  }

  getName(): string {
    return this._name;
  }

  setName(name: string): void {
    this._name = name;
  }

  // new getter setter
  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }
}

const vehicle1 = new Vehicle(
  'gol quadrado',
  'EFR-1429',
  'Fiat',
  '4 portas',
  '122.fas2.333p.daf32.ssg',
  2015,
);

// METODO VAI FUNCIONAR COMO UM ATRIBUTO

// SETTER
vehicle1.name = 'fiat uno';
// GETTER
console.log(vehicle1.name);
