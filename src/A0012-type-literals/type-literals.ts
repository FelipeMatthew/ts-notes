// tipo é definido pelo valor constante dele.

let x = 10;
x = 0b1010;

const y = 10;
const a = 100 as const;

const person = {
  name: 'luiz' as const,
  lastname: 'miranda',
};

function chooseColor(color: 'red' | 'blue' | 'green'): string {
  return color;
}

console.log(chooseColor('green'));

// module mode
export default '';
