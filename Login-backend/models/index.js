const { Sequelize, DataTypes } = require('sequelize');
const UserModel = require('./users');

// const sequelize = new Sequelize('database', 'username', 'password', {
//     host: 'localhost',
//     dialect: /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
//   });

const sequelize = new Sequelize('ejemplo_semana3', 'root', 'Mysql4dm1n', { host: 'localhost', port: '3306', dialect: 'mysql' });

// try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }

const User = UserModel(sequelize, Sequelize);

sequelize.sync({ force: false })
    .then(() => {
        console.log('Tablas sincronizadas')
    });

module.exports={
    User
}