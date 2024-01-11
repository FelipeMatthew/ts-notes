// Chaves em tipos - evitar repetição no códigos
// Exemplo mostrado em lugares que necessita ter as mesmas prorpiedades mesmo se os valores forem alterados.
// assim q eu mudar a informação no veiculo ele vai mudar no tipo motocycle
type Veiculo = {
  marca: string;
  modelo: string;
  ano: number;
};

type Motocycle = {
  brand: Veiculo['marca'];
  model: Veiculo['modelo'];
  year: Veiculo['ano'];
};

const motocycle: Motocycle = {
  brand: 'Yamaha',
  model: 'FZR1300',
  year: 2021,
};

console.log(motocycle);
