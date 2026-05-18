import axios from "https://cdn.jsdelivr.net/npm/axios@1.7.7/+esm";

const URL_BASE = "http://localhost:3000";

const api = {
  async buscarPensamentos() {
    try {
      const response = await axios.get(`${URL_BASE}/pensamentos`);
      const data = response.data;
      return data;
    } catch (error) {
      console.error(error);
      alert(error.message || "Ocorreu um erro ao buscar os pensamentos.");
      return null;
    }
  },

  async salvarPensamento(pensamento) {
    try {
      const response = await axios.post(`${URL_BASE}/pensamentos`, pensamento);
      const data = response.data;
      return data;
    } catch (error) {
      console.error(error);
      alert(error.message || "Ocorreu um erro ao salvar o pensamento.");
      return null;
    }
  },

  async buscarPensamentoPorId(id) {
    try {
      const response = await axios.get(`${URL_BASE}/pensamentos/${id}`);
      const data = response.data;
      return data;
    } catch (error) {
      console.error(error);
      alert(error.message || "Ocorreu um erro ao buscar o pensamento.");
      return null;
    }
  },

  async editarPensamento(pensamento) {
    try {
      const response = await axios.put(
        `${URL_BASE}/pensamentos/${pensamento.id}`,
        pensamento,
      );
      const data = response.data;
      return data;
    } catch (error) {
      console.error(error);
      alert(error.message || "Ocorreu um erro ao editar o pensamento.");
      return null;
    }
  },

  async excluirPensamento(id) {
    try {
      await axios.delete(`${URL_BASE}/pensamentos/${id}`);
      return;
    } catch (error) {
      console.error(error);
      alert(error.message || "Ocorreu um erro ao excluir o pensamento.");
      return null;
    }
  },
};

export default api;
