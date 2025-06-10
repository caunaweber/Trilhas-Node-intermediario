const Usuario = require('../models/usuario');
const schemaUsuario = require('../validators/validator');

exports.listarUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.buscarTodos();
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao buscar usuários.' });
  }
};

exports.cadastrarUsuario = async (req, res) => {
  const { error } = schemaUsuario.validate(req.body);

  if (error) {
    return res.status(400).json({ erro: error.details[0].message });
  }

  try {
    const novoUsuario = await Usuario.inserir(req.body);
    res.status(201).json(novoUsuario);
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: 'Erro ao cadastrar usuário.' });
  }
};
