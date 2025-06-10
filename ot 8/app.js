const express = require('express');
const app = express();
const usuarioRoutes = require('./routes/routes');

app.use(express.json());
app.use(usuarioRoutes);

app.listen(3000, () => {
    console.log('Servidor rodando na porta http://localhost:3000/');
});
