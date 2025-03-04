import Position from "../models/Position.js";

export const getAllPositions = async (req, res) => {
  try {
    const positions = await Position.findAll();
    res.json(positions);
  } catch (error) {
    res.status(500).json({ error: "Lỗi khi lấy danh sách chức vụ" });
  }
};

export const getPositionById = async (req, res) => {
  try {
    const position = await Position.findByPk(req.params.id);
    if (!position)
      return res.status(404).json({ error: "Không tìm thấy chức vụ" });
    res.json(position);
  } catch (error) {
    res.status(500).json({ error: "Lỗi khi lấy chức vụ" });
  }
};

export const createPosition = async (req, res) => {
  try {
    const position = await Position.create(req.body);
    res.status(201).json(position);
  } catch (error) {
    res.status(500).json({ error: "Lỗi khi tạo chức vụ" });
  }
};

export const updatePosition = async (req, res) => {
  try {
    const position = await Position.findByPk(req.params.id);
    if (!position)
      return res.status(404).json({ error: "Không tìm thấy chức vụ" });

    await position.update(req.body);
    res.json(position);
  } catch (error) {
    res.status(500).json({ error: "Lỗi khi cập nhật chức vụ" });
  }
};

export const deletePosition = async (req, res) => {
  try {
    const position = await Position.findByPk(req.params.id);
    if (!position)
      return res.status(404).json({ error: "Không tìm thấy chức vụ" });

    await position.destroy();
    res.json({ message: "Xóa chức vụ thành công" });
  } catch (error) {
    res.status(500).json({ error: "Lỗi khi xóa chức vụ" });
  }
};
