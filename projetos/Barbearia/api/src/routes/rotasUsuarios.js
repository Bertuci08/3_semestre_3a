import { Router } from 'express';
import { BD } from '../../db.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { autenticarToken } from '../middlewares/autenticacao.js';

const router = Router();
const SECRET_KEY = 'sua_chave_secreta';

router.get('/usuarios', autenticarToken, async (req, res) => {
    try {
        const comando = `SELECT * FROM usuarios WHERE ativo = true`
        const usuarios = await BD.query(comando);
        return res.status(200).json(usuarios.rows);
    } catch (error) {
        console.error('Erro ao listar usuarios', error.message);
        return res.status(500).json({ error: 'Erro ao listar usuarios' })
    }
})

router.post('/usuarios', async (req, res) => {
    let { nome, email, senha, tipo } = req.body;
    try {
        tipo = tipo || 'cliente';

        const senhaHash = await bcrypt.hash(senha, 10);
        const comando = `INSERT INTO USUARIOS(nome, email, senha, tipo) VALUES($1, $2, $3, $4)`
        const valores = [nome, email, senhaHash, tipo];

        await BD.query(comando, valores)

        return res.status(201).json("Usuario cadastrado.");
    } catch (error) {
        console.error('Erro ao cadastrar usuarios', error.message);
        return res.status(500).json({ error: 'Erro ao cadastrar usuarios' })
    }
})

router.put('/usuarios/:id_usuario', autenticarToken, async (req, res) => {
    const { id_usuario } = req.params;
    let { nome, email, senha, tipo } = req.body;

    try {
        const verificarUsuario = await BD.query(`SELECT * FROM USUARIOS
            WHERE id_usuario = $1 and ativo = true`, [id_usuario])

        if (verificarUsuario.rows.length === 0) {
            return res.status(404).json({ message: 'Usuario não encontrado' })
        }

        const usuarioAtual = verificarUsuario.rows[0];

        nome = nome || usuarioAtual.nome;
        email = email || usuarioAtual.email;
        tipo = tipo || usuarioAtual.tipo;

        let senhaHash = usuarioAtual.senha;
        if (senha) {
            senhaHash = await bcrypt.hash(senha, 10);
        }

        const comando = `UPDATE USUARIOS SET nome = $1, email = $2, senha = $3, tipo = $4 WHERE id_usuario = $5`;
        const valores = [nome, email, senhaHash, tipo, id_usuario];

        await BD.query(comando, valores)

        return res.status(200).json("Usuario atualizado.");
    } catch (error) {
        console.error('Erro ao atualizar usuario', error.message);
        return res.status(500).json({ error: 'Erro ao atualizar usuario' })
    }
})

router.delete('/usuarios/:id_usuario', autenticarToken, async (req, res) => {
    const { id_usuario } = req.params;
    try {
        const comando = `UPDATE USUARIOS SET ativo = false WHERE id_usuario = $1 `
        await BD.query(comando, [id_usuario])
        return res.status(200).json({ message: "Usuario removido com sucesso" })
    } catch (error) {
        console.error('Erro ao remover usuario', error.message)
        return res.status(500).json({ message: "Erro interno so servidor" + error.message })
    }
})

router.post('/login', async (req, res) => {
    const { email, senha } = req.body;

    try {
        const comando = `SELECT * FROM usuarios WHERE email = $1`;
        const resultado = await BD.query(comando, [email]);

        if (resultado.rows.length === 0) {
            return res.status(401).json('Usuário não encontrado');
        }

        const usuario = resultado.rows[0];

        const senhaCorreta = await bcrypt.compare(senha, usuario.senha);

        if (!senhaCorreta) {
            return res.status(401).json('Senha incorreta');
        }

        const token = jwt.sign({ id_usuario: usuario.id_usuario }, SECRET_KEY, { expiresIn: '15m' });

        return res.status(200).json({
            message: 'Login realizado com sucesso',
            token: token,
            usuario: {
                id_usuario: usuario.id_usuario,
                nome: usuario.nome,
                email: usuario.email,
                tipo: usuario.tipo
            },
            token
        });
    } catch (error) {
        return res.status(500).json('Erro no login');
    }
});

export default router;