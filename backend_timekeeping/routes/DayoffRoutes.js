import express from "express";
const router = express.Router();
import {
  createDayOff,
  deleteDayOff,
  getAllDayOffs,
  getDayOffById,
  updateDayOff,
} from "../controller/DayoffController.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

router.get("/", verifyUser, getAllDayOffs);
router.get("/:id", verifyAdmin, getDayOffById);
router.post("/", verifyUser, createDayOff);
router.put("/:id", verifyAdmin, updateDayOff);
router.delete("/:id", verifyUser, deleteDayOff);

export default router;
