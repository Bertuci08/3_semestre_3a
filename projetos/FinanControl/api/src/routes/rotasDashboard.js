import { Router } from "express";
import { BD } from "../../db.js";
import jwt from 'jsonwebtoken';
import { autenticarToken } from "./../middlewares/autenticacao.js";

const router = Router();
const SECRET_KEY = 'sua_chave_secreta'

// rota unica para o dashBoard
router.get('/dashboard', async(req, res) => {
    try{
        console.log('Entrou')
        // buscar resumo do mes atual
        const resumoMes = `
            SELECT SUM(CASE WHEN tipo = 'E' THEN valor ELSE 0 END) as entradas, 
            SUM(CASE WHEN tipo = 'S' THEN valor ELSE 0 END) as saidas, 
            SUM(CASE WHEN tipo = 'E' THEN valor ELSE -valor END) as saldo
            FROM transacoes
            WHERE DATE_TRUNC('month', data_registro) = DATE_TRUNC('month', CURRENT_DATE)
        `

        const resResumo = await BD.query(resumoMes)

        const dadosDashboard = { resumoMesAtual: resResumo.rows[0] }

        return res.status(200).json(dadosDashboard)
    }
    catch(error){
        return res.status(500).json({error: 'Error no servidor'})
    }
})

export default router