import express from "express";
const router = express.Router();
import { getConfig, updateConfig } from "../controller/configController.js";

router.get("/", getConfig);
router.put("/", updateConfig);

export default router;
