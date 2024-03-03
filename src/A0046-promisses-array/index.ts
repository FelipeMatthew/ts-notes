// Decorators diretos do typescript
type MeuTipo = number;

const arrays: Array<number> = [1, 2, 3];

console.log(arrays);

async function promiseFunction(): Promise<MeuTipo> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
}

promiseFunction()
  .then((result) => console.log(result + 1))
  .catch((err) => console.log(err));
