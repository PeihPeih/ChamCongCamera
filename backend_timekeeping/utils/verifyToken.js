import jwt from "jsonwebtoken";
import Staff from "../models/Staff.js";
import Role from "../models/Role.js";

export const verifyToken = (req, res, next) => {
  try {
    const token = req.cookies.accessToken;
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "You are not authorized!",
      });
    }

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
      if (err) {
        return res.status(401).json({
          success: false,
          message: "Token is invalid!",
        });
      }
      req.user = user;
      next();
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `Server error: ${error.message}`,
    });
  }
};

export const verifyUser = async (req, res, next) => {
  try {
    verifyToken(req, res, async () => {
      const userId = req.user.id;
      const roleId = req.user.role;
      const staff = await Staff.findOne({
        where: { id: userId },
        include: {
          model: Role,
          attributes: ["Name"],
        },
      });
      if (req.user.id === req.params.id || staff.Role.Name === "admin") {
        next();
      } else {
        return res.status(401).json({
          success: false,
          message: "You are not authenticated!",
        });
      }
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `Server error: ${error.message}`,
    });
  }
};

export const verifyAdmin = (req, res, next) => {
  try {
    verifyToken(req, res, () => {
      if (req.user.role === "admin") {
        next();
      } else {
        return res.status(401).json({
          success: false,
          message: "You are not authorized!",
        });
      }
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `Server error: ${error.message}`,
    });
  }
};
