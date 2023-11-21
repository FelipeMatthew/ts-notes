// this

// o this no parametro não é um parametro e sim uma tipagem para ele
export function func(this: Date, argument: string, age: number): void {
  console.log(this);
  console.log(argument, age);
}

// call chama a funão com o primeiro argumento informando quem é o this e dps os argumentos da func
func.call(new Date(), 'felipe', 80);

// Apply - msm coisa passando um array
func.apply(new Date(), ['felipe', 80]);
