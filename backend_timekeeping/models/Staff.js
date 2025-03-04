import { DataTypes } from "sequelize"; // Dùng import thay vì require
import sequelize from "../models/index.js"; // Dùng import thay vì require
import Position from "./Position.js"; // Dùng import thay vì require
import Department from "./Department.js"; // Dùng import thay vì require
import Role from "./Role.js"; // Dùng import thay vì require

const Staff = sequelize.define(
  "Staff",
  {
    ID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    Fullname: { type: DataTypes.STRING(255), allowNull: false },
    Code: { type: DataTypes.STRING(255), allowNull: false },
    Username: { type: DataTypes.STRING(255), allowNull: false },
    Password: { type: DataTypes.STRING(255), allowNull: false },
    Gender: { type: DataTypes.STRING(255), allowNull: false },
    DayOfBirth: { type: DataTypes.DATE, allowNull: false },
    Email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true, // Kiểm tra xem có phải định dạng email hợp lệ không
      },
    },
  },
  {
    timestamps: true,
    createdAt: "Created_at",
    updatedAt: "Updated_at",
  }
);

Staff.belongsTo(Position, { foreignKey: "PositionID" });
Staff.belongsTo(Department, { foreignKey: "DepartmentID" });
Staff.belongsTo(Role, { foreignKey: "RoleID" });

export default Staff; // Sử dụng export default thay vì module.exports
