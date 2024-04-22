import User from '../models/User';

class UserController {
    // Create
    async store(req, res, next) {
        try {
            const novoUser = await User.create(req.body);

            const { id, name, email } = novoUser
            return res.status(200).json({
                id,
                name,
                email
            });
        } catch (e) {
            console.error(e);
            return res.status(400).json({
                errors: e.errors.map(err => err.message)
            });
        }
    }

    // Index
    async index(req, res , next) {
        try {
            const users = await User.findAll({ attributes: ['id', 'nome', 'email'] });

            if(!users) {
                return res.status(400).json({
                    errors: 'Nenhum usuário foi cadastrado'
                });
            }

            return res.status(200).json(users);
        } catch (e) {
            console.error(e);
            return res.status(400).json({
                errors: e.errors.map(err => err.message)
            });
        }
    }

    // Show
    async show(req, res , next) {
        try {
            const user = await User.findByPk(req.params.id);

            if(!user) {
                return res.status(400).json({
                    errors: ['Usuário não existe']
                });
            }

            const { id, nome, email } = user;
            return res.status(200).json({
                id,
                nome,
                email
            });
        } catch (e) {
            console.error(e);
            return res.status(400).json({
                errors: e.errors.map(err => err.message)
            });
        }
    }

    // Update
    async update(req, res , next) {
        try {
            const user = await User.findByPk(req.userId);
            if(!user) {
                return res.status(400).json({
                    errors: ['Usuário não existe.']
                });
            }

            const novosDados = await user.update(req.body);
            const { id, nome, email } = novosDados;

            return res.status(200).json({
                id,
                nome,
                email
            });
        } catch (e) {
            console.error(e);
            return res.status(400).json({
                errors: e.errors.map(err => err.message)
            });
        }
    }

    // Delete
    async delete(req, res , next) {
        try {
            const user = await User.findByPk(req.userId);
            if(!user) {
                return res.status(400).json({
                    errors: ['Usuário não existe.']
                })
            }

            await user.destroy();
            return res.status(200).json(user);
        } catch (e) {
            console.error(e);
            return res.status(400).json({
                errors: e.errors.map(err => err.message)
            });
        }
    }
}

export default new UserController();
