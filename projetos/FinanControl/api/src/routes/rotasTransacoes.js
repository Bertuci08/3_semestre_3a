import { Router } from 'express';
import { BD } from '../../db.js';

const router = Router();

// Listar transações,mostrando categoria e subCategoria
router.get('/transacoes', async (req, res) => {
    try {
        //cria uma variavel para enviar o comando sql
        const comando = `SELECT t.id_transacao, t.valor, t.descricao, TO_CHAR(t.data_registro, 'DD/MM/YYYY') AS data_registro,
                                                                    TO_CHAR(t.data_vencimento, 'DD/MM/YYYY') AS data_vencimento,
                                                                    TO_CHAR(t.data_pagamento, 'DD/MM/YYYY') AS data_pagamento, 
                                                                    t.tipo,
                                                                    c.nome AS nome_categoria, 
                                                                    s.nome AS nome_subcategoria
                                                                FROM transacoes t
                                                                LEFT JOIN categorias c ON t.id_categoria = c.id_categoria
                                                                LEFT JOIN subcategorias s ON t.id_subcategoria = s.id_subcategoria`;

        //cria uma variavel para receber o retorno do sql
        const transacoes = await BD.query(comando);

        //retorno para a pagina, o json com os dados 
        //buscados do sql
        return res.status(200).json(transacoes.rows);//200 ok
    } catch (error) {
        console.error('Erro ao listar transacoes', error.message);
        return res.status(500).json({ error: 'Erro ao listar transacoes' })
    }
})

router.post('/transacoes', async (req, res) => {
    const { valor, descricao, data_registro, data_vencimento, data_pagamento, tipo, id_categoria, id_subcategoria } = req.body;
    try {
        const comando = `INSERT INTO transacoes(valor, descricao, data_registro, data_vencimento, data_pagamento, tipo, id_categoria, id_subcategoria) VALUES($1, $2, TO_DATE($3, 'DD/MM/YYYY'), TO_DATE($4, 'DD/MM/YYYY'), TO_DATE($5, 'DD/MM/YYYY'), $6, $7, $8)`;
        const valores = [valor, descricao, data_registro, data_vencimento, data_pagamento, tipo, id_categoria, id_subcategoria];

        await BD.query(comando, valores);
        return res.status(201).json({ message: 'Transação cadastrada com sucesso!' });
    } catch (error) {
        console.error('Erro ao cadastrar transacao', error.message);
        return res.status(500).json({ error: 'Erro ao cadastrar transacao' });
    }
})

router.put('/transacoes/:id_transacao', async (req, res) => {
    const { id_transacao } = req.params;
    const { valor, descricao, data_registro, data_vencimento, data_pagamento, tipo, id_categoria, id_subcategoria } = req.body;

    try {
        const verificarTransacao = await BD.query(`SELECT * FROM transacoes WHERE id_transacao = $1`, [id_transacao]);
        if (verificarTransacao.rows.length === 0) {
            return res.status(404).json({ message: 'Transação não encontrada' });
        }

        const comando = `UPDATE transacoes SET valor = $1, descricao = $2, data_registro = TO_DATE($3, 'DD/MM/YYYY'), data_vencimento = TO_DATE($4, 'DD/MM/YYYY'), data_pagamento = TO_DATE($5, 'DD/MM/YYYY'), tipo = $6, id_categoria = $7, id_subcategoria = $8 WHERE id_transacao = $9`;
        const valores = [valor, descricao, data_registro, data_vencimento, data_pagamento, tipo, id_categoria, id_subcategoria, id_transacao];
        await BD.query(comando, valores);
        return res.status(200).json({ message: 'Transação atualizada com sucesso!' });
    } catch (error) {
        console.error('Erro ao atualizar transacao', error.message);
        return res.status(500).json({ error: 'Erro ao atualizar transacao' });
    }
})

router.delete('/transacoes/:id_transacao', async (req, res) => {
    const { id_transacao } = req.params;
    try {
        const comando = `DELETE FROM transacoes WHERE id_transacao = $1`;
        await BD.query(comando, [id_transacao]);
        return res.status(200).json({ message: 'Transação excluída com sucesso!' });
    } catch (error) {
        console.error('Erro ao excluir transacao', error.message);
        return res.status(500).json({ error: 'Erro ao excluir transacao' });
    }
})

// listando transações por tipo (E ou S)
router.get('/transacoes/tipo/:tipo', async (req, res) => {
    const { tipo } = req.params;
    try {
        if (tipo !== 'E' && tipo !== 'S') {
            return res.status(400).json({ message: 'Tipo inválido. Use "E" para entrada ou "S" para saída.' });
        }

        const comando = `SELECT t.id_transacao, t.valor, t.descricao, TO_CHAR(t.data_registro, 'DD/MM/YYYY') AS data_registro,
                                                                    TO_CHAR(t.data_vencimento, 'DD/MM/YYYY') AS data_vencimento,
                                                                    TO_CHAR(t.data_pagamento, 'DD/MM/YYYY') AS data_pagamento, 
                                                                    t.tipo,
                                                                    c.nome AS nome_categoria, 
                                                                    s.nome AS nome_subcategoria
                                                                FROM transacoes t
                                                                LEFT JOIN categorias c ON t.id_categoria = c.id_categoria
                                                                LEFT JOIN subcategorias s ON t.id_subcategoria = s.id_subcategoria
                                                                WHERE t.tipo = $1
                                                                ORDER BY t.data_registro DESC`;
        const transacoes = await BD.query(comando, [tipo]);
        return res.status(200).json(transacoes.rows);
    } catch (error) {
        console.error('Erro ao listar transacao', error.message);
        return res.status(500).json({ error: 'Erro ao interno transacao' + error.message });
    }
})

// Busca por categoria pelo id_categoria
router.get('/transacoes/categoria/:id_categoria', async (req, res) => {
    const { id_categoria } = req.params;
    try{
        if (!id_categoria) {
            return res.status(400).json({ message: 'ID da categoria é obrigatório.' });
        }

        const comando = `SELECT t.id_transacao, t.valor, t.descricao, TO_CHAR(t.data_registro, 'DD/MM/YYYY') AS data_registro,
                                                                    TO_CHAR(t.data_vencimento, 'DD/MM/YYYY') AS data_vencimento,
                                                                    TO_CHAR(t.data_pagamento, 'DD/MM/YYYY') AS data_pagamento, 
                                                                    t.tipo,
                                                                    c.nome AS nome_categoria, 
                                                                    s.nome AS nome_subcategoria
                                                                FROM transacoes t
                                                                LEFT JOIN categorias c ON t.id_categoria = c.id_categoria
                                                                LEFT JOIN subcategorias s ON t.id_subcategoria = s.id_subcategoria
                                                                WHERE t.id_categoria = $1
                                                                ORDER BY t.data_registro DESC`;
        const transacoes = await BD.query(comando, [id_categoria]);
        return res.status(200).json(transacoes.rows);
    } catch (error) {
        console.error('Erro ao listar transacao por categoria', error.message);
        return res.status(500).json({ error: 'Erro ao listar transacao por categoria' + error.message });
    }
})

// Busca por subcategoria pelo id_subcategoria
router.get('/transacoes/subcategoria/:id_subcategoria', async (req, res) => {
    const { id_subcategoria } = req.params;
    try{
        if (!id_subcategoria) {
            return res.status(400).json({ message: 'ID da subcategoria é obrigatório.' });
        }

        const comando = `SELECT t.id_transacao, t.valor, t.descricao, TO_CHAR(t.data_registro, 'DD/MM/YYYY') AS data_registro,
                                                                    TO_CHAR(t.data_vencimento, 'DD/MM/YYYY') AS data_vencimento,
                                                                    TO_CHAR(t.data_pagamento, 'DD/MM/YYYY') AS data_pagamento, 
                                                                    t.tipo,
                                                                    c.nome AS nome_categoria, 
                                                                    s.nome AS nome_subcategoria
                                                                FROM transacoes t
                                                                LEFT JOIN categorias c ON t.id_categoria = c.id_categoria
                                                                LEFT JOIN subcategorias s ON t.id_subcategoria = s.id_subcategoria
                                                                WHERE t.id_subcategoria = $1
                                                                ORDER BY t.data_registro DESC`;
        const transacoes = await BD.query(comando, [id_subcategoria]);
        return res.status(200).json(transacoes.rows);
    } catch (error) {
        console.error('Erro ao listar transacao por subcategoria', error.message);
        return res.status(500).json({ error: 'Erro ao listar transacao por subcategoria' + error.message });
    }
})

export default router;