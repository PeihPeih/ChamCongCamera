import express from "express";
const router = express.Router();
import { getConfig, updateConfig } from "../controller/configController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

router.get("/", verifyAdmin, getConfig);
router.put("/", verifyAdmin, updateConfig);

export default router;
