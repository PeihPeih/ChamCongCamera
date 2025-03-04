import express from "express";
const router = express.Router();
import {
  createShift,
  deleteShift,
  getAllShifts,
  updateShift,
} from "../controller/shiftController.js";

router.get("/", getAllShifts);
router.post("/", createShift);
router.put("/:id", updateShift);
router.delete("/:id", deleteShift);

export default router;
