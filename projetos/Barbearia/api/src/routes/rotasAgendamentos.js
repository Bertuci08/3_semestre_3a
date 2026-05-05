import { Router } from 'express';
import { BD } from '../../db.js';

const router = Router();

router.get('/agendamentos', async (req, res) => {
    try {
        const comando = `SELECT * FROM agendamentos WHERE ativo = true`

        const agendamentos = await BD.query(comando);

        return res.status(200).json(agendamentos.rows);
    } catch (error) {
        console.error('Erro ao listar agendamentos', error.message);
        return res.status(500).json({ error: 'Erro ao listar agendamentos' })
    }
})

router.post('/agendamentos', async (req, res) => {
    const { id_cliente, id_servico, data_hora, status } = req.body;
    try {
        const comando = `INSERT INTO AGENDAMENTOS(id_cliente, id_servico,
        data_hora, status) VALUES($1, $2, $3, $4)`
        const valores = [id_cliente, id_servico, data_hora, status];

        await BD.query(comando, valores)
        return res.status(201).json("Agendamento cadastrado.");
    } catch (error) {
        console.error('Erro ao cadastrar agendamento', error.message);
        return res.status(500).json({ error: 'Erro ao cadastrar agendamento' })
    }
})

router.put('/agendamentos/:id_agendamento', async (req, res) => {
    const { id_agendamento } = req.params;
    const { id_cliente, id_servico, data_hora, status } = req.body;

    try {
        const verificarAgendamento = await BD.query(`SELECT * FROM AGENDAMENTOS 
            WHERE id_agendamento = $1`, [id_agendamento]);

        console.log(verificarAgendamento.rows);
        if (verificarAgendamento.rows.length === 0) {
            return res.status(404).json({ message: 'Agendamento não encontrado' })
        }

        const comando = `UPDATE AGENDAMENTOS SET id_cliente = $1, id_servico = $2, data_hora = $3, status = $4 WHERE
        id_agendamento = $5`;
        console.log(comando);
        const valores = [id_cliente, id_servico, data_hora, status, id_agendamento];

        console.log(valores);
        await BD.query(comando, valores);
        return res.status(200).json({ message: 'Agendamento atualizado' });
    } catch (error) {
        console.error('Erro ao buscar agendamento', error.message);
        return res.status(500).json({ error: 'Erro ao buscar agendamento' })
    }
})

router.delete('/agendamentos/:id_agendamento', async (req, res) => {
    const { id_agendamento } = req.params;

    try {
        const comando = `UPDATE AGENDAMENTOS SET ativo = false WHERE id_agendamento = $1`;
        await BD.query(comando, [id_agendamento]);
        return res.status(200).json({ message: 'Agendamento excluído' });
    } catch (error) {
        console.error('Erro ao excluir agendamento', error.message);
        return res.status(500).json({ error: 'Erro ao excluir agendamento' })
    }
})


export default router;