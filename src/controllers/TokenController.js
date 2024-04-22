import User from '../models/User';
import jwt from 'jsonwebtoken';

class TokenController {
    async store(req, res, next) {
        const { email = '', password = '' } = req.body;

        if(!email || !password) {
            return res.status(401).json({
                errors: ['Credenciais inválidas']
            });
        }

        const user = await User.findOne({ where: { email: email } });
        if(!user) {
            return res.status(401).json({
                errors: ['Usuário não existe']
            });
        }

        if(!(await user.passwordIsValid(password))) {
            return res.status(401).json({
                errors: ['Senha inválida']
            });
        }

        /* Criando o token do JWT */
        const { id } = user;
        const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
            expiresIn: process.env.TOKEN_EXPIRATION,

        });

        return res.status(200).json({
            token,
            user: {
                nome: user.nome,
                id: id,
                email: email
            }
        });
    }
}

export default new TokenController();
