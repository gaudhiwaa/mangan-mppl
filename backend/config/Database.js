import {Sequelize} from "sequelize";

const db = new Sequelize('simangan_db','root','',{
    host: '192.168.64.2',
    dialect: 'mysql',
});

export default db;