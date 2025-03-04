import { DataTypes } from "sequelize"; // Dùng import thay vì require
import sequelize from "../models/index.js"; // Dùng import thay vì require

const Shift = sequelize.define(
  "Shift",
  {
    ID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    Name: { type: DataTypes.STRING(255), allowNull: false },
    Time_in: { type: DataTypes.STRING(255), allowNull: false },
    Time_out: { type: DataTypes.STRING(255), allowNull: false },
    Is_default: { type: DataTypes.INTEGER, allowNull: false },
    Type_shift: { type: DataTypes.STRING(255), allowNull: false },
    Start_date: { type: DataTypes.DATE, allowNull: false },
    Total_time: { type: DataTypes.STRING(255), allowNull: false },
  },
  { timestamps: false }
);

export default Shift; // Sử dụng export default thay vì module.exports
