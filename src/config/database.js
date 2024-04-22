require('dotenv').config();

module.exports = {
    dialect: 'mariadb',
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
    define: {
        charset: 'utf8',
        timestamps: true,
        underscored: true,
        underscoredAll: true,
        'createdAt': 'created_at',
        'updatedAt': 'updated_at',
        dialectOptions: {
            collate: 'utf8_general_ci'
        },
    },
    dialectOptions: {
        timezone: '-03:00'
    },
    timezone: '-03:00'
}
