let nomeCompleto = prompt('Digite seu nome completo:');
let letra = prompt('Escolha uma letra do seu nome, para ser utilizada no processo:');
document.body.innerHTML += `Seu nome é: ${nomeCompleto}<br />`;

nomeCompleto = nomeCompleto.toLowerCase();

let caracteres = nomeCompleto.length;
document.body.innerHTML += `Seu nome tem ${caracteres} caracteres.<br />`;

let segundaLetra = nomeCompleto[1];
segundaLetra = segundaLetra.toUpperCase();
document.body.innerHTML += `A segunda letra do seu nome é: ${segundaLetra}.<br />`;

letra = letra.toLowerCase();

const primeiroIndice = nomeCompleto.indexOf(letra);
document.body.innerHTML += `O primeiro índice da letra "${letra}" no seu nome é: ${primeiroIndice}.<br />`;

const ultimoIndice = nomeCompleto.lastIndexOf(letra);
document.body.innerHTML += `O último índice da letra "${letra}" no seu nome é: ${ultimoIndice}.<br />`;

const tresLetras = nomeCompleto.slice(caracteres - 3);
document.body.innerHTML += `As três últimas letras do seu nome são: "${tresLetras}".<br />`

const palavras = nomeCompleto.slice();
document.body.innerHTML += `Seu nome é composto pelas palavras: "${palavras}"<br />`

const maiusculas = nomeCompleto.toUpperCase();
document.body.innerHTML += `O seu nome em letras maisculas: ${maiusculas}<br />`

const minusculas = nomeCompleto.toLowerCase();
document.body.innerHTML += `O seu nome em letras minusculas: ${minusculas}<br />`