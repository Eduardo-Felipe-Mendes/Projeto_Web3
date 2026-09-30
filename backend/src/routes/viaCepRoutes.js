const express = require('express');
const router = express.Router();

const viaCepController = require('../controllers/viaCepController');

router.get('/cep/:cep', viaCepController.buscarCep);

router.get(
    '/endereco/:uf/:cidade/:logradouro',
    viaCepController.buscarEndereco
);

router.get('/cep/:cep/xml', viaCepController.buscarCepXml);

module.exports = router;