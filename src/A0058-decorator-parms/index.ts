// SERVE APENAS PARA ASSISTIR O PARAMETRO
function decoratorParams<T>(classPrototype: T, methodName: string, index: number) {
  console.log(classPrototype)
  console.log(methodName)
  console.log(index)
}

export class Person {
  name: string;
  lastName: string;
  age: number

  constructor(name: string, lastName: string, age: number) {
    this.name = name;
    this.lastName = lastName;
    this.age = age
  }

  method(@decoratorParams msg: string): string {
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
