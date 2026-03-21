const api = {
    async buscarPensamentos() {
        try {
            const response = await fetch('http://localhost:3000/pensamentos');
            const data = await response.json();
            return data;
        } catch(error) {
            console.error(error);
            alert(message.error);
            return null;
        };
    },

    async salvarPensamento(pensamento) {
        try {
            const response = await fetch('http://localhost:3000/pensamentos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(pensamento)
            });
            const data = await response.json();
            return data;
        } catch(error) {
            console.error(error);
            alert(message.error);
            return null;
        };
    },

    async buscarPensamentoPorId(id) {
        try {
            const response = await fetch(`http://localhost:3000/pensamentos/${id}`);
            const data = await response.json();
            return data;
        } catch(error) {
            console.error(error);
            alert(message.error);
            return null;
        };
    },

    async editarPensamento(pensamento) {
        try {
            const response = await fetch(`http://localhost:3000/pensamentos/${pensamento.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(pensamento)
            });
            const data = await response.json();
            return data;
        } catch(error) {
            console.error(error);
            alert(message.error);
            return null;
        };
    },

    async excluirPensamento(id) {
        try {
            const response = await fetch(`http://localhost:3000/pensamentos/${id}`, {
                method: 'DELETE'
            });
            return;
        } catch(error) {
            console.error(error);
            alert(message.error);
            return null;
        };
    },
}

export default api;