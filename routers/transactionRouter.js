import express from "express";
import {
  deleteTransaction,
  getAllTransaction,
  insertTransaction,
} from "../models/transaction/transactionModel.js";

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

//get Transactions
router.get("/", async (req, res, next) => {
  try {
    const { _id } = req.userInfo;
    console.log(req.userInfo);
    const response = (await getAllTransaction(_id)) || [];

    res.json({
      status: "success",
      message: "Here are the transactions",
      response,
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

//Delete transaction
router.delete("/", async (req, res, next) => {
  try {
    //recieve ids of the transaction and id of the user
    const ids = req.body;
    const { _id } = req.userInfo;
    console.log(ids, _id);

    //perform the deletion query
    const result = await deleteTransaction(_id, ids);

    //response recieved
    res.json({
      status: "success",
      message: result.deletedCount + " transaction successfully deleted",
    });
  } catch (error) {
    console.log(error);
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

export default router;
