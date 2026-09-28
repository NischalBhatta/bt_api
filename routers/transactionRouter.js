import express from "express";

const router = express.Router();

//insert transaction
router.post("/", (req, res, next) => {
  try {
    const { _id } = req.userInfo;
    req.body.userId = _id;

    console.log(req.body);
    res.json({
      status: "succsss",
      message: "TODO new transaction",
    });
  } catch (error) {
    console.log(error.message);
  }
});

export default router;
