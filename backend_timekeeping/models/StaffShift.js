import { DataTypes } from "sequelize"; // Dùng import thay vì require
import sequelize from "../models/index.js"; // Dùng import thay vì require
import Staff from "./Staff.js"; // Dùng import thay vì require
import Shift from "./Shift.js"; // Dùng import thay vì require

const StaffShift = sequelize.define(
  "StaffShift",
  {
    ID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  },
  { timestamps: false }
);

Staff.belongsToMany(Shift, { through: StaffShift, foreignKey: "StaffID" });
Shift.belongsToMany(Staff, { through: StaffShift, foreignKey: "ShiftID" });

export default StaffShift; // Sử dụng export default thay vì module.exports
