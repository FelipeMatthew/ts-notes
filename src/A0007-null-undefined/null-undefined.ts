/* eslint-disable */
// Assim que instanciado o valor ele é atribuido como undefined

let x;
if (typeof x === 'undefined') x = 20;
console.log(x * 2);

export function createPerson(
  firstName: string,
  lastName?: string,
): {
  // Typeof: object
  firstName: string;
  lastName?: string;
} {
  return {
    firstName,
    lastName,
  };
}
// Vai sair ou sobrenome ou undefined
const felipe = createPerson('felipe');

console.log(felipe);

// Null

// Vai validar e pode retornar ou null ou number por conta do if else
// number | null
export function squareOf(x: any) {
  if (typeof x === 'number') return x * x;
  return null;
}

const squareOf1 = squareOf(40);
const squareOf2 = squareOf('felipe');

console.log(squareOf1);
console.log(squareOf2);
