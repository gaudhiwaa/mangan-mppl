import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Food = db.define('foods',{
    f_name: DataTypes.STRING,
    f_price: DataTypes.INTEGER,
    f_description:  DataTypes.STRING,
    f_status: DataTypes.STRING,
    f_image: DataTypes.STRING,
    f_rating: DataTypes.INTEGER,
    f_discount: DataTypes.INTEGER,
    f_sold: DataTypes.INTEGER
},{
    freezeTableName:true
});

export default Food;

(async()=>{
    await db.sync();
})();