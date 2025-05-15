let num1 = 1; // Por enquanto é do tipo Number
let num2 = 10.3346565; // Também é do tipo Number

console.log(num1.toString() + num2); // O .toString() converte num1 para string apenas nesta linha

console.log(typeof num1); // Continua sendo Number, pois a conversão foi apenas temporária

// Podemos converter um Number para string de forma permanente assim:
num1 = num1.toString();

// Para exibir um número em formato binário:
console.log(num1.toString(2));

// Para arredondar números, podemos utilizar:
console.log(num2.toFixed(2)); // Arredonda para 2 casas decimais após o ponto

// Para verificar se um valor é um número inteiro:
console.log(Number.isInteger(num1));

// Para verificar se uma variável é NaN (Not a Number):
console.log(Number.isNaN(num1));

/*
O JavaScript utiliza o padrão IEEE 754-2008 para operações com ponto flutuante,
o que pode causar imprecisões em alguns cálculos.
*/

// Exemplo de imprecisão com ponto flutuante:
let num10 = 0.7;
let num20 = 0.1;

num10 += num20; // 0.8
num10 += num20; // 0.9
num10 += num20; // 1.0
num10 += num20; // 1.1
num10 += num20; // 1.2
num10 += num20; // 1.3
// num10 += num20; // 1.4
// num10 += num20; // 1.5

console.log(num10);
console.log(Number.isInteger(num10)); // Verifica se num10 é inteiro

// Uma forma de corrigir a imprecisão:
num10 = ((num10 * 100) + (num20 * 100)) / 100;

// Outra forma, mais simples:
num10 = parseFloat(num10.toFixed(2));

// Ou ainda:
num10 = Number(num10.toFixed(2));

let name0 = prompt('M');
let name1 = prompt('a');
let name2 = prompt('r');
let name3 = prompt('i');
let name4 = prompt('o');


