import { DataTypes } from "sequelize";
import sequelize from "./index.js";

const Config = sequelize.define(
  "Config",
  {
    ID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    Threshold: { type: DataTypes.INTEGER, allowNull: false },
  },
  { timestamps: false }
);

export default Config;
