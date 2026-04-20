const express = require('express');
const router = express.Router();

const produtos = [
  { id: 1, nome: 'Notebook', preco: 3500 },
  { id: 2, nome: 'Mouse', preco: 80 },
];

router.get('/', (req, res) => {
  res.json(produtos);
});

router.get('/:id', (req, res) => {
  const produto = produtos.find(p => p.id === parseInt(req.params.id));
  if (!produto) {
    return res.status(404).json({ mensagem: 'Produto não encontrado' });
  }
  res.json(produto);
});

router.post('/', (req, res) => {
  const { nome, preco } = req.body;
  const novoProduto = { id: produtos.length + 1, nome, preco };
  produtos.push(novoProduto);
  res.status(201).json(novoProduto);
});

module.exports = router;
