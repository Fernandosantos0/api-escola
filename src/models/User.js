import Sequelize , { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

export default class User extends Model {
    static init(sequelize) {
        super.init({
            nome: {
                type: Sequelize.STRING,
                defaultValue: '',

                /* Validação do campo */
                validate: {
                    notEmpty: {
                        msg: 'O campo nome não pode ficar vazio'
                    },

                    len: {
                        args: [3, 255],
                        msg: 'Campo nome deve ter entre 3 e 255 caracteres'
                    }
                }
            },

            email: {
                type: Sequelize.STRING,
                defaultValue: '',
                unique: {
                    msg: 'E-mail já existe.'
                },

                /* Validação do campo */
                validate: {
                    isEmail: {
                        msg: 'E-mail inválido.'
                    }
                }
            },

            password_hash: {
                type: Sequelize.STRING,
                defaultValue: ''
            },

            password: {
                type: Sequelize.VIRTUAL,
                defaultValue: '',

                /* Validação do campo */
                validate: {
                    len: {
                        args: [6, 50],
                        msg: 'A senha precisa ter entre 6 e 50 caracteres.'
                    }
                }
            }
        }, {
            sequelize
        });

        /* Hook para salvar dados */
        this.addHook('beforeSave', async (user) => {
            if(user.password) {
                user.password_hash = await bcryptjs.hash(user.password, 10);
            }
        });

        return this;
    }

    /* Método para validar a senha da conta */
    passwordIsValid(password) {
        return bcryptjs.compare(password, this.password_hash);
    }
}
