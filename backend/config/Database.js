import {Sequelize} from "sequelize";

const db = new Sequelize('simangan_db','root','Matahari23',{
    host: 'localhost',
    dialect: 'mysql',
});

export default db;