const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const dotenv = require("dotenv");
const scheduleRoutes = require("./routes/scheduleRoutes.js");

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());

// Routes
app.use("/api/schedule", scheduleRoutes);

// 404 handler

app.get("/", (req, res) => {
  res.status(404).json({ message: "Route  found" });
});
// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
