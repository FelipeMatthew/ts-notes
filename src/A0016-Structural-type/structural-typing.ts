// structural typing = tipagem estruturada

// user = valor salvo na base de dados
// sentValue = valor que vai ser comparado para liberação de acesso

// Ele pede um user que tenha esses tipos definidos obrigatoriamente porém voce
// pode a acabar adicionando mais campos sem problemas alguns ex: Chave de ativação

type VerifyUserFn = (user: User, sentValue: User) => boolean;

type User = { username: string; password: string };

const verifyUser: VerifyUserFn = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

const bdUser = { username: 'felipe', password: '1234' };
const localUser = {
  username: 'felipe',
  password: '1234',
  permission: '',
  token: '',
};

console.log(verifyUser(bdUser, localUser));
