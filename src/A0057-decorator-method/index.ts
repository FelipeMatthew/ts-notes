// Decorator function
function decorator(classPrototype: any, methodName: string, descriptor: PropertyDescriptor): PropertyDescriptor {
  console.log(classPrototype)
  console.log(methodName)
  console.log(descriptor)

  return {
    writable: true,
    enumerable: false,
    value: (...args: any[]) => {
      args.length;
    }
  }
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

  @decorator
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
