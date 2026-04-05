const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Backend is working 🚀");
});

app.get("/api/data", (req, res) => {
  res.json({ message: "Hello from backend" });
});

app.listen(8080, "0.0.0.0", () => {
  console.log("Server running on port 8080");
});