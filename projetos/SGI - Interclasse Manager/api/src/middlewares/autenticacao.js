import jwt from 'jsonwebtoken';
import { unauthorized } from '../utils/responses.js';

const SECRET_KEY = 'sua_chave_secreta';

export const autenticarToken = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return unauthorized(res, 'Token não fornecido');
    }

    const token = authHeader.split(' ')[1];

    if (!token) {
        return unauthorized(res, 'Token não fornecido');
    }

    jwt.verify(token, SECRET_KEY, (erro, usuario) => {
        if (erro) {
            return unauthorized(res, 'Token inválido');
        }

        req.usuario = usuario;
        next();
    });
};
