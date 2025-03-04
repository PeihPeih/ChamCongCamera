import { DataTypes } from "sequelize"; // Dùng import thay vì require
import sequelize from "../models/index.js"; // Dùng import thay vì require

const Department = sequelize.define(
  "Department",
  {
    ID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    Name: { type: DataTypes.STRING(255), allowNull: false },
  },
  { timestamps: false }
);

export default Department; // Sử dụng export default thay vì module.exports
