import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Customer = db.define('customers',{
    c_name: DataTypes.STRING,
    c_email: DataTypes.STRING,
    c_voucher:  DataTypes.JSON,
    // c_address: DataTypes.JSON,
    // c_post_code: DataTypes.STRING,
    c_handphone_number: DataTypes.STRING,
    c_password: DataTypes.STRING,
    transaction_t_id: DataTypes.STRING
},{
    freezeTableName:true
});

export default Customer;

(async()=>{
    await db.sync();
})();