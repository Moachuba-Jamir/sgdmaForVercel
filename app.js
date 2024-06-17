const express = require('express')
const cors = require('cors')
const app = express();
const PORT = 8000
app.use(cors());

app.get('/', (req, res) => {
    res.json({message: "everything is working fine with vercel"})
})

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});



