import { DataTypes } from "sequelize"; // Dùng import thay vì require
import sequelize from "../models/index.js"; // Dùng import thay vì require

const Position = sequelize.define(
  "Position",
  {
    ID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    Name: { type: DataTypes.STRING(255), allowNull: false },
  },
  { timestamps: false }
);

export default Position; // Sử dụng export default thay vì module.exports
