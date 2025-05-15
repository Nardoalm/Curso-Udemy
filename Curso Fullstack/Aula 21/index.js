var varA1 = 'A';
var varB1 = 'B';
var varC1 = 'C';

// Usando uma variável temporária para armazenar o valor de varA
var temp = varA1;
varA1 = varB1; // varA agora é 'B'
varB1 = varC1; // varB agora é 'C'
varC1 = temp; // varC agora é 'A'

//console.log(varA, varB, varC); // Saída: B C A


// Também da para fazer dessa forma:

let varA = 'A';
let varB = 'B';
let varC = 'C';

[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC);

