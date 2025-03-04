import Config from "../models/Config.js";

export const getConfig = async (req, res) => {
  try {
    const config = await Config.findOne();
    if (!config)
      return res
        .status(404)
        .json({ error: "Không tìm thấy cấu hình hệ thống" });
    res.json(config);
  } catch (error) {
    res.status(500).json({ error: "Lỗi khi lấy cấu hình hệ thống" });
  }
};

export const updateConfig = async (req, res) => {
  try {
    let config = await Config.findOne();
    if (!config) {
      config = await Config.create(req.body);
      return res.status(201).json(config);
    }

    await config.update(req.body);
    res.json(config);
  } catch (error) {
    res.status(500).json({ error: "Lỗi khi cập nhật cấu hình hệ thống" });
  }
};
