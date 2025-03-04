import express from "express";
const router = express.Router();
import {
  createStaff,
  deleteStaff,
  getAllStaff,
  getStaffById,
  updateStaff,
} from "../controller/StaffController.js";

router.get("/", getAllStaff);
router.get("/:id", getStaffById);
router.post("/", createStaff);
router.put("/:id", updateStaff);
router.delete("/:id", deleteStaff);

export default router;
