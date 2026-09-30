const Usuario = require('../models/Usuario');

const obterTodosUsuarios = async () => {
    return await Usuario.findAll();
};

const criarUsuario = async (dadosUsuario) => {
    return await Usuario.create(dadosUsuario);
};

const obterUsuarioPorId = async (id) => {
    return await Usuario.findByPk(id);
};

const editarUsuario = async (id, dadosUsuario) => {
    const usuario = await Usuario.findByPk(id);

    if (!usuario) {
        return null;
    }

    return await usuario.update(dadosUsuario);
};

const excluirUsuario = async (id) => {
    const usuario = await Usuario.findByPk(id);

    if (!usuario) {
        return null;
    }

    await usuario.destroy();

    return usuario;
};

module.exports = {
    obterTodosUsuarios,
    criarUsuario,
    obterUsuarioPorId,
    editarUsuario,
    excluirUsuario
};