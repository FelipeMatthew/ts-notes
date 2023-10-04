// Index signature = é quando você cria um objeto e necessita que ele seja atribuido novos valores externamente

const objectA: {
  readonly keyA: string;
  keyB: string;
  keyC?: number; // Optional
  [key: string]: unknown;
} = {
  keyA: 'ObjA',
  keyB: 'ObjB',
};

// objectA.keyA = 'new value'; // Cannot be changed
objectA.keyB = 'new value';
objectA.keyD = 'another value';

console.log(objectA);
