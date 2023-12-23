// Super seria a classe a classe pai que nesse caso seria a pessoa.
// Super class - classe pai
export class Person {
  constructor(
    public name: string,
    public lastName: string,
    private age: number,
    protected cpf: string,
  ) {}

  getAge(): number {
    return this.age;
  }

  getCpf(): string {
    return this.cpf;
  }

  getFullName(): string {
    return this.name + ' ' + this.lastName;
  }
}

export class Student extends Person {
  // apenas chamando a classe novamente por isso nao precisa definir atributo
  constructor(
    name: string,
    lastName: string,
    age: number,
    cpf: string,
    public room: string,
  ) {
    super(name, lastName, age, cpf);
  }

  getFullName(): string {
    const fullName = super.getFullName();
    return `${fullName}, I'm a student`;
  }
  getClass(): string {
    return 'I study in ' + this.room;
  }
}
export class Client extends Person {}

const student = new Student(
  'Felipe',
  'Matthew',
  35,
  '466-397-768-55',
  'sala-2',
);
const client = new Client('Felip', 'Matthe', 35, '466-397-768-55');

client.getFullName();

console.log(student, client, person);
