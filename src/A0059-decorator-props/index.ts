// SERVE APENAS PARA ASSISTIR O PARAMETRO
function decoratorProps(classPrototype: any, methodName: string | symbol, ): any {
  let propsValue: any;

  return {
    get: () => propsValue,
    set: (value: any) => {
      if(typeof value === 'string') {
        propsValue = value.split('').reverse().join('');
        return
      }
      propsValue = value;
    }

  }

}

export class Person {
  @decoratorProps
  name: string;

  @decoratorProps
  lastName: string;

  @decoratorProps
  age: number

  constructor(name: string, lastName: string, age: number) {
    this.name = name;
    this.lastName = lastName;
    this.age = age
  }

  method(msg: string): string {
    return `${this.name} ${this.lastName}: ${msg}`
  }

  get fullName(): string {
    return `${this.name} ${this.lastName}`
  }

  set fullName(value: string) {
    const words = value.split(/\s+/g);
    const firstName = words.shift();
    if(!firstName) return
    this.name = firstName
    this.lastName = words.join(' ');
  }
}
