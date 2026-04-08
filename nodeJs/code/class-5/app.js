import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello From The Server!");
});

app.put("/clothes", (req, res) => {
  res.send("ye lo bhai clothes");
});

app.post("/shoes", (req, res) => {
  res.send("ye lo bhai shoes");
});

app.patch("/watch", (req, res) => {
  res.send("ye lo bhai watch");
});

app.delete("/mobile", (req, res) => {
  res.send("ye lo bhai mobile");
});

app.listen(8000, () => {
  console.log("server is listening");
});
