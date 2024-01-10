interface TypePerson {
  name: string;
  lastName: string;
  fullName(): string;
}

interface TypeAddress {
  street: string;
  _number: number;
}

type UnionType = TypeAddress & TypePerson; // union type - Type alias

interface InterfaceUnion extends TypePerson, TypeAddress {}

const person: InterfaceUnion = {
  name: '',
  lastName: '',
  street: '',
  _number: 0,
  fullName() {
    return `${this.name} ${this.lastName}`;
  },
};

export class Person implements UnionType {
  constructor(
    public name: string,
    public lastName: string,
    public street: string,
    public _number: number,
  ) {}

  fullName(): string {
    return this.name + ' ' + this.lastName;
  }
}

const person1 = new Person('Felipe', 'Matthew', 'marcondes salgado', 90);

console.log(person.fullName());
console.log(person1);
