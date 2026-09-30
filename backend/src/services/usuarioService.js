const Usuario = require('../models/Usuario');
const bcrypt = require('bcrypt');

const obterTodosUsuarios = async () => {
    return await Usuario.findAll({
        attributes: {
            exclude: ['senha']
        }
    });
};

const criarUsuario = async (dadosUsuario) => {
    return await Usuario.create(dadosUsuario);
};

const obterUsuarioPorId = async (id) => {
    return await Usuario.findByPk(id, {
        attributes: {
            exclude: ['senha']
        }
    });
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

const loginUsuario = async (email, senha) => {
    const usuario = await Usuario.findOne({
        where: { email }
    });

    if (!usuario) {
        return null;
    }

    const senhaCorreta = await bcrypt.compare(
        senha,
        usuario.senha
    );

    if (!senhaCorreta) {
        return null;
    }

    return usuario;
};

module.exports = {
    obterTodosUsuarios,
    criarUsuario,
    obterUsuarioPorId,
    editarUsuario,
    excluirUsuario,
    loginUsuario
};