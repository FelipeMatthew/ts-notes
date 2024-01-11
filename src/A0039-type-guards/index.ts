// Vai fazer uma tratativa de dados com que os casos de retorno tenha valores e nao seja apenas largado
export function add(a: unknown, b: unknown): number | string {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  return `${a} + ${b}`;
}

console.log(add(1, 5));
console.log(add('1', '2'));

type Person = {
  type: 'person';
  name: string;
};
type Animal = {
  type: 'animal';
  color: string;
};
type PersonOrAnimal = Person | Animal;

export class Student implements Person {
  readonly type = 'person';
  constructor(public name: string) {}
}

function showName(obj: PersonOrAnimal): void {
  // if ('name' in obj) console.log(obj.name);
  // obj - Person or animal               - obj = student
  // if (obj instanceof Student) console.log(obj.name);
  switch (obj.type) {
    case 'person':
      console.log(obj.name);
      return;
    case 'animal':
      console.log('that`s an animal', obj.color);
      return;
  }
}
const test = new Student('teste');
showName(test);
showName({ type: 'person', name: 'a' });
