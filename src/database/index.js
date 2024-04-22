/* Módulo de conexão com o banco de dados */
import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Aluno from '../models/Aluno';
import User from '../models/User';
import Foto from '../models/Foto';

/* Models do banco (tabelas) */
const models = [Aluno, User, Foto];

/* Conexão com o banco de dados */
const connection = new Sequelize(databaseConfig);

models.forEach(model => model.init(connection));
models.forEach(model => model.associate && model.associate(connection.models));
