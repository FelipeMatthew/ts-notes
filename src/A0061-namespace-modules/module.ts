// Criar um escopo
namespace MyNamespace {
  const name = 'felps';

  export class PersonInNamespace {
    constructor(public name: string) {}
  }

  const person =  new PersonInNamespace('John Doe');
  console.log(person);

  export namespace AnotherNamespace {
    export const anotherNamespace = 'another name space'
  }
}

const  personOutsideOfNamespace = new MyNamespace.PersonInNamespace('felps');
console.log(personOutsideOfNamespace);
console.log(MyNamespace.PersonInNamespace);
console.log(MyNamespace.AnotherNamespace.anotherNamespace);
