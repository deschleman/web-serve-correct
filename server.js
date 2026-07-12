import express from "express";

const app = express();
app.set("view engine", "ejs"); // lab 2 new line
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello, web!");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});  // lab 2 new line


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
