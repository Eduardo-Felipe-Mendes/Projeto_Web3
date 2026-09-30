import api from './api';

const listarUsuarios = async () => {
    const response = await api.get('/api/usuarios');
    return response.data;
};

export {
    listarUsuarios
};