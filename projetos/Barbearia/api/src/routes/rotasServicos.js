import { Router } from "express";
import { BD } from "../../db.js";

const router = Router();

//Criando o endpoint para listar todos os serviços
router.get('/servicos', async (req, res) => {
    try {
        const comando = `SELECT * FROM servicos WHERE ativo = true`

        const servicos = await BD.query(comando);

        return res.status(200).json(servicos.rows);
    } catch (error) {
        console.error('Erro ao listar servicos', error.message);
        return res.status(500).json({ error: 'Erro ao listar servicos' })
    }
})

//Endpoint seguro contra sql Injection
router.post('/servicos', async (req, res) => {
    const { nome, preco, descricao } = req.body;
    try {
        const comando = `INSERT INTO SERVICOS(nome, preco, descricao) VALUES($1, $2, $3)`
        const valores = [nome, preco, descricao];

        await BD.query(comando, valores)
        console.log(comando, valores);

        return res.status(201).json("Servico cadastrado.");
    } catch (error) {
        console.error('Erro ao cadastrar servicos', error.message);
        return res.status(500).json({ error: 'Erro ao cadastrar servicos' })
    }
})

// recebendo o parametro pelo id e buscando o servico
router.put('/servicos/:id_servico', async (req, res) => {
    const { id_servico } = req.params;

    const { nome, preco, descricao } = req.body;
    try {
        const verificarServico = await BD.query(`SELECT * FROM SERVICOS 
            WHERE id_servico = $1`, [id_servico]);
        if (verificarServico.rows.length === 0) {
            return res.status(404).json({ message: 'Servico não encontrado' })
        }

        const comando = `UPDATE SERVICOS SET nome = $1, preco = $2, descricao = $3 WHERE
        id_servico = $4`;
        const valores = [nome, preco, descricao, id_servico];
        await BD.query(comando, valores);

        return res.status(200).json("Servico atualizado.");
    } catch (error) {
        console.error('Erro ao atualizar servicos', error.message);
        return res.status(500).json({ error: 'Erro ao atualizar servicos' })
    }
})

router.delete('/servicos/:id_servico', async (req, res) => {
    const { id_servico } = req.params;
    try {
        const comando = `UPDATE SERVICOS SET ativo = false WHERE id_servico = $1 `
        await BD.query(comando, [id_servico])
        return res.status(200).json("Servico deletado.");
    } catch (error) {
        console.error('Erro ao deletar servico', error.message);
        return res.status(500).json({ error: 'Erro ao deletar servico' })
    }
})

export default router;