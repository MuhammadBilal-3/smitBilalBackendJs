import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello get request");
});
app.listen(8000, () => {
  console.log("server listen");
});