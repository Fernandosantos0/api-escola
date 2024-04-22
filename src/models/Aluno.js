import Sequelize , { Model } from 'sequelize';

export default class Aluno extends Model {
    static init(sequelize) {
        super.init({
            nome: {
                type: Sequelize.STRING,
                defaultValue: '',

                /* Validação */
                validate: {
                    len: {
                        args: [2, 255],
                        msg: 'Nome precisa ter entre 2 e 255 caracteres.'
                    }
                }
            },
            sobrenome: {
                type: Sequelize.STRING,
                defaultValue: '',

                /* Validação */
                validate: {
                    len: {
                        args: [2, 255],
                        msg: 'Nome precisa ter entre 2 e 255 caracteres.'
                    }
                }
            },
            email: {
                type: Sequelize.STRING,
                defaultValue: '',
                unique: {
                    msg: 'E-mail já foi cadastrado.'
                },

                /* Validação */
                validate: {
                    isEmail: {
                        msg: 'E-mail inválido.'
                    }
                }
            },
            idade: {
                type: Sequelize.INTEGER,
                defaultValue: '',

                /* Validação */
                validate: {
                    isInt: {
                        msg: 'Idade precisa ser um número inteiro.'
                    }
                }
            },
            peso: {
                type: Sequelize.DECIMAL(5, 2),
                defaultValue: '',

                /* Validação */
                validate: {
                    isFloat: {
                        msg: 'Peso precisa ser um número inteiro ou de ponto flutuante.'
                    }
                }
            },
            altura: {
                type: Sequelize.DECIMAL(3, 2),
                defaultValue: '',

                /* Validação */
                validate: {
                    isFloat: {
                        msg: 'Altura precisa ser um número inteiro ou de ponto flutuante.'
                    }
                }
            }
        }, {
            sequelize
        });
        return this;
    }

    static associate(models) {
        this.hasMany(models.Foto, { foreignKey: 'aluno_id' });
    }
}
