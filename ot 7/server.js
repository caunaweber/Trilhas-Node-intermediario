const { Socket } = require('dgram');
const express = require('express');
const http = require('http');
const { connect } = require('http2');
const {Server} = require('socket.io');

const app = express();
const server = http.createServer(app);

const PORT = 3000;

const io = new Server(server); 

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client.html');
});

io.on('connection', (socket) =>{
    console.log(`[Servidor Socket.io] Um novo cliente conectado: ${socket.id}`);
    
    
    socket.on('clientMessage', (message) => {
        console.log(`[Servidor Socket.io] Mensagem recebida de ${socket.id}: "${message}"`)
    });
});

server.listen(PORT, () => {
    console.log(`Servidor Socket.io e Express ouvindo na porta ${PORT}`);
    console.log(`Acesse http://localhost:${PORT} no seu navegador.`);
});