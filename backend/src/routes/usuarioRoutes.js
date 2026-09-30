const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const verificarToken = require('../middlewares/authMiddleware');

router.post('/login', usuarioController.login);

router.get('/usuarios', verificarToken, usuarioController.buscarUsuarios);
router.get('/usuarios/:id', verificarToken, usuarioController.buscarUsuarioPorId);
router.post('/usuarios', verificarToken, usuarioController.criarUsuario);
router.put('/usuarios/:id', verificarToken, usuarioController.editarUsuario);
router.delete('/usuarios/:id', verificarToken, usuarioController.excluirUsuario);

module.exports = router;