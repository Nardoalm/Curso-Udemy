
                            /* ARRAYS */

//                0      1            2         3           4
const compras = ['Pão', 'Mortadela', 'Queijo', 'Maionese', 'Tomate'];

// Para acessar os elementos dentro de um array, podemos utilizar os colchetes. ex:
console.log(compras[1]); // = Mortadela

// Para editar indices do array, podemos fazer dessa forma:

compras[1] = 'Presunto';
console.log('Novo valor: ', compras); // = Presunto

// Podemos inserir elementos dessas 2 formas:

compras[5] = 'Ketchup';
compras[compras.length] = 'Manteiga'; // Adiciona no fim

// A forma mais certa de se fazer isso, é dessa maneira:

compras.push('Farinha'); // Vai mandar "Farinha" para o ultimo indice disponivel 

console.log(compras);

// Uma forma de colocar um elemento como o primeiro (índice 0):

compras.unshift('Macarrão');

// Para excluir um elemento do array, podemos fzr da seguinte forma:

compras.pop(); // Vai apagar o ultimo indice. 
// Podemos usar tambem, ele para salvar o ultimo indice antes de apagar ele, dessa forma:
const removido = compras.pop(); // Salva o elemento 'Farinha' antes de apaga-lo

// Tambem, existe o contrario dele, que funciona da mesma forma:

compras.shift(); // Vai apagar o primeiro elemento