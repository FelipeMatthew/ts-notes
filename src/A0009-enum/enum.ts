/* eslint-disable */
// enumeration - enumeração de valores.

enum Colors {
  red = 90,
  blue, // 91
  yellow = 'amarelo',
  brown = 100,
}
//
enum Colors {
  purple,
  pink = 0,
}

function chooseColor(cor: Colors): void {
  console.log(Colors[cor]);
}

chooseColor(Colors.pink);
console.log(Colors);
