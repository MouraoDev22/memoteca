const URL_BASE = 'http://localhost:3000';

const api = {
    async buscarPensamentos() {
        try {
            const response = await axios.get(`${URL_BASE}/pensamentos`);
            const data = await response.data;
            return data;
        } catch(error) {
            console.error(error);
            alert(message.error);
            return null;
        };
    },

    async salvarPensamento(pensamento) {
        try {
            const response = await axios.post(`${URL_BASE}/pensamentos`, pensamento);
            const data = await response.data;
            return data;
        } catch(error) {
            console.error(error);
            alert(message.error);
            return null;
        };
    },

    async buscarPensamentoPorId(id) {
        try {
            const response = await axios.get(`${URL_BASE}/pensamentos/${id}`);
            const data = await response.data;
            return data;
        } catch(error) {
            console.error(error);
            alert(message.error);
            return null;
        };
    },

    async editarPensamento(pensamento) {
        try {
            const response = await axios.put(`${URL_BASE}/pensamentos/${pensamento.id}`, pensamento);
            const data = await response.data;
            return data;
        } catch(error) {
            console.error(error);
            alert(message.error);
            return null;
        };
    },

    async excluirPensamento(id) {
        try {
            const response = await axios.delete(`${URL_BASE}/pensamentos/${id}`);
            return;
        } catch(error) {
            console.error(error);
            alert(message.error);
            return null;
        };
    },
};

export default api;