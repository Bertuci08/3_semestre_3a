import { Router } from 'express';
import { BD } from '../../db.js';
import { autenticarToken } from '../middlewares/autenticacao.js';

const router = Router();

// Listar transações
router.get('/transacoes', autenticarToken, async (req, res) => {
    try {

        const comando = `
            SELECT 
                t.id_transacao,
                t.valor,
                t.descricao,
                TO_CHAR(t.data_registro, 'DD/MM/YYYY') AS data_registro,
                TO_CHAR(t.data_vencimento, 'DD/MM/YYYY') AS data_vencimento,
                TO_CHAR(t.data_pagamento, 'DD/MM/YYYY') AS data_pagamento,
                t.tipo,
                c.nome AS nome_categoria,
                s.nome AS nome_subcategoria
            FROM transacoes t
            LEFT JOIN categorias c 
                ON t.id_categoria = c.id_categoria
            LEFT JOIN subcategorias s 
                ON t.id_subcategoria = s.id_subcategoria
            ORDER BY t.data_registro DESC
        `;

        const transacoes = await BD.query(comando);
        console.log(transacoes.rows);
        return res.status(200).json(transacoes.rows);

    } catch (error) {

        console.error('Erro ao listar transacoes', error.message);

        return res.status(500).json({
            error: 'Erro ao listar transacoes'
        });
    }
});

// Cadastrar transação
router.post('/transacoes', autenticarToken, async (req, res) => {

    const {
        valor,
        descricao,
        data_registro,
        data_vencimento,
        data_pagamento,
        tipo,
        id_categoria,
        id_subcategoria
    } = req.body;

    const id_usuario = req.usuario.id_usuario;

    try {

        const comando = `
            INSERT INTO transacoes(
                valor,
                descricao,
                data_registro,
                data_vencimento,
                data_pagamento,
                tipo,
                id_categoria,
                id_subcategoria,
                id_usuario
            )
            VALUES(
                $1,
                $2,
                TO_DATE($3, 'DD/MM/YYYY'),
                TO_DATE($4, 'DD/MM/YYYY'),
                TO_DATE($5, 'DD/MM/YYYY'),
                $6,
                $7,
                $8,
                $9
            )
        `;

        const valores = [
            valor,
            descricao,
            data_registro,
            data_vencimento,
            data_pagamento,
            tipo,
            id_categoria,
            id_subcategoria,
            id_usuario
        ];

        await BD.query(comando, valores);

        return res.status(201).json({
            message: 'Transação cadastrada com sucesso!'
        });

    } catch (error) {

        console.error('Erro ao cadastrar transacao', error.message);

        return res.status(500).json({
            error: 'Erro ao cadastrar transacao ' + error.message
        });
    }
});

// Atualizar transação
router.put('/transacoes/:id_transacao', autenticarToken, async (req, res) => {

    const { id_transacao } = req.params;

    const {
        valor,
        descricao,
        data_registro,
        data_vencimento,
        data_pagamento,
        tipo,
        id_categoria,
        id_subcategoria
    } = req.body;

    try {

        const verificarTransacao = await BD.query(
            `SELECT * FROM transacoes WHERE id_transacao = $1`,
            [id_transacao]
        );

        if (verificarTransacao.rows.length === 0) {

            return res.status(404).json({
                message: 'Transação não encontrada'
            });
        }

        const comando = `
            UPDATE transacoes
            SET
                valor = $1,
                descricao = $2,
                data_registro = TO_DATE($3, 'DD/MM/YYYY'),
                data_vencimento = TO_DATE($4, 'DD/MM/YYYY'),
                data_pagamento = TO_DATE($5, 'DD/MM/YYYY'),
                tipo = $6,
                id_categoria = $7,
                id_subcategoria = $8
            WHERE id_transacao = $9
        `;

        const valores = [
            valor,
            descricao,
            data_registro,
            data_vencimento,
            data_pagamento,
            tipo,
            id_categoria,
            id_subcategoria,
            id_transacao
        ];

        await BD.query(comando, valores);

        return res.status(200).json({
            message: 'Transação atualizada com sucesso!'
        });

    } catch (error) {

        console.error('Erro ao atualizar transacao', error.message);

        return res.status(500).json({
            error: 'Erro ao atualizar transacao'
        });
    }
});

// Excluir transação
router.delete('/transacoes/:id_transacao', autenticarToken, async (req, res) => {
    const { id_transacao } = req.params;
    try {
        const comando = `
            DELETE FROM transacoes
            WHERE id_transacao = $1
        `;
        await BD.query(comando, [id_transacao]);
        return res.status(200).json({
            message: 'Transação excluída com sucesso!'
        });
    } catch (error) {
        console.error('Erro ao excluir transacao', error.message);
        return res.status(500).json({
            error: 'Erro ao excluir transacao'
        });
    }
});

// Agendar transação
router.post('/transacoes/agendar', autenticarToken, async (req, res) => {

    const {
        valor,
        descricao,
        data_vencimento,
        data_pagamento,
        tipo,
        id_categoria,
        id_subcategoria
    } = req.body;

    const id_usuario = req.usuario.id_usuario;

    try {

        const consulta = `
            SELECT id_transacao
            FROM transacoes
            WHERE data_vencimento = TO_DATE($1, 'DD/MM/YYYY')
            AND id_categoria = $2
            AND id_usuario = $3
        `;

        const conflito = await BD.query(consulta, [
            data_vencimento,
            id_categoria,
            id_usuario
        ]);

        if (conflito.rows.length > 0) {

            return res.status(409).json({
                message: 'Ja existe um agendamento nesta categoria e nesta data.'
            });
        }

        const comando = `
            INSERT INTO transacoes(
                valor,
                descricao,
                data_registro,
                data_vencimento,
                data_pagamento,
                tipo,
                id_categoria,
                id_subcategoria,
                id_usuario
            )
            VALUES(
                $1,
                $2,
                CURRENT_DATE,
                TO_DATE($3, 'DD/MM/YYYY'),
                TO_DATE($4, 'DD/MM/YYYY'),
                $5,
                $6,
                $7,
                $8
            )
        `;

        const valores = [
            valor,
            descricao,
            data_vencimento,
            data_pagamento,
            tipo,
            id_categoria,
            id_subcategoria,
            id_usuario
        ];

        await BD.query(comando, valores);

        return res.status(201).json({
            message: 'Agendamento realizado com sucesso!'
        });

    } catch (error) {

        console.error('Erro ao agendar transacao', error.message);

        return res.status(500).json({
            error: 'Erro ao agendar transacao ' + error.message
        });
    }
});

export default router;