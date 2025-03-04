import express from "express";
const router = express.Router();
import {
  createDayOffType,
  deleteDayOffType,
  getAllDayOffTypes,
  getDayOffTypeById,
  updateDayOffType,
} from "../controller/dayOffTypeController.js";

router.get("/", getAllDayOffTypes);
router.get("/:id", getDayOffTypeById);
router.post("/", createDayOffType);
router.put("/:id", updateDayOffType);
router.delete("/:id", deleteDayOffType);

export default router;
