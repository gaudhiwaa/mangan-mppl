import {Sequelize} from "sequelize";

const db = new Sequelize('simangan_db','root','Matahari23',{
    host: '127.0.0.1',
    dialect: 'mysql',
});

export default db;