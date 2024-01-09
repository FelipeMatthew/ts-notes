type TypePerson = {
  name: string;
  lastName: string;
  fullName(): string;
};

type TypeAddress = {
  street: string;
  _number: number;
};

export class Person implements TypePerson, TypeAddress {
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

const person = new Person('Felipe', 'Matthew', 'marcondes salgado', 90);

console.log(person.fullName());
