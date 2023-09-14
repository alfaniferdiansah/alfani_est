import {Sequelize} from "sequelize";

const db = new Sequelize('db_est','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;