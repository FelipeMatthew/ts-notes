type FilterCallback<U> = (value: U, index?: number, array?: U[]) => boolean;

export function creatingFilter<T>(
  array: T[],
  callbackfn: FilterCallback<T>,
): T[] {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (callbackfn(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 20];

const arrayFiltrado = creatingFilter(array, (value) => {
  return value % 2 === 0;
});

console.log(arrayFiltrado);
