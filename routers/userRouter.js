import express from "express";
import { getUserByEmail, insertUser } from "../models/user/userModel.js";
import { comparePassword, hashPassword } from "../utils/bcryptjs.js";

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
router.post("/login", async (req, res, next) => {
  try {
    // need to recieve email and password
    const { email, password } = req.body;

    if (email && password) {
      //find the user by email
      const user = await getUserByEmail(email);
      if (user?._id) {
        //verify the password
        const isMatched = comparePassword(password, user.password);
        if (isMatched) {
          //user is actually authenticated

          //JWT and store the jwt in db and return the user{} with jwt token
          user.password = undefined;

          res.json({
            status: "success",
            message: "Login Successfully",
            user,
          });
          return;
        }
      }
    }
    res.status(401).json({
      error: "Invalid email and password",
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

// User Dashboard

export default router;
