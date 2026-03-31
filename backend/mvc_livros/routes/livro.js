import express from 'express'
import livroController from '../controllers/LivroController.js'

const router = express.Router();
// rota listar livros
router.get('/livros', livroController.listar);

// adicionar livros
router.post('/livros', livroController.adicionar)

// rota para marcar como livro
router.post('/livros/marcar-Lido', livroController.marcarComoLido)

export default router;