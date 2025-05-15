/* Objetivo: *Console imprimir essa mensagem:* Leonardo de Almeida Silva tem 30 anos, pesa 84 kg, tem 1.85 m de altura e seu IMC é de: 34.4564563
Leonardo Almeida nasceu em 2009 */

const nome = 'Leonardo'; // nome da pessoa 
const sobrenome = 'de Almeida Silva'; // sobrenome da pessoa
const idade = 16; // idade em anos
const anoAtual = 2025; // ano atual
const peso = 84; // peso em kilogramas
const altura = 1.85; // altura em metros
let imc = (peso / (altura * altura)).toFixed(2); // IMC = peso dividido por altura² (altura vezes altura). O toFixed(2) serve para limitar a 2 casas decimais;
let anoNascimento = 2025 - idade; // ano atual - a idade da pessoa 

// NÃO UTILIZAR "NOME = LEONARDO; ", POIS CRIA UMA VARIAVEL GLOBAL E NÃO É O QUE QUEREMOS. UTILIZAR CONST OU LET (ou VAR, para codigos antigos) PARA CRIAR VARIÁVEIS LOCAIS.
// Usar crase (``) para criar strings com variáveis dentro, ao invés de usar aspas simples ou duplas, pois assim não precisa concatenar (juntar) as variáveis com o texto. Exemplo: `Olá, ${nome}`.
// O console.log imprime no console do navegador ou do terminal (caso esteja usando o Node.js) a mensagem que está entre parênteses.

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg, tem ${altura} m de altura e seu IMC é de: ${imc}` ) // comando para imprimir os dados da pessoa
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}.`) // comando para imprimir o ano de nascimento da pessoa