import Sequelize , { Model } from 'sequelize';
import appConfig from '../config/appConfig';

export default class Foto extends Model {
    static init(sequelize) {
        super.init({
            originalname: {
                type: Sequelize.STRING,
                defaultValue: '',

                /* Validação */
                validate: {
                    notEmpty: {
                        msg: 'Campo não pode ficar vazio.'
                    }
                }
            },

            filename: {
                type: Sequelize.STRING,
                defaultValue: '',

                /* Validação */
                validate: {
                    notEmpty: {
                        msg: 'Campo não pode ficar vazio.'
                    }
                }
            },

            url: {
                type: Sequelize.VIRTUAL,
                get() {
                    return `${appConfig.url}/images/${this.getDataValue('filename')}`;
                }
            }
        }, {
            sequelize,
            tableName: 'fotos',
            charset: 'utf8',
            collate: 'utf8_general_ci',
            comment: 'Tabela para guardar as imagens dos alunos'
        });
        return this;
    }

    static associate(models) {
        this.belongsTo(models.Aluno, { foreignKey: 'aluno_id' });
    }

}
