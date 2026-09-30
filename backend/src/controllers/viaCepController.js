const viaCepService = require('../services/viaCepService');

const buscarCep = async (req, res) => {
    try {
        const { cep } = req.params;

        const dados = await viaCepService.buscarCep(cep);

        res.status(200).json(dados);
    } catch (error) {
        res.status(500).json({
            error: 'Erro ao buscar CEP'
        });
    }
};

const buscarEndereco = async (req, res) => {
    try {
        const { uf, cidade, logradouro } = req.params;

        const dados = await viaCepService.buscarEndereco(
            uf,
            cidade,
            logradouro
        );

        res.status(200).json(dados);
    } catch (error) {
        res.status(500).json({
            error: 'Erro ao buscar endereço'
        });
    }
};

const buscarCepXml = async (req, res) => {
    try {
        const { cep } = req.params;

        const dados = await viaCepService.buscarCepXml(cep);

        res.type('application/xml');
        res.status(200).send(dados);
    } catch (error) {
        res.status(500).json({
            error: 'Erro ao buscar CEP em XML'
        });
    }
};

module.exports = {
    buscarCep,
    buscarEndereco,
    buscarCepXml
};