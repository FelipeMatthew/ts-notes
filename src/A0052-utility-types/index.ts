// Record - Definir o tipo do objeto
export const obj: Record<string, string> = {
  name: 'Luiz',
  lastName: 'Matthew',
};

type PersonProtocol = {
  name?: string;
  age?: number;
  lastName?: string;
};

// Required
// Transforma tudo opcional em não opcional, é obrigado passar todos os parametros
type PersonRequired = Required<PersonProtocol>;

//Partial
// Nada é required, tudo é opcional
type PersonPartial = Partial<PersonRequired>;

// Readonly
type PersonReadyOnly = Readonly<PersonRequired>;

// Pick
// Vai pegar apenas os parametros que for passado
type PersonPick = Pick<PersonRequired, 'name' | 'lastName'>;

export const obj2:
  | PersonRequired
  | PersonPartial
  | PersonReadyOnly
  | PersonPick
  | TypeExclude
  | TypeExtract = {
  name: 'test',
  lastName: 'test',
  age: 22,
};

console.log(obj);
console.log(obj2);

// Exclude
// computa todos os tipos que estão em ABC que não estão em CDE
type ABC = 'a' | 'b' | 'c';
type CDE = 'c' | 'd' | 'e';

// Vai tirar o C e vai retornar apenas o primeiro valor, o segundo serve apenas para comparar
type TypeExclude = Exclude<ABC, CDE>;

// Extract
// Computa apenas os valores relacionados
type TypeExtract = Extract<ABC, CDE>;

// HARDCODE

type AccountMongo = {
  _id: string;
  name: string;
  age: number;
};

// type AccountApi = {
//   id: string;
//   name: string;
//   age: number;
// };

// Right Code
// Vai escolher o tipo - PICK
// Vai retirar apenas o valor igual ao _id
type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
  id: string;
};

const accountMongo: AccountMongo = {
  _id: '21c0dfa-j302-987654321',
  name: 'John Doe',
  age: 30,
};

function mappingAccount(accountMongo: AccountMongo): AccountApi {
  const { _id, ...accountData } = accountMongo;
  return { ...accountData, id: _id };
}

const accountApi = mappingAccount(accountMongo);

console.log({
  API: {
    accountApi,
  },
});
