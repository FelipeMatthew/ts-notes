// Sempre que o valor for true ele será definido o valor com um number
// VALUE IS NUMBER
// Quando a função retorna um boolean e esse valor for true você pode definir ele em um PREDICADO
export function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}

export function sum<T>(...args: T[]): number {
  const myReturn = args.reduce((sum, value) => {
    if (isNumber(value) && isNumber(sum)) {
      return sum + value;
    }
    return sum;
  }, 0);

  return myReturn;
}

console.log(sum(1, 2, 3, 4));
