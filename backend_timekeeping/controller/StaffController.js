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
    const staff = await Staff.create(req.body);
    res.status(201).json(staff);
  } catch (error) {
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
