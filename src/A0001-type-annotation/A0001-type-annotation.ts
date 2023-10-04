/* eslint-disable */

// tipagem básica
const nome: string = 'felipe';
const idade: number = 0xf00d;
const verdaderiro: boolean = true;

// arrays

// é necessário sempre informar o tipo de conteudo que está dentro do seu array
let arrayNumbers: Array<number> = [1, 2,];
let arrayNumbers2: number[] = [1, 2];
let arrayString: Array<string> = ['testing'];

// Objetos
let pessoa: {name: string, lastName: string, age?: number, adult?: boolean} = {
  name: 'felipe',
  lastName: 'matthew',
  age: 90
};

// Function

// void = undefined
function addition(x: number, y: number) {
  return x + y;
}

// const addition2: (x: number, y: number) => number = (x + y) => x + y;


