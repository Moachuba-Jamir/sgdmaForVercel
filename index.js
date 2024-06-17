const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const PORT = 8000;
app.use(cors());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.json({ message: "everything is working fine with vercel" });
});

app.get("/hello", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
