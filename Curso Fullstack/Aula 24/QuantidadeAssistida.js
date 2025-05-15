const usuario = 'Leonardo';

// Valores iniciais (podem ser alterados abaixo)
let total = 7.65;         // Total de horas do curso
let aulas = 28;           // Total de aulas
let assistidas = 17;      // Aulas assistidas

// Valores atualizados manualmente
total = 345;              // Total de horas reais do curso
aulas = 3564;             // Total real de aulas
assistidas = 345;         // Aulas realmente assistidas

// Cálculo do tempo por aula
const porAula = total / aulas;

// Cálculo do total de horas assistidas
let horasAssistidas = assistidas * porAula;
horasAssistidas = horasAssistidas.toFixed(2); // Limita para 2 casas decimais

// Mostra o resultado
console.log(`${usuario}, assistiu ${horasAssistidas} horas de aula na seção 2 do curso de JavaScript da Udemy.`);


// Parte 2 — Cálculo de valor por render
const totalDeRender = 17;   // Total de renders
const entregues = 9;        // Renders já entregues
let valor = 60;             // Valor total a receber

// Cálculo de valor por render
let porRender = valor / totalDeRender;
porRender = porRender.toFixed(2); // Limita para 2 casas decimais

// Mostra o valor por render
console.log(`R$ ${porRender} por render.`);