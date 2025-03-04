import { DataTypes } from "sequelize";
import sequelize from "../models/index.js";

const DayOffType = sequelize.define(
  "DayOffType",
  {
    ID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    Name: { type: DataTypes.STRING(255), allowNull: false },
  },
  { timestamps: false }
);

export default DayOffType;
