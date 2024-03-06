// Recebe dois parametros e os tipos será inferido quando a função for chamada

export function unionOfObject<T, U>(obj1: T, obj2: U): T & U {
  Object.assign({}, obj1, obj1);
  return { ...obj1, ...obj2 };
}

const obj1 = { key1: '' };
const obj2 = { key2: '' };

const union = unionOfObject(obj1, obj2);

console.log(union);
