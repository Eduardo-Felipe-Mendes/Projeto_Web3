const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.get('/usuarios', usuarioController.buscarUsuarios);
router.get('/usuarios/:id', usuarioController.buscarUsuarioPorId);
router.post('/usuarios', usuarioController.criarUsuario);
router.put('/usuarios/:id', usuarioController.editarUsuario);
router.delete('/usuarios/:id', usuarioController.excluirUsuario);

module.exports = router;