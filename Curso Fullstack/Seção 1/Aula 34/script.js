document.addEventListener('DOMContentLoaded', function() {
    function meuEscopo() {
        const formulario = document.querySelector('.form');
        const resultadoDiv = document.querySelector('.resultado');

        // Opcional: Verifique se o formulário existe antes de adicionar o ouvinte,
        // embora DOMContentLoaded geralmente resolva isso se o seletor estiver correto
        if (!formulario) {
            console.error("Elemento com a classe 'form' não encontrado!");
            return; // Sai da função se o formulário for null
        }

        const pessoas = [];

        function recebeEventoForm(evento) {
            evento.preventDefault(); // Previne o comportamento padrão de recarregar a página

            // Pega os elementos do formulário e seus VALORES
            const nome = formulario.querySelector('.nome').value;
            const sobrenome = formulario.querySelector('.sobrenome').value;
            const altura = formulario.querySelector('.altura').value;
            const idade = formulario.querySelector('.idade').value;
            const peso = formulario.querySelector('.peso').value;

            // Cria um objeto com os dados da pessoa
            const pessoa = {
                nome: nome,
                sobrenome: sobrenome,
                altura: altura,
                idade: idade,
                peso: peso
            };

            // Adiciona a pessoa ao array de pessoas
            pessoas.push(pessoa);
            console.log(pessoas); // Para verificar no console se os dados estão sendo pegos corretamente

            // Exemplo de como você poderia exibir os dados na div 'resultado'
            if (resultadoDiv) { // Garante que o elemento resultadoDiv também exista
                resultadoDiv.innerHTML += `<p>${pessoa.nome} ${pessoa.sobrenome}, ${pessoa.idade} anos, ${pessoa.altura}m, ${pessoa.peso}kg</p>`;
            }
        }

        // Adiciona o 'ouvinte' de evento ao formulário
        formulario.addEventListener('submit', recebeEventoForm);
    }

    meuEscopo();
});