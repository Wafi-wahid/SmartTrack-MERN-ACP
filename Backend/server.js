const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const dashboardRoutes = require("./Routes/dashboard");
const journalRoutes = require("./Routes/journal");
const taskRoutes = require("./Routes/task");
const calenderRoutes = require("./Routes/calender");
// Load env vars
dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use("/", dashboardRoutes);
app.use("/journal", journalRoutes);
app.use("/task", taskRoutes);
app.use("/calender", calenderRoutes);

// MongoDB connection
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB connected 🎉"))
  .catch((err) => console.error("MongoDB connection failed:", err));

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT} 🚀`);
});
