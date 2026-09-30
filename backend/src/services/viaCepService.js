const buscarCep = async (cep) => {
    const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const dados = await resposta.json();

    return dados;
};

const buscarEndereco = async (uf, cidade, logradouro) => {
    const resposta = await fetch(
        `https://viacep.com.br/ws/${uf}/${cidade}/${logradouro}/json/`
    );

    const dados = await resposta.json();

    return dados;
};

const buscarCepXml = async (cep) => {
    const resposta = await fetch(`https://viacep.com.br/ws/${cep}/xml/`);
    const dados = await resposta.text();

    return dados;
};

module.exports = {
    buscarCep,
    buscarEndereco,
    buscarCepXml
};