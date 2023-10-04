// Tipo unknown é um any mas necessita ser feita a checkagem

let x: unknown;

x = 10;
x = 29;
x = 'tete';

const y = 300;

console.log(typeof x === 'number' + y);
// console.log(x + y);
