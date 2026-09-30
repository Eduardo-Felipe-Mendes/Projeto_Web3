import api from './api';

const getUsuarios = async () => {
    const response = await api.get('/api/usuarios');
    return response.data;
};

const getUsuarioPorId = async (id) => {
    const response = await api.get(`/api/usuarios/${id}`);
    return response.data;
};

const editarUsuario = async (id, dadosUsuario) => {
    const response = await api.put(`/api/usuarios/${id}`, dadosUsuario);
    return response.data;
};

const excluirUsuario = async (id) => {
    const response = await api.delete(`/api/usuarios/${id}`);
    return response.data;
};

const criarUsuario = async (dadosUsuario) => {
    const response = await api.post('/api/usuarios', dadosUsuario);
    return response.data;
};

export {
    getUsuarios,
    getUsuarioPorId,
    editarUsuario,
    excluirUsuario,
    criarUsuario
};