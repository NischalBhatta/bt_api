import express from "express";
import cors from "cors";
const app = express();
const PORT = process.env.PORT || 8000;

//DB Connection
import { conMongoDb } from "./config/dbConfig.js";
conMongoDb();

//Middleware
app.use(express.json());
app.use(cors());

import userRouter from "./routers/userRouter.js";

app.use("/api/v1/users", userRouter);

app.get("/", (req, res) => {
  res.json({
    message: "Its Live",
  });
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Server is running at http://localhost:${PORT}`);
});

console.log("Hello Server");
