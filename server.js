import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello, web!");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

// number 1  : GET/hello/:name responds: res.send("hello, {$name}!")
