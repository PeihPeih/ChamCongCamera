import express from "express";
const router = express.Router();
import {
  createPosition,
  deletePosition,
  getAllPositions,
  getPositionById,
  updatePosition,
} from "../controller/positionController.js";

router.get("/", getAllPositions);
router.get("/:id", getPositionById);
router.post("/", createPosition);
router.put("/:id", updatePosition);
router.delete("/:id", deletePosition);

export default router;
