import api from './api';

const login = async (email, senha) => {
    const response = await api.post('/api/login', {
        email,
        senha
    });

    return response.data;
};

export {
    login
};