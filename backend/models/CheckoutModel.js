import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Checkout = db.define('checkout',{
  f_name: DataTypes.STRING,
  f_price: DataTypes.INTEGER,
  f_description:  DataTypes.STRING,
  f_status: DataTypes.STRING,
  f_image: DataTypes.STRING,
  f_rating: DataTypes.INTEGER,
  f_discount: DataTypes.INTEGER,
  f_sold: DataTypes.INTEGER,
  f_id: DataTypes.INTEGER,
  c_id: DataTypes.INTEGER
},{
    freezeTableName:true
});

export default Checkout;

(async()=>{
    await db.sync();
})();