import Aluno from '../models/Aluno';
import Foto from '../models/Foto';

class AlunoController {
    async index(req, res, next) { // Mostrar os alunos cadastrado
        const alunos = await Aluno.findAll({
            attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
            order: [
                ['created_at', 'DESC'],
                [Foto, 'id', 'DESC']
            ],
            include: {
                model: Foto,
                attributes: ['id', 'originalname', 'filename', 'url']
            }
        });
        res.status(200).json(alunos);
    }

    async store(req, res, next) { // Registrar um novo aluno
        try {
            const aluno = await Aluno.create(req.body);

            return res.status(201).json(aluno);

        } catch(e) {
            console.error(e);
            return res.status(400).json({
                errors: e.errors.map(err => err.message)
            });
        }
    }

    async show(req, res, next) { // Mostrar o aluno cadastrado pelo ID enviado no endpoint
        try {
            const { id } = req.params;

            if(!id) {
                return res.status(400).json({
                    errors: ['Faltando ID']
                });
            }

            const aluno = await Aluno.findByPk(id, {
                attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
                order: [
                    ['created_at', 'DESC'],
                    [Foto, 'id', 'DESC']
                ],
                include: {
                    model: Foto,
                    attributes: ['id', 'originalname', 'filename', 'url']
                }
            });
            if(!aluno) {
                return res.status(400).json({
                    errors: ['Aluno não existe']
                });
            }

            return res.status(200).json(aluno);

        } catch(e) {
            console.error(e);
            return res.status(400).json({
                errors: e.errors.map(err => err.message)
            });
        }
    }

    async delete(req, res, next) { // Deletar o aluno
        try {
            const { id } = req.params;

            if(!id) {
                return res.status(400).json({
                    errors: ['Faltando ID']
                });
            }

            const aluno = await Aluno.findByPk(id);
            if(!aluno) {
                return res.status(400).json({
                    errors: ['Aluno não existe']
                });
            }

            await aluno.destroy();
            return res.status(200).json({
                apagado: true
            });

        } catch(e) {
            console.error(e);
            return res.status(400).json({
                errors: e.errors.map(err => err.message)
            });
        }
    }

    async update(req, res, next) { // Atualizando o usuário
        try {
            const { id } = req.params;

            if(!id) {
                return res.status(400).json({
                    errors: ['Faltando ID']
                });
            }

            const aluno = await Aluno.findByPk(id);
            if(!aluno) {
                return res.status(400).json({
                    errors: ['Aluno não existe']
                });
            }

            const alunoAtualizado = await aluno.update(req.body);
            return res.status(200).json(alunoAtualizado);

        } catch(e) {
            console.error(e);
            return res.status(400).json({
                errors: e.errors.map(err => err.message)
            });
        }
    }
}

export default new AlunoController();
