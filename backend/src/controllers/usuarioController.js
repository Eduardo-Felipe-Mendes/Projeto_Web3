const usuarioService = require('../services/usuarioService');

const buscarUsuarios = async (req, res) => {
    try {
        const usuarios = await usuarioService.obterTodosUsuarios();

        res.status(200).json({ data: usuarios });

    } catch (error) {
        res.status(500).json({
            error: 'Erro interno ao buscar usuários'
        });
    }
};

module.exports = {
    buscarUsuarios
};

const criarUsuario = async (req, res) => {
    try {
        const usuario = await usuarioService.criarUsuario(req.body);

        res.status(201).json({
            data: usuario
        });

    } catch (error) {
        res.status(500).json({
            error: 'Erro interno ao criar usuário'
        });
    }
};

const buscarUsuarioPorId = async (req, res) => {
    try {
        const { id } = req.params;

        const usuario = await usuarioService.obterUsuarioPorId(id);

        if (!usuario) {
            return res.status(404).json({
                error: 'Usuário não encontrado'
            });
        }

        res.status(200).json({
            data: usuario
        });

    } catch (error) {
        res.status(500).json({
            error: 'Erro interno ao buscar usuário'
        });
    }
};

const editarUsuario = async (req, res) => {
    try {
        const { id } = req.params;

        const usuario = await usuarioService.editarUsuario(
            id,
            req.body
        );

        if (!usuario) {
            return res.status(404).json({
                error: 'Usuário não encontrado'
            });
        }

        res.status(200).json({
            data: usuario
        });

    } catch (error) {
        res.status(500).json({
            error: 'Erro interno ao editar usuário'
        });
    }
};

const excluirUsuario = async (req, res) => {
    try {
        const { id } = req.params;

        const usuario = await usuarioService.excluirUsuario(id);

        if (!usuario) {
            return res.status(404).json({
                error: 'Usuário não encontrado'
            });
        }

        res.status(200).json({
            message: 'Usuário excluído com sucesso'
        });

    } catch (error) {
        res.status(500).json({
            error: 'Erro interno ao excluir usuário'
        });
    }
};

module.exports = {
    buscarUsuarios,
    criarUsuario,
    buscarUsuarioPorId,
    editarUsuario,
    excluirUsuario
};