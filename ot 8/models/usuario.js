const { rejects } = require('assert');
const schemaUsuario = require('../validators/validator');
const db = require('../config/database')

const Usuario = {};

Usuario.buscarTodos = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM usuarios_ot8', (err, results) =>{
            if(err) return reject(err);
            resolve(results)
        })
    })
}

Usuario.inserir = (usuario) => {
    return new Promise((resolve, reject) => {
        const { nome, email, senha}  = usuario;
        const sql = 'INSERT INTO usuarios_ot8 (nome, email, senha) VALUES (?, ?, ?)'
        db.query(sql, [nome, email, senha], (err, result) => {
            if(err) return reject(err);
            resolve({id: result.insertId, ...usuario})
        })
    })
}

module.exports = Usuario;
