export function binarySearch(list: number[], item: number): number | null {
  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
    const middle = Math.floor((low + high) / 2); // Arredonda para o número inteiro mais próximo
    const guess = list[middle];

    if (guess === item) {
      return middle;
    }

    if (guess < item) {
      low = middle + 1;
    } else {
      high = middle - 1;
    }
  }

  return null; // Movido o retorno null para fora do loop
}

const listTest = [4, 6, 8, 9, 13, 15, 17, 19, 23, 26, 38, 42, 47];

console.log(binarySearch(listTest, 8));
