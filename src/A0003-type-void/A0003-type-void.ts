/* eslint-disable */

// Void vai retornar sempre undefined

// Rest operator = ...
function noReturn(...args: string[]) : void {
  console.log(args.join(' '));
}

const persona = {
  nome: 'felipe',
  lastName: 'matthew',

  showName() : void {
    console.log(this.nome, this.lastName);
  }
};

persona.showName();
