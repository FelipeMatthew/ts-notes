// Typeof é tratado da tipagem do objeto, com base nisso ele vai pegar todos os atributos que o objeto tem
type ColorsObject = typeof colorsObject;

// Já o keyof pega todos os valores, para que nao tenha que ficar escrevendo um por um igual no exemplo das cores.
type KeyColors = keyof ColorsObject;

const colorsObject = {
  red: 'vermelho',
  blue: 'azul',
  green: 'verde',
  purple: 'roxo',
};

export function tranlateColors(color: KeyColors, colors: ColorsObject) {
  return colors[color];
}

console.log(tranlateColors('red', colorsObject));
