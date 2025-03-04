import dotenv from "dotenv"; // Dùng import thay vì require
import express from "express"; // Dùng import thay vì require
import sequelize from "./models/index.js"; // Dùng import thay vì require

// Import tất cả routes
import staffRoutes from "./routes/StaffRoutes.js";
import shiftRoutes from "./routes/ShiftRoutes.js";
import dayOffRoutes from "./routes/DayoffRoutes.js";
import timekeepingRoutes from "./routes/timekeepingRoutes.js";
import departmentRoutes from "./routes/departmentRoutes.js";
import positionRoutes from "./routes/positionRoutes.js";
import roleRoutes from "./routes/RoleRoutes.js";
import configRoutes from "./routes/configRoutes.js";
import dayOffTypeRoutes from "./routes/dayOffTypeRoutes.js";
import authRoutes from "./routes/Auth.js";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json()); // Middleware để parse JSON request body
app.use(cookieParser());
// Định nghĩa các route API
app.use("/api/auth", authRoutes);
app.use("/api/staff", staffRoutes);
app.use("/api/shifts", shiftRoutes);
app.use("/api/dayoffs", dayOffRoutes);
app.use("/api/timekeeping", timekeepingRoutes);
app.use("/api/departments", departmentRoutes);
app.use("/api/positions", positionRoutes);
app.use("/api/roles", roleRoutes);
app.use("/api/config", configRoutes);
app.use("/api/dayofftypes", dayOffTypeRoutes);

// Kiểm tra kết nối database trước khi chạy server
sequelize
  .authenticate()
  .then(() => {
    console.log("✅ Kết nối cơ sở dữ liệu thành công!");

    // Đồng bộ hóa Sequelize nếu cần (chạy 1 lần để đảm bảo bảng đã tạo)
    return sequelize.sync({ alter: true });
  })
  .then(() => {
    console.log("✅ CSDL đã đồng bộ!");

    // Khởi động server
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Lỗi kết nối cơ sở dữ liệu:", err);
  });
