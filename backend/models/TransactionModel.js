import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Transaction = db.define('transactions',{
  t_price: DataTypes.INTEGER,
  c_id: DataTypes.INTEGER,
  t_status: DataTypes.STRING,
  t_image: DataTypes.STRING,
  order_id: DataTypes.STRING,
  t_paymentMethod: DataTypes.STRING,
  t_product: DataTypes.JSON,
  response_midtrans: DataTypes.TEXT,
},{
    freezeTableName:true
});


export default Transaction;

(async()=>{
    await db.sync();
})();