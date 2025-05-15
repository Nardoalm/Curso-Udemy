// Aula 19 - Variáveis e Tipos de Dados
// Tipos de dados primitivos: string, number, boolean, undefined, null, symbol (não utilizado), bigint (não utilizado).

const nome1 = 'Leonardo'; // string
const nome2 = "Almeida"; // string
const nome3 = `Silva ${nome1}`; // string com template string
const num1 = 10; // number
const num2 = 10.89; // number (JavaScript não diferencia int e float)
let nomeAluno; // undefined -> variável declarada, mas sem valor
const nomeAluno2 = null; // null -> ausência de valor
const aprovado = true; // booleano

console.log('Tipo de dado primitivo:', typeof nome1); // Exibe o tipo da variável nome1

let a = 10; // Variável 'a' recebe o valor 10
let b = a; // Variável 'b' recebe o valor de 'a' (10)

console.log(''); // Linha em branco
console.log(`Número A: ${a} Número B: ${b}.`); // Exibe os valores de 'a' e 'b'
console.log(''); // Linha em branco

// Após 2 segundos, exibe uma mensagem indicando modificação no valor de 'b'
setTimeout(() => {
  console.log("Realizando uma modificação no valor de B...");
  
  b = 20; // 'b' recebe um novo valor (20)
  
  console.log(''); // Linha em branco
  console.log(`Número A: ${a} Número B: ${b}.`); // Exibe os novos valores de 'a' e 'b'
  console.log(''); // Linha em branco
}, 2000); // 2000 milissegundos = 2 segundos