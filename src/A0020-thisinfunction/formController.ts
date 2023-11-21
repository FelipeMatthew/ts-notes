import isEmail from 'validator/lib/isEmail';

const SHOW_ERROR_MESSAGES = 'show-error-message';

const form = document.querySelector('.form') as HTMLFormElement;
const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const password2 = document.querySelector('.password2') as HTMLInputElement;

const allInputs = [username, email, password, password2] as HTMLInputElement[];

const submitEventListener = (event: Event) => {
  event.preventDefault();

  // target. Uma referência ao objeto que enviou o evento.
  const target = event.target as HTMLFormElement;

  // Methods
  hideErrorMessaages(target);
  checkFormEmptyFields(allInputs);
  checkEmail(email);
  checkEqualPasswords(password, password2);

  if (shouldSendForm(target)) {
    form.submit();
    alert('Formulário enviado com sucesso');
  }
};

form.addEventListener('submit', submitEventListener);

function checkEqualPasswords(
  password: HTMLInputElement,
  password2: HTMLInputElement,
): void {
  if (password.value !== password2.value) {
    showErrorMessage(password2, 'As senhas precisam ser iguais');
  }
}

function checkEmail(input: HTMLInputElement): void {
  if (!isEmail(input.value)) {
    showErrorMessage(input, 'Email inválido');
  }
}

function checkFormEmptyFields(inputs: HTMLInputElement[]): void {
  inputs.forEach((input) => {
    if (!input.value) {
      showErrorMessage(input, 'Esse campo não pode estar vazio');
    }
  });
}

function showErrorMessage(input: HTMLInputElement, msg: string): void {
  // Vai passar p input e qual msg você quer que seja passada

  // Pega o elemento pai
  const formFields = input.parentElement as HTMLDivElement;

  // Do elemento pai vai encontrar o span
  const errorMessage = formFields.querySelector(
    '.error-message',
  ) as HTMLSpanElement;

  errorMessage.innerText = msg;

  // Aqui vai deixar o campo habilitado assim mostrando a msg de erro
  formFields.classList.add(SHOW_ERROR_MESSAGES);
}

function hideErrorMessaages(form: HTMLFormElement): void {
  // Vai pegar todos os elementos que tem a classe de erro
  form
    .querySelectorAll('.' + SHOW_ERROR_MESSAGES)
    .forEach((item) => item.classList.remove(SHOW_ERROR_MESSAGES));
}

function shouldSendForm(form: HTMLFormElement): boolean {
  // Vai criar uma flag
  // vai selecionar todos os erros e para cada eror ele vai retornar false
  // no final da function ele vai retornar essa flag e caso seja true envia forms
  let send = true;

  const errorMessages = form.querySelectorAll('.' + SHOW_ERROR_MESSAGES);

  errorMessages.forEach(() => {
    send = false;
  });

  return send;
}
