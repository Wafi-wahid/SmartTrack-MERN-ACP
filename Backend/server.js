<<<<<<< HEAD
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

// Load env vars
dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

const app = express();
const PORT = process.env.PORT || 5000;
=======
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const JournalRoute = require('./Routes/jouranlRoutes');

const app = express();
const PORT = 5000;
>>>>>>> a0f4318d072cc230e8fbb100aee74cf608b1ba0a

// Middleware
app.use(cors());
app.use(express.json());

// Routes
<<<<<<< HEAD
const dashboardRoutes = require("./Routes/dashboard");
app.use("/dashboard", dashboardRoutes);

// MongoDB connection
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB connected 🎉"))
  .catch((err) => console.error("MongoDB connection failed:", err));

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT} 🚀`);
=======
app.use('/api/journals', JournalRoute);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/smarttrack', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
}).catch(err => {
  console.error('MongoDB connection error:', err);
>>>>>>> a0f4318d072cc230e8fbb100aee74cf608b1ba0a
});
