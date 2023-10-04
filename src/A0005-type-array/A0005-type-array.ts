// Array <T> - T[]

const multiplyArgs = (...args: number[]): number => {
  return args.reduce((acumulativo, valorFinal) => acumulativo + valorFinal, 0);
};

function concactStrings(...argumentos: string[]): string {
  return argumentos.reduce((ac, value) => ac + value);
}

export function toUppercase(...argumetos: string[]): string[] {
  return argumetos.map((value) => value.toUpperCase());
}

const argsFinal = multiplyArgs(1, 4, 5, 6);
const stringConcat = concactStrings('felipe ', 'matthew');
const upperLetter = toUppercase('testando', 'letras maiusculas');

console.log(stringConcat, argsFinal, upperLetter);
