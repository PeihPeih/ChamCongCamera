import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Staff from "../models/Staff.js";
// Đăng ký nhân viên (Register)
export const register = async (req, res) => {
  try {
    // Băm mật khẩu
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    // Tạo nhân viên mới
    const newStaff = new Staff({
      Fullname: req.body.Fullname,
      Username: req.body.Username,
      Password: hash,
      Email: req.body.Email,
      Gender: req.body.Gender,
      DayOfBirth: req.body.DayOfBirth,
      PositionID: req.body.PositionID,
      DepartmentID: req.body.DepartmentID,
      RoleID: req.body.RoleID,
    });

    await newStaff.save();

    res
      .status(200)
      .json({ success: true, message: "Successfully registered!" });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: `Error: ${error.message}` });
  }
};

// Đăng nhập nhân viên (Login)
export const login = async (req, res) => {
  const username = req.body.Username;
  try {
    const staff = await Staff.findOne({ where: { Username: username } });
    if (!staff) {
      return res.status(404).json({
        success: false,
        message: "User not found!",
      });
    }

    const checkCorrectPassword = await bcrypt.compare(
      req.body.Password,
      staff.Password
    );
    if (!checkCorrectPassword) {
      return res
        .status(401)
        .json({ success: false, message: "Incorrect username or password!" });
    }

    // Tạo JWT Token
    const token = jwt.sign(
      { id: staff.ID, role: staff.RoleID },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "15d" }
    );

    // Thiết lập cookie
    res
      .cookie("accessToken", token, {
        httpOnly: true,
        expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
        sameSite: "Lax",
        secure: false,
      })
      .status(200)
      .json({
        token,
        success: true,
        message: "Successfully logged in!",
        data: {
          ID: staff.ID,
          Fullname: staff.Fullname,
          Username: staff.Username,
          Email: staff.Email,
          Gender: staff.Gender,
          RoleID: staff.RoleID,
        },
      });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to login!",
    });
  }
};

export async function logout(req, res) {
  try {
    const cookieOptions = {
      httpOnly: true,
      secure: true,
      sameSite: "None",
    };

    return res.cookie("accessToken", "", cookieOptions).status(200).json({
      message: "Session out",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
    });
  }
}
