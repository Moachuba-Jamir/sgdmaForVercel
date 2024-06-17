const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express();
const PORT = 8000
app.use(cors());

app.get('/', (req, res) => {
    res.json({message: "everything is working fine with vercel"})
})

app.get("/api/*", (req, res) => {
  // Construct the path to your index.html file
  const indexPath = path.join(__dirname, "public", "index.html");
  // Send the index.html file as the response
  res.sendFile(indexPath);
});

// app.listen(PORT, () => {
//   console.log(`✅ Server is running on port ${PORT}`);
// });

module.exports = app;
// `/api/hello.js`
export default function hello(req, res) {
  res.statusCode = 200;
  res.json({ message: 'It works' });
}

