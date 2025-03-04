import { DataTypes } from "sequelize"; // Dùng import thay vì require
import sequelize from "../models/index.js"; // Dùng import thay vì require

const Role = sequelize.define(
  "Role",
  {
    ID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    Name: { type: DataTypes.STRING(255), allowNull: false },
    Is_default: { type: DataTypes.INTEGER, allowNull: false },
  },
  { timestamps: false }
);

export default Role; // Sử dụng export default thay vì module.exports
