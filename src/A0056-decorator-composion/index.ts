// Caso queira passar um parametro para um decorador, voce terá que instanciar ele em uma
// functions que vai retornar a function decoradora, assim na function pai terá os parametros do decorator
interface Constructor {
  new (...args: any[]): any;
}
function decorator01(params: string, params2: string) {
  // Closure
  return function <T extends Constructor>(target: T): T {
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
        return value.split('').reverse().join('') + params + "  " + params2;
      }
    };
  }
}

function decorator02(params: string[]) {
  return function (target: Constructor): Constructor {
    return class extends target {
      constructor(...args: any[]) {
        super(...args)
        console.log('im the second decorator')
      }
    }
  }
}

@decorator01( 'red', 'John Doe')
@decorator02(['', '' ])
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

