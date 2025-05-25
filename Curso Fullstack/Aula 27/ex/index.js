const numero = Number(prompt('Digite um numero:')); // Ou criando uma outra variavel transformando a variavel numero em Number!
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto1');
numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p>Seu número - 2 é: <h2>${numero - 2}</h2></p>`;

const raiz = Math.sqrt(numero);
const texto2 = document.getElementById('texto2');
texto2.innerHTML = `<p>Raiz quadrada: <h2>${raiz}</h2>`;

const inteiro = Number.isInteger(numero);
texto3.innerHTML = `<p>É inteiro? -> <h2>${inteiro}</h2></p>`;

const nan = Number.isNaN(numero);
texto4.innerHTML = `<p>É um NaN? -> <h2>${nan}</h2></p>`;

const praBaixo = Math.floor(numero);
texto5.innerHTML = `<p>Arredondado pra baixo:<h2>${praBaixo}</h2></p>`;

const praCima = Math.ceil(numero);
texto6.innerHTML = `<p>Arredondando pra cima:<h2>${praCima}</h2></p>`;

/* if (Number.isNaN(numero)) {
    texto7.innerHTML = `${numero} não é um Number!`
} */

const duasCasas = numero.toFixed(2);
texto7.innerHTML = `<p>Decimais limitas até 2 casas: <h2>${duasCasas}</h2></p>`