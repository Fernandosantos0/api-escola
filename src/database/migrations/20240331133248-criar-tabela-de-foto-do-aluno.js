'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /* Criando uma tabela de alunos */
    await queryInterface.createTable('fotos', {

        id: {
            type: Sequelize.INTEGER,
            unique: true,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },

        originalname: {
            type: Sequelize.STRING,
            allowNull: false
        },

        filename: {
            type: Sequelize.STRING,
            allowNull: false
        },

        aluno_id: {
            type: Sequelize.INTEGER,
            allowNull: true,
            references: {
                model: 'alunos',
                key: 'id'
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
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
    await queryInterface.dropTable('fotos');
  }
};
