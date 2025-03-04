import Staff from "../models/Staff.js";

// Lấy danh sách nhân viên
export const getAllStaff = async (req, res) => {
  try {
    const staff = await Staff.findAll();
    res.json(staff);
  } catch (error) {
    res.status(500).json({ error: "Lỗi khi lấy danh sách nhân viên" });
  }
};

// Lấy nhân viên theo ID
export const getStaffById = async (req, res) => {
  try {
    const staff = await Staff.findByPk(req.params.id);
    if (!staff)
      return res.status(404).json({ error: "Không tìm thấy nhân viên" });
    res.json(staff);
  } catch (error) {
    res.status(500).json({ error: "Lỗi khi lấy nhân viên" });
  }
};

// Thêm nhân viên mới
export const createStaff = async (req, res) => {
  try {
    // Kiểm tra xem người dùng có phải là admin không (bạn có thể thay đổi logic tùy vào cách xác thực)
    if (!req.user || req.user.role !== "admin") {
      return res.status(403).json({ error: "Không có quyền tạo nhân viên" });
    }

    // Kiểm tra dữ liệu đầu vào (validate dữ liệu)
    const {
      Fullname,
      Code,
      Email,
      Username,
      Password,
      Gender,
      DayOfBirth,
      PositionID,
      DepartmentID,
      RoleID,
    } = req.body;

    if (
      !Fullname ||
      !Code ||
      !Email ||
      !Username ||
      !Password ||
      !Gender ||
      !DayOfBirth ||
      !PositionID ||
      !DepartmentID ||
      !RoleID
    ) {
      return res.status(400).json({ error: "Thiếu thông tin bắt buộc" });
    }

    // Băm mật khẩu
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(Password, salt);

    // Tạo nhân viên mới
    const newStaff = await Staff.create({
      Fullname,
      Code,
      Email,
      Username,
      Password: hash,
      Gender,
      DayOfBirth,
      PositionID,
      DepartmentID,
      RoleID,
    });

    // Trả về nhân viên mới đã được tạo
    res.status(201).json(newStaff);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Lỗi khi tạo nhân viên" });
  }
};

// Cập nhật nhân viên
export const updateStaff = async (req, res) => {
  try {
    const staff = await Staff.findByPk(req.params.id);
    if (!staff)
      return res.status(404).json({ error: "Không tìm thấy nhân viên" });

    await staff.update(req.body);
    res.json(staff);
  } catch (error) {
    res.status(500).json({ error: "Lỗi khi cập nhật nhân viên" });
  }
};

// Xóa nhân viên
export const deleteStaff = async (req, res) => {
  try {
    const staff = await Staff.findByPk(req.params.id);
    if (!staff)
      return res.status(404).json({ error: "Không tìm thấy nhân viên" });

    await staff.destroy();
    res.json({ message: "Xóa nhân viên thành công" });
  } catch (error) {
    res.status(500).json({ error: "Lỗi khi xóa nhân viên" });
  }
};
