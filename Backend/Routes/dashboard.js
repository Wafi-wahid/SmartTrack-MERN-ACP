// --- Backend: Express API (dashboard.js route) ---
const express = require("express");
const router = express.Router();
const Dashboard = require("../Models/Dashboard");

// Get dashboard data
router.get("/", async (req, res) => {
  try {
    const data = await Dashboard.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create or update dashboard data
router.post("/", async (req, res) => {
  try {
    const existing = await Dashboard.findOne({ userId: req.body.userId });
    if (existing) {
      Object.assign(existing, req.body);
      await existing.save();
      res.json(existing);
    } else {
      const dashboard = new Dashboard(req.body);
      await dashboard.save();
      res.status(201).json(dashboard);
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete dashboard data
router.delete("/:id", async (req, res) => {
  try {
    await Dashboard.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
