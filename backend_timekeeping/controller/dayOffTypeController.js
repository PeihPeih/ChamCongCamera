import DayOffType from "../models/DayOffType.js";

export const getAllDayOffTypes = async (req, res) => {
  try {
    const dayOffTypes = await DayOffType.findAll();
    res.json(dayOffTypes);
  } catch (error) {
    res.status(500).json({ error: "Lỗi khi lấy danh sách loại nghỉ phép" });
  }
};

export const getDayOffTypeById = async (req, res) => {
  try {
    const dayOffType = await DayOffType.findByPk(req.params.id);
    if (!dayOffType)
      return res.status(404).json({ error: "Không tìm thấy loại nghỉ phép" });
    res.json(dayOffType);
  } catch (error) {
    res.status(500).json({ error: "Lỗi khi lấy loại nghỉ phép" });
  }
};

export const createDayOffType = async (req, res) => {
  try {
    const dayOffType = await DayOffType.create(req.body);
    res.status(201).json(dayOffType);
  } catch (error) {
    res.status(500).json({ error: "Lỗi khi tạo loại nghỉ phép" });
  }
};

export const updateDayOffType = async (req, res) => {
  try {
    const dayOffType = await DayOffType.findByPk(req.params.id);
    if (!dayOffType)
      return res.status(404).json({ error: "Không tìm thấy loại nghỉ phép" });

    await dayOffType.update(req.body);
    res.json(dayOffType);
  } catch (error) {
    res.status(500).json({ error: "Lỗi khi cập nhật loại nghỉ phép" });
  }
};

export const deleteDayOffType = async (req, res) => {
  try {
    const dayOffType = await DayOffType.findByPk(req.params.id);
    if (!dayOffType)
      return res.status(404).json({ error: "Không tìm thấy loại nghỉ phép" });

    await dayOffType.destroy();
    res.json({ message: "Xóa loại nghỉ phép thành công" });
  } catch (error) {
    res.status(500).json({ error: "Lỗi khi xóa loại nghỉ phép" });
  }
};
