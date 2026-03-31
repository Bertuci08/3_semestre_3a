import express from 'express';
import rankingController from '../controllers/rankingController.js';

const router = express.Router();

router.get('/ranking', rankingController.listar);
router.post('/ranking', rankingController.adicionar);
router.post('/ranking/adicionar-pontos', rankingController.adicionarPontos);

export default router;