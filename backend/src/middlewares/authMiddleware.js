const jwt = require('jsonwebtoken');

const verificarToken = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            message: 'Token não informado'
        });
    }

    const token = authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({
            message: 'Token não informado'
        });
    }

    try {
        const dados = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        req.usuario = dados;

        next();

    } catch (erro) {
        return res.status(401).json({
            message: 'Token inválido'
        });
    }
};

module.exports = verificarToken;