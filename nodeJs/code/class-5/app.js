import express from "express";

const app = express();

const users = [];

app.get("/user", (req, res) => {
  res.send("Hello From The Server!");
});

app.put("/user", (req, res) => {
  res.send("ye lo bhai clothes");
});

app.post("/user", (req, res) => {
  res.send("ye lo bhai hogaye ap register");
});

app.patch("/user", (req, res) => {
  res.send("ye lo bhai watch");
});

app.delete("/user", (req, res) => {
  res.send("ye lo bhai mobile");
});

app.listen(8000, () => {
  console.log("server is listening");
});
