'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /* Criando uma tabela de alunos */
    await queryInterface.createTable('alunos', {

        id: {
            type: Sequelize.INTEGER,
            unique: true,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },

        nome: {
            type: Sequelize.STRING,
            allowNull: false
        },

        sobrenome: {
            type: Sequelize.STRING,
            allowNull: false
        },

        email: {
            type: Sequelize.STRING,
            allowNull: false
        },

        idade: {
            type: Sequelize.INTEGER,
            allowNull: false
        },

        peso: {
            type: Sequelize.DECIMAL(5, 2),
            allowNull: false
        },

        altura: {
            type: Sequelize.DECIMAL(3, 2),
            allowNull: false
        },

        created_at: {
            type: Sequelize.DATE,
            allowNull: false
        },

        updated_at: {
            type: Sequelize.DATE,
            allowNull: false
        }

    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('alunos');
  }
};
