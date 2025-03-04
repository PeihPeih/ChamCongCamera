import { Sequelize } from "sequelize"; // Dùng import thay vì require
import dotenv from "dotenv"; // Dùng import thay vì require

dotenv.config(); // Đảm bảo đã load biến môi trường từ .env

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT || "mysql",
    logging: false,
  }
);

// Kiểm tra kết nối với MySQL
sequelize
  .authenticate()
  .then(() => console.log("Kết nối cơ sở dữ liệu thành công!"))
  .catch((err) => console.error("Lỗi kết nối cơ sở dữ liệu:", err));

export default sequelize; // Sử dụng export default thay vì module.exports
