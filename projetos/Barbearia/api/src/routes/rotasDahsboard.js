import { Router } from "express";
import { BD } from "../../db.js";
import jwt from 'jsonwebtoken';
import { autenticarToken } from "./../middlewares/autenticacao.js";

const router = Router();
const SECRET_KEY = 'sua_chave_secreta'

router.get('/dashboard', async(req, res) => {
    try{
        console.log('Entrou')
            const resumoMes = `
                SELECT 
                    COUNT(*) AS total_agendamentos,
                    COALESCE(SUM(s.preco), 0) AS total_receita
                FROM agendamentos a
                LEFT JOIN servicos s ON s.id_servico = a.id_servico
                WHERE EXTRACT(MONTH FROM a.data_hora) = EXTRACT(MONTH FROM CURRENT_DATE)
                AND EXTRACT(YEAR FROM a.data_hora) = EXTRACT(YEAR FROM CURRENT_DATE)
            `

        const resResumo = await BD.query(resumoMes)
    }
    catch(error){
        console.error('Erro no dashboard:', error.message)
        return res.status(500).json({error: 'Erro no servidor'})
    }
})

export default router
