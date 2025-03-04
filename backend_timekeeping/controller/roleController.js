import Role from "../models/Role.js";

export const getAllRoles = async (req, res) => {
  try {
    const roles = await Role.findAll();
    res.json(roles);
  } catch (error) {
    res.status(500).json({ error: "Lỗi khi lấy danh sách vai trò" });
  }
};

export const getRoleById = async (req, res) => {
  try {
    const role = await Role.findByPk(req.params.id);
    if (!role) return res.status(404).json({ error: "Không tìm thấy vai trò" });
    res.json(role);
  } catch (error) {
    res.status(500).json({ error: "Lỗi khi lấy vai trò" });
  }
};

export const createRole = async (req, res) => {
  try {
    const role = await Role.create(req.body);
    res.status(201).json(role);
  } catch (error) {
    res.status(500).json({ error: "Lỗi khi tạo vai trò" });
  }
};

export const updateRole = async (req, res) => {
  try {
    const role = await Role.findByPk(req.params.id);
    if (!role) return res.status(404).json({ error: "Không tìm thấy vai trò" });

    await role.update(req.body);
    res.json(role);
  } catch (error) {
    res.status(500).json({ error: "Lỗi khi cập nhật vai trò" });
  }
};

export const deleteRole = async (req, res) => {
  try {
    const role = await Role.findByPk(req.params.id);
    if (!role) return res.status(404).json({ error: "Không tìm thấy vai trò" });

    await role.destroy();
    res.json({ message: "Xóa vai trò thành công" });
  } catch (error) {
    res.status(500).json({ error: "Lỗi khi xóa vai trò" });
  }
};
