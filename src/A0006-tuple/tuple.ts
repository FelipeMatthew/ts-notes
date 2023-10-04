// Tuplas

const tupla1: readonly [string, number] = ['felipe', 20];
const tupla2: [number, string, number?] = [10, 'felps', 90];
const tupla3: [number, string, ...string[]] = [
  30,
  'felps',
  'string 1',
  'string2',
  'string3',
];

console.log(tupla1);
console.log(tupla2);
console.log(tupla3);

// Read only array
const array1: readonly string[] = ['felipe', 'matthew', 'moreira'];
// cosnt array2: ReadonlyArray<string> = ['felipe', 'matthew'];

console.log(array1);
