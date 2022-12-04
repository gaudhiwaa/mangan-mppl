import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Category = db.define('categories',{
    cat_name: DataTypes.STRING,
    cat_image: DataTypes.STRING,
},{
    freezeTableName:true
});

export default Category;

(async()=>{
    await db.sync();
})();