const express = require('express');
const chalk = require('chalk');
const fs = require('fs');
const app = express();
const dataAtual = new Date();
const dataFormat = dataAtual.toLocaleString('pt-BR', {
    dateStyle: 'full',
    timeStyle: 'short'
});

setTimeout(() => {
    console.log("atrasado 3 segundos");
}, 3000)

console.log("ola mundo");

console.log(chalk.red('msg vermelha'));

fs.readFile('texto.txt', 'utf-8', (err, data) => {
    if (err) {
        return console.error('Erro ao ler arquivo: ', err);
    }
    console.log('Conteudo do txt:', data);
});

function somar(a, b, callback) {
    const resultado = a + b;
    callback(resultado);
}

somar(1, 1, (resultado) => {
    console.log('Resultado: ', resultado);
})

fs.readFile('teste.json', 'utf-8', (err, data) => {
    if (err) {
        return console.error('Erro ao ler arquivo: ', err);
    }
    const user = JSON.parse(data);
    console.log('json: ', user);
});

console.log('Data atual: ',dataFormat);