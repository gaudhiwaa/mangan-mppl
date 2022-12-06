import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Transaction = db.define(
  "transactions",
  {
    t_total_payment: DataTypes.INTEGER,
    t_status: DataTypes.STRING,
    t_voucher: DataTypes.STRING,
    t_method: DataTypes.STRING
  },
  {
    freezeTableName: true,
  }
);

export default Transaction;

(async () => {
  await db.sync();
})();
