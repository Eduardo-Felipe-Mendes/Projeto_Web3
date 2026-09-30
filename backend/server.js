const express = require('express');
const usuarioRoutes = require('./src/routes/usuarioRoutes');
const viaCepRoutes = require('./src/routes/viaCepRoutes');

const app = express();

app.use(express.json());

app.use('/api', usuarioRoutes);
app.use('/api', viaCepRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});