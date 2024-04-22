'use strict';

const bcryptjs = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users',
        [
            {
                nome: 'Luis',
                email: 'luis1@gmail.com',
                password_hash: await bcryptjs.hash('123456', 10),
                created_at: new Date(),
                updated_at: new Date()
            },

            {
                nome: 'Luis 2',
                email: 'luis2@gmail.com',
                password_hash: await bcryptjs.hash('123456', 10),
                created_at: new Date(),
                updated_at: new Date()
            },

            {
                nome: 'Luis 3',
                email: 'luis3@gmail.com',
                password_hash: await bcryptjs.hash('123456', 10),
                created_at: new Date(),
                updated_at: new Date()
            },

            {
                nome: 'Luis 4',
                email: 'luis4@gmail.com',
                password_hash: await bcryptjs.hash('123456', 10),
                created_at: new Date(),
                updated_at: new Date()
            },

            {
                nome: 'Luis 5',
                email: 'luis5@gmail.com',
                password_hash: await bcryptjs.hash('123456', 10),
                created_at: new Date(),
                updated_at: new Date()
            }
        ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
