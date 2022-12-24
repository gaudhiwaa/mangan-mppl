import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Voucher = db.define('vouchers',{
  v_title: DataTypes.STRING,
  v_price: DataTypes.INTEGER,
  v_date: DataTypes.STRING,
  c_id: DataTypes.INTEGER,
  v_image: DataTypes.STRING,
  v_use: DataTypes.BOOLEAN
},{
    freezeTableName:true
});

export default Voucher;

(async()=>{
    await db.sync();
})();