import express from "express";
import { insertUser } from "../models/user/userModel.js";
import { hashPassword } from "../utils/bcryptjs.js";

const router = express.Router();

// User Signup
router.post("/", async (req, res, next) => {
  try {
    // get user obj
    const { password, ...rest } = req.body;
    //encrypt password
    const hashPass = await hashPassword(password);
    // console.log(hashPass);
    // user data verification
    const user = await insertUser({ ...rest, password: hashPass });
    user?._id
      ? res.json({
          status: "success",
          message: "Your account has been created. You may login now",
        })
      : res.json({
          status: "error",
          message: "Error creating user. Please try again later",
        });
  } catch (error) {
    res.json({
      status: "Error",
      message: error.message,
    });
    console.log(error);
  }
});

// User Login

// User Dashboard

export default router;
