
# Anotações - Seção 17 - 261 - 269

cria uma pasta .vscode > settings.json e colocar codderunner-executormap

instala os 2 e configura o setting json -

"ts-node": "^10.9.1",
"typescript": "^5.2.2"

vscode > settings.json >
"typescript": "npx ts-node --files",

## instalando eslint

npm i eslint -D
npm i @typescript-eslint/eslint-plugin @typescript-eslint/parser -D

## instalando prettier

npm i prettier eslint-config-prettier eslint-plugin-prettier -D

semi: true, // Ponto e virgula no final de todas as linhas
trailingComma: 'all', // final de objeto sempre deixar uma virgula
singleQuote: true, // Aspas simples
printWidth: 80  // Largura para começar a quebrar a linha

## inicialização do ts

Instalador do tsconfig

npx tsc --init

tsconfig.json ->

mexer no lib
outDir "./dist" - vai converter todo ts para js
strict = true = vai mostrar o erro durante o codigo.

LIB : [ESNEXT, DOM]

"include": [
    "./src"
]

Vai pegar todos os arquivos do scr e converter para o dist transformando tudo em js

### Para compilar todo o codigo se utiliza - npx tsc

## Editor config
vai deixar as configurações por padrões para todos que utilizam os codigos


# Tipos Básicos


type anottation - é a tipagem basica do componente -

: string
: number
: boolean
: Symbol
: bigint

Quando for criar tipo de tipagem colocar sempre com letra maiuscula


quando colocar :? é um atributo opcional

Index signature = é quando você cria um objeto e necessita que ele seja atribuido novos valores externamente, deixando o mesmo como valor desconhecido.

readonly = não pode mais alterar o valor da chave

### Webpack config

npm i ts-loader webpack webpack-cli --save-dev

quando for trabalhar c back end vai salvar no backend e o front estará em outro bundle.

para rodar se utiliza npx webpack -w

WINREF - apaga tudo que tem na pasta dist e sobe ela novamente 
