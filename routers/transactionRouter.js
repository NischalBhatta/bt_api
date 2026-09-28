import express from "express";
import { insertTransaction } from "../models/transaction/transactionModel.js";

const router = express.Router();

//insert transaction
router.post("/", async (req, res, next) => {
  try {
    const { _id } = req.userInfo;
    req.body.userId = _id;

    const result = await insertTransaction(req.body);
    result?._id
      ? res.json({
          status: "success",
          message: "New Transaction added",
        })
      : res.json({
          status: "error",
          message: "Error adding new transaction",
        });
  } catch (error) {
    console.log(error.message);
  }
});

export default router;
