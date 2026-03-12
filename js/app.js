import ui from './ui.js';
import api from './api.js';

document.addEventListener('DOMContentLoaded', async () => {
    await ui.renderizarPensamentos();

    const formPensamento = document.getElementById('pensamento-form');
    formPensamento.addEventListener('submit', manipularSubmitForm);
    return;
});

async function manipularSubmitForm(event) {
    event.preventDefault();

    const id = document.getElementById('pensamento-id').value;
    const conteudo = document.getElementById('pensamento-conteudo').value;
    const autoria = document.getElementById('pensamento-autoria').value;
    
    try {
        if (id) {
            await api.editarPensamento({ id, conteudo, autoria });
        } else {
            await api.salvarPensamento({ conteudo, autoria });
        };

        await ui.renderizarPensamentos();
        return;
    } catch(error) {
        console.error(error);
        alert(message.error);
        return null;
    };
};