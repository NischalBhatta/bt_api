import express from "express";

const PORT = process.env.PORT || 8000;

const app = express();

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
