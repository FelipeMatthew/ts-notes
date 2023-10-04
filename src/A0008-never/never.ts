// Um laço infinito ou um erro
// Função ou vai travar aplicação ou vai lançar um erro

function createError(): never {
  throw new Error('erro qualquer');
}

createError();
