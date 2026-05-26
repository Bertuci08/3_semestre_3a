import { Router } from "express";
import { BD } from "../../db.js";

const router = Router();

// rota unica para dashboard
router.get('/dashboard', async (req, res) => {

    try {

        console.log('Entrou no dashboard');

        // resumo do mês
        const resumoMes = `
            SELECT 
                SUM(CASE WHEN a.status = 'confirmado' THEN s.preco ELSE 0 END) as faturamento,
                SUM(CASE WHEN a.status = 'confirmado' THEN 1 ELSE 0 END) as confirmados,
                SUM(CASE WHEN a.status = 'cancelado' THEN 1 ELSE 0 END) as cancelados
            FROM agendamentos a
            INNER JOIN servicos s 
                ON a.id_servico = s.id_servico
            WHERE DATE_TRUNC('month', a.data_hora) = DATE_TRUNC('month', CURRENT_DATE)
            AND a.ativo = true
        `;

        // serviços mais agendados
        const servicosMaisAgendados = `
            SELECT 
                s.nome,
                COUNT(a.id_agendamento) as total
            FROM agendamentos a
            INNER JOIN servicos s 
                ON a.id_servico = s.id_servico
            WHERE a.ativo = true
            GROUP BY s.nome
            ORDER BY total DESC
        `;

        // últimos agendamentos
        const ultimosAgendamentos = `
            SELECT 
                u.nome as cliente,
                s.nome as servico,
                a.status,
                TO_CHAR(a.data_hora, 'DD/MM/YYYY HH24:MI') as data
            FROM agendamentos a
            INNER JOIN usuarios u 
                ON a.id_cliente = u.id_usuario
            INNER JOIN servicos s 
                ON a.id_servico = s.id_servico
            WHERE a.ativo = true
            ORDER BY a.data_hora DESC
            LIMIT 5
        `;

        // evolução dos agendamentos
        const evolucao = `
            SELECT 
                TO_CHAR(a.data_hora, 'MM/YYYY') as mes,
                SUM(CASE WHEN a.status = 'confirmado' THEN 1 ELSE 0 END) as confirmados,
                SUM(CASE WHEN a.status = 'cancelado' THEN 1 ELSE 0 END) as cancelados
            FROM agendamentos a
            WHERE a.ativo = true
            GROUP BY TO_CHAR(a.data_hora, 'MM/YYYY'),
                     DATE_TRUNC('month', a.data_hora)
            ORDER BY DATE_TRUNC('month', a.data_hora) ASC
        `;

        const resResumo = await BD.query(resumoMes);
        const resServicos = await BD.query(servicosMaisAgendados);
        const resUltimos = await BD.query(ultimosAgendamentos);
        const resEvolucao = await BD.query(evolucao);

        const dadosDashboard = {
            resumoMesAtual: resResumo.rows[0],
            servicosMaisAgendados: resServicos.rows,
            ultimosAgendamentos: resUltimos.rows,
            resultadoEvolucao: resEvolucao.rows
        };

        return res.status(200).json(dadosDashboard);

    } catch (error) {

        console.log(error);

        return res.status(500).json({
            erro: error.message
        });
    }
});

export default router;