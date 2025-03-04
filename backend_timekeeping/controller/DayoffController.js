import DayOffs from "../models/DayOffs.js";

export const getAllDayOffs = async (req, res) => {
  try {
    const dayOffs = await DayOffs.findAll();
    res.json(dayOffs);
  } catch (error) {
    res.status(500).json({ error: "Lỗi khi lấy danh sách nghỉ phép" });
  }
};

export const getDayOffById = async (req, res) => {
  try {
    const dayOff = await DayOffs.findByPk(req.params.id);
    if (!dayOff)
      return res.status(404).json({ error: "Không tìm thấy đơn nghỉ phép" });
    res.json(dayOff);
  } catch (error) {
    res.status(500).json({ error: "Lỗi khi lấy đơn nghỉ phép" });
  }
};

export const createDayOff = async (req, res) => {
  try {
    const dayOff = await DayOffs.create(req.body);
    res.status(201).json(dayOff);
  } catch (error) {
    res.status(500).json({ error: "Lỗi khi tạo đơn nghỉ phép" });
  }
};

export const updateDayOff = async (req, res) => {
  try {
    const dayOff = await DayOffs.findByPk(req.params.id);
    if (!dayOff)
      return res.status(404).json({ error: "Không tìm thấy đơn nghỉ phép" });

    await dayOff.update(req.body);
    res.json(dayOff);
  } catch (error) {
    res.status(500).json({ error: "Lỗi khi cập nhật đơn nghỉ phép" });
  }
};

export const deleteDayOff = async (req, res) => {
  try {
    const dayOff = await DayOffs.findByPk(req.params.id);
    if (!dayOff)
      return res.status(404).json({ error: "Không tìm thấy đơn nghỉ phép" });

    await dayOff.destroy();
    res.json({ message: "Xóa đơn nghỉ phép thành công" });
  } catch (error) {
    res.status(500).json({ error: "Lỗi khi xóa đơn nghỉ phép" });
  }
};
