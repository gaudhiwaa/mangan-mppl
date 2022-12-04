import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Address = db.define(
  "addresses",
  {
    c_id: DataTypes.INTEGER,
    addr_name: DataTypes.STRING,
    addr_handphone_number: DataTypes.STRING,
    addr_ward: DataTypes.STRING,
    addr_districts: DataTypes.STRING,
    addr_fullAddress: DataTypes.STRING,
    addr_mainAddress: DataTypes.BOOLEAN,
  },
  {
    freezeTableName: true,
  }
);

export default Address;

(async () => {
  await db.sync();
})();
