const express = require('express');
const app = new express();
const mysql = require('mysql2');
const PORT = 3000;

const connection = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: 'root',
    database: 'projeto_node',
    port: 3307 
  });
  exports.connection = connection;
  
  connection.connect((err) => {
    if (err) {
      console.error("Erro ao se conectar ao banco: ", err);
      process.exit(1);
    }
    console.log("Conectado ao banco");
  });

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    connection.query('SELECT * FROM usuarios',(err, results) =>{
        if(err) throw err;
        res.render('index', {usuarios: results, title: 'SSR com Node.js'})
    })
})

app.listen(PORT, () =>{
    console.log(`Servidor rodando na porta http://localhost:${PORT}`);
})