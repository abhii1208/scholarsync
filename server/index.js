const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("ScholarSync API is running...");
});



app.listen(PORT, () => {
  console.log('Server running on http://localhost:${PORT}');
});