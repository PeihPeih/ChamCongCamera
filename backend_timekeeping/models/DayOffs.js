import { DataTypes } from "sequelize"; // Dùng import thay vì require
import sequelize from "../models/index.js"; // Dùng import thay vì require
import Staff from "./Staff.js"; // Dùng import thay vì require
import DayOffType from "./DayOffType.js"; // Dùng import thay vì require

const DayOffs = sequelize.define(
  "DayOffs",
  {
    ID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    Start_date: { type: DataTypes.DATE, allowNull: false },
    End_date: { type: DataTypes.DATE, allowNull: false },
    Reason: { type: DataTypes.STRING(255), allowNull: false },
    Submission_date: { type: DataTypes.DATE, allowNull: false },
    Approval_date: { type: DataTypes.DATE, allowNull: false },
  },
  { timestamps: false }
);

// Liên kết với bảng Staff (nhân viên nộp đơn)
DayOffs.belongsTo(Staff, { foreignKey: "StaffID", as: "Employee" });

// Liên kết với bảng Staff (quản lý duyệt đơn)
DayOffs.belongsTo(Staff, { foreignKey: "ManagerID", as: "Manager" });

// Liên kết với bảng DayOffType (loại nghỉ phép)
DayOffs.belongsTo(DayOffType, { foreignKey: "DayOff_typeID" });

export default DayOffs; // Sử dụng export default thay vì module.exports
