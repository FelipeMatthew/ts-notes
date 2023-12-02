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

export class Student extends Person {}
export class Client extends Person {}

const student = new Student('Felipe', 'Matthew', 35, '466-397-768-55');
const client = new Client('Felip', 'Matthe', 35, '466-397-768-55');
const person = new Student('Felipe', 'Matthew', 35, '466-397-768-55');

client.getFullName();

console.log(student, client, person);
