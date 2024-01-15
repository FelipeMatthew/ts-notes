// Opções criadas no ES2020
// Encadeamento opcional & Operador de coalescência nula
// Feito para não quebrar o código em produção
type Documento = {
  title: string;
  text: string;
  date?: Date;
};

const documento: Documento = {
  title: 'titulo 1',
  text: 'Este es un documento de prueba',
  // date: new Date(),
};

// Encadeamento opcional
console.log(documento.date?.toDateString());

// Coalescência nula - vai verificar o null ou undefined
// Nulo é apenas - null & undefined
// Como se fosse um if, caso de errado ele vai retornar o que está escrito no lado esquerdo
// if null of if undefined -  ?? throw error
console.log(documento.date?.toDateString() ?? '1 - deu ruim amigão');
