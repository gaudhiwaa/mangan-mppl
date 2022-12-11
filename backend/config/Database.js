import {Sequelize} from "sequelize";

const db = new Sequelize('simangan_db','root','',{
    host: 'localhost',
    dialect: 'mysql',
});

export default db;