import express from "express";
const router = express.Router();
import {
  createStaff,
  deleteStaff,
  getAllStaff,
  getStaffById,
  updateStaff,
} from "../controller/StaffController.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

router.get("/", verifyAdmin, getAllStaff);
router.get("/:id", verifyUser, getStaffById);
router.post("/", verifyAdmin, createStaff);
router.put("/:id", verifyAdmin, updateStaff);
router.delete("/:id", verifyAdmin, deleteStaff);

export default router;
