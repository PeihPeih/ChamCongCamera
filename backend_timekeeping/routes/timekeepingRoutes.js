import express from "express";
const router = express.Router();
import {
  createTimekeeping,
  deleteTimekeeping,
  getAllTimekeeping,
  getTimekeepingById,
  updateTimekeeping,
} from "../controller/timekeepingController.js";

router.get("/", getAllTimekeeping);
router.get("/:id", getTimekeepingById);
router.post("/", createTimekeeping);
router.put("/:id", updateTimekeeping);
router.delete("/:id", deleteTimekeeping);

export default router;
