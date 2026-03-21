import api from './api.js';

const ui = {
    async renderizarPensamentos(pensamentos) {
        const listaPensamentos = document.querySelector('#lista-pensamentos');
        listaPensamentos.innerHTML = '';

        try {
            const pensamentos = await api.buscarPensamentos();
            pensamentos.forEach(pensamento => {
                ui.adicionarPensamento(pensamento);
            }); 
            return;
        } catch(error) {
            console.error(error);
            alert(message.error);
            return null;
        };
    },

    async adicionarPensamento(pensamento) {
        const listaPensamentos = document.querySelector('#lista-pensamentos');
        const li = document.createElement('li');
        
        li.classList.add('li-pensamento');
        li.setAttribute('data-id', pensamento.id);

        li.innerHTML = `
            <img src="assets/imagens/aspas-azuis.png" alt="Aspas azuis" class="icone-aspas">
            <div class="pensamento-conteudo">${pensamento.conteudo}</div>
            <div class="pensamento-autoria">${pensamento.autoria}</div>
            <div class="icones">
                <button class="botao-editar">
                    <img class="icone-editar" src="assets/imagens/icone-editar.png" alt="Editar pensamento">
                </button>
                <button class="botao-excluir">
                    <img class="icone-excluir" src="assets/imagens/icone-excluir.png" alt="Excluir pensamento">
                </button>
            </div>
        `

        li.querySelector('.botao-editar').addEventListener('click', () => {
            ui.preencherFormulario(pensamento.id);
        });

        li.querySelector('.botao-excluir').addEventListener('click', async () => {
            try {
                await api.excluirPensamento(pensamento.id);
                ui.renderizarPensamentos();
                return;
            } catch(error) {
                console.error(error);
                alert(message.error);
                return null;
            };
        });

        listaPensamentos.append(li);
        return;        
    },

    async preencherFormulario(pensamentoId) {
        const pensamento = await api.buscarPensamentoPorId(pensamentoId);

        document.getElementById('pensamento-id').value = pensamento.id;
        document.getElementById('pensamento-conteudo').value = pensamento.conteudo;
        document.getElementById('pensamento-autoria').value = pensamento.autoria;
        return;
    }
};

export default ui;