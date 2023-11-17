// Type cashing - coersão de tipos - converter um tipo para

// Se ele existir automaticamente ele deixa de ser null e vira HTML
// Estreita a possibilidade de tipo para definir um tipo unico
const body = document.querySelector('body');
if (body) body.style.background = 'red';

// non null assertion (!)
const body2 = document.querySelector('body')!;
body2.style.background = 'red';

// Type assertion (as - type)
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';

// Class
const body4 = document.querySelector('.input') as HTMLInputElement;
body4.focus();

// tirando tipo e definindo como number
const body5 = document.querySelector('.body') as unknown as number;
console.log(body5);
