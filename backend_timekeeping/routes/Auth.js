import express from "express";
const router = express.Router();
import { login, logout, register } from "../controller/authController.js";
import { verifyUser } from "../utils/verifyToken.js";

router.post("/register", register);
router.post("/login", login);
router.post("/logout", verifyUser, logout);

export default router;
