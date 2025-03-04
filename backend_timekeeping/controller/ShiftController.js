import Shift from "../models/Shift.js";

// Lấy danh sách ca làm việc
export const getAllShifts = async (req, res) => {
  try {
    const shifts = await Shift.findAll();
    res.json(shifts);
  } catch (error) {
    res.status(500).json({ error: "Lỗi khi lấy danh sách ca làm việc" });
  }
};

// Thêm ca làm việc
export const createShift = async (req, res) => {
  try {
    const shift = await Shift.create(req.body);
    res.status(201).json(shift);
  } catch (error) {
    res.status(500).json({ error: "Lỗi khi tạo ca làm việc" });
  }
};

// Cập nhật ca làm việc
export const updateShift = async (req, res) => {
  try {
    const shift = await Shift.findByPk(req.params.id);
    if (!shift)
      return res.status(404).json({ error: "Không tìm thấy ca làm việc" });

    await shift.update(req.body);
    res.json(shift);
  } catch (error) {
    res.status(500).json({ error: "Lỗi khi cập nhật ca làm việc" });
  }
};

// Xóa ca làm việc
export const deleteShift = async (req, res) => {
  try {
    const shift = await Shift.findByPk(req.params.id);
    if (!shift)
      return res.status(404).json({ error: "Không tìm thấy ca làm việc" });

    await shift.destroy();
    res.json({ message: "Xóa ca làm việc thành công" });
  } catch (error) {
    res.status(500).json({ error: "Lỗi khi xóa ca làm việc" });
  }
};
