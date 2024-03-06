// Constrain - restrição, pertence apenas para O
type GetKeyFn = <O, K extends keyof O>(obj: O, key: K) => O[K];

const getKey: GetKeyFn = (object, key) => object[key];

const animal = {
  color: 'blue',
  vacinas: ['vacina 02', 'vacina 03'],
  peso: 90,
};

const vacinas = getKey(animal, 'color');

console.log(vacinas);
