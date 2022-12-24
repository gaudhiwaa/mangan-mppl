import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const PaymentMethod = db.define('payment_methods',{
  pm_title: DataTypes.STRING,
  pm_image: DataTypes.STRING,
  pm_use: DataTypes.BOOLEAN
},{
    freezeTableName:true
});

export default PaymentMethod;

(async()=>{
    await db.sync();
})();