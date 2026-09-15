import express from "express";
import { insertUser } from "../models/user/userModel.js";
import { hashPassword } from "../utils/bcryptjs.js";

const router = express.Router();

// User Signup
router.post("/", async (req, res, next) => {
  try {
    // get user obj
    //encrypt password
    const hashPass = hashPassword(req.body.password);
    console.log(hashPass);
    // user data verification
    const user = await insertUser(req.body);
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
  }
});

// User Login

// User Dashboard

export default router;
