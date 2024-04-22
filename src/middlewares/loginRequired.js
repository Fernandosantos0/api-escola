import jwt from 'jsonwebtoken';
import User from '../models/User';

export default async (req, res, next) => {
    const { authorization } = req.headers;

    /* Verificar se tem o arquivo de authorization */
    if(!authorization) {
        return res.status(401).json({
            errors: ['Login required']
        });
    }

    const [texto, token] = authorization.split(' ');

    try {
        const dados = jwt.verify(token, process.env.TOKEN_SECRET);

        if(!dados) {
            return res.status(401).json({
                errors: ['Token não identificado.']
            });
        }

        /* Desestruturando o token */
        const { id, email } = dados;

        /* Verificando se ainda o e-mail e o mesmo */
        const user = await User.findOne({
            where: {
                id,
                email
            }
        });

        if(!user) {
            return res.status(401).json({
                errors: ['Usuário inválido.']
            });
        }

        /* Inserindo os dados na requisição */
        req.userId = id;
        req.userEmail = email;

        return next();
    } catch(e) {
        console.error(e);
        return res.status(401).json({
            errors: ['Token expirado ou inválido.']
        });
    }


};
