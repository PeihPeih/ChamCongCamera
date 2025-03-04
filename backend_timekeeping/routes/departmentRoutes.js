import express from "express";
const router = express.Router();
import {
  createDepartment,
  deleteDepartment,
  getAllDepartments,
  getDepartmentById,
  updateDepartment,
} from "../controller/departmentController.js";

router.get("/", getAllDepartments);
router.get("/:id", getDepartmentById);
router.post("/", createDepartment);
router.put("/:id", updateDepartment);
router.delete("/:id", deleteDepartment);

export default router;
