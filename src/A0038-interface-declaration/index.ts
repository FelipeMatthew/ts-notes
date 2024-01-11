// Union the interface
// Merging = uniao de interfaces, formando uma interface maior
interface Person {
  name: string;
}

interface Person {
  lastName: string;
}

interface Person {
  address: ['rua marcondes salgado', 650];
}

const person: Person = {
  name: 'felipe',
  lastName: 'matthew',
  address: ['rua marcondes salgado', 650],
};

console.log(person.age);
