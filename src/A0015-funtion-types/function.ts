type MapStringCallback = (item: string) => string;

// function para mapear string
export function mapString(
  array: string[],
  callbackFn: MapStringCallback,
): string[] {
  const newArray: string[] = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(callbackFn(array[i]));
  }

  return newArray;
}

const abc = ['z', 'b', 'c'];
const abcMapped = mapString(abc, (item) => item.toUpperCase());

console.log(abc);
console.log(abcMapped);
