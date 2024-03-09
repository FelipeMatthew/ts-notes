// Modificar algo no construtor e assim que instanciada irá rodar algo na função decoradora
// OBJ que finge ser um objeto real mas ele é um decorador, voce pode personalizar e deixa-lo do jeito que preferir
// target - vai ser a classe a ser decorada.

function decorator<T extends new (...args: any[]) => any>(target: T): T {
  console.log('im decorator')

  return class extends target {
    color: string;
    name: string;

    constructor(...args: any[]) {
      super(...args);
      this.color = this.reverseParameters(args[0]);
      this.name = this.reverseParameters(args[1]);
    }

    reverseParameters(value: string): string {
      return value.split('').reverse().join('');
    }
  };
}

@decorator
export class Animal2 {
  constructor(
    public color: string,
    public name: string,
  ) {
    console.log('im the class')
  }
}
// Construtor de classe


export const animal = new Animal2('blue', 'Felix');

console.log(animal);

