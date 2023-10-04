// Usado quando você quer ou um tipo ou outro;

function addOrConcat(a: number | string, b: number | string) {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  // if (typeof a === 'string' && typeof b === 'string') return a + b;
  return `${a}${b}`;
}

console.log(addOrConcat(20, 30));
console.log(addOrConcat('20', '30'));
