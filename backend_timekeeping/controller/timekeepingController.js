import Timekeeping from "../models/Timekeeping.js";

export const getAllTimekeeping = async (req, res) => {
  try {
    const timekeeping = await Timekeeping.findAll();
    res.json(timekeeping);
  } catch (error) {
    res.status(500).json({ error: "Lỗi khi lấy danh sách chấm công" });
  }
};

export const getTimekeepingById = async (req, res) => {
  try {
    const timekeeping = await Timekeeping.findByPk(req.params.id);
    if (!timekeeping)
      return res
        .status(404)
        .json({ error: "Không tìm thấy dữ liệu chấm công" });
    res.json(timekeeping);
  } catch (error) {
    res.status(500).json({ error: "Lỗi khi lấy dữ liệu chấm công" });
  }
};

export const createTimekeeping = async (req, res) => {
  try {
    const timekeeping = await Timekeeping.create(req.body);
    res.status(201).json(timekeeping);
  } catch (error) {
    res.status(500).json({ error: "Lỗi khi tạo bản ghi chấm công" });
  }
};

export const updateTimekeeping = async (req, res) => {
  try {
    const timekeeping = await Timekeeping.findByPk(req.params.id);
    if (!timekeeping)
      return res
        .status(404)
        .json({ error: "Không tìm thấy dữ liệu chấm công" });

    await timekeeping.update(req.body);
    res.json(timekeeping);
  } catch (error) {
    res.status(500).json({ error: "Lỗi khi cập nhật dữ liệu chấm công" });
  }
};

export const deleteTimekeeping = async (req, res) => {
  try {
    const timekeeping = await Timekeeping.findByPk(req.params.id);
    if (!timekeeping)
      return res
        .status(404)
        .json({ error: "Không tìm thấy dữ liệu chấm công" });

    await timekeeping.destroy();
    res.json({ message: "Xóa bản ghi chấm công thành công" });
  } catch (error) {
    res.status(500).json({ error: "Lỗi khi xóa dữ liệu chấm công" });
  }
};
