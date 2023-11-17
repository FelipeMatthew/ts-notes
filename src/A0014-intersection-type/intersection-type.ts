// | = ou
// & = e

type HasName = { name: string };
type HasLastName = { lastname: string };
type HasAge = { age: number };
type Union = HasAge & HasLastName & HasName;

const person: Union = {
  name: 'felipe',
  lastname: 'silveira',
  age: 19,
};

console.log(person);
