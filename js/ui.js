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
        `
        listaPensamentos.append(li);
        return;        
    }
}

export default ui;