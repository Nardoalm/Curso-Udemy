let umaString = 'Um texto'; // Declara uma variável do tipo string

console.log(umaString[0]); // Mostra o caractere no índice 0 (nesse caso, "U")

console.log(umaString.charAt(7)); // Mostra o caractere no índice 7

console.log(umaString.concat(' Adicionando mais texto.')); // Junta strings (concatenação)

console.log(umaString.indexOf('Um')); // Retorna o índice onde a palavra "Um" começa

console.log(umaString.indexOf('Um', 3)); // Procura "Um" a partir do índice 3 (não encontra, retorna -1)

console.log(umaString.lastIndexOf('o')); // Procura o último "o" na string

console.log(umaString.lastIndexOf('o', 3)); // Procura "o" até o índice 3 (de trás para frente)

console.log(umaString.search(/x/)); // Retorna o índice do primeiro "x" encontrado (usa regex)

console.log(umaString.replace('Um', 'Outro')); // Troca "Um" por "Outro"

console.log(umaString.replace(/t/g, 'T')); // Troca todas as letras "t" por "T" (usando regex)

console.log(umaString.length); // Mostra o tamanho da string (número de caracteres)

console.log(umaString.slice(2, 6)); // Recorta do índice 2 ao 5 (não inclui o 6)

console.log(umaString.substring(1, 4)); // Recorta do índice 1 ao 3 (não inclui o 4)

console.log(umaString.match(/[a-z]/g)); // Retorna todas as letras minúsculas (com regex)

console.log(umaString.search(/[a-z]/g)); // Retorna o índice da primeira letra minúscula encontrada

console.log(umaString.split('u')); // Divide a string em partes, removendo o "u"

console.log(umaString.split('u', 2)); // Divide a string em no máximo 2 partes

console.log(umaString.toUpperCase()); // Converte tudo para maiúsculo

console.log(umaString.toLowerCase()); // Converte tudo para minúsculo

let outraString = '   Olá mundo!   '; 
console.log(outraString.trim()); // Remove espaços em branco do início e do fim

document.write('Um texto'); // Escreve algo diretamente no HTML da página

document.body.innerHTML = 'Algum texto'; // Substitui o conteúdo do corpo da página

document.body.innerHTML += ' Algum outro texto'; // Adiciona texto ao conteúdo atual da página

document.body.innerHTML += ' Quebrando linha <br />'; // Adiciona uma quebra de linha no HTML