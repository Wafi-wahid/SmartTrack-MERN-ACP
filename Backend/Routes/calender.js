const express = require("express");
const router = express.Router();
const Calendar = require("../Models/Calender");

router.get("/", async (req, res) => {
  try {
    const events = await Calendar.find();
    res.json(events);
  } catch (err) {
    res.status(500).send("Server error");
  }
});

router.post("/", async (req, res) => {
  const { date, title } = req.body;
  try {
    const event = new Calendar({ date, title });
    await event.save();
    res.status(201).json(event);
  } catch (err) {
    res.status(500).send("Error saving event");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Calendar.findByIdAndDelete(req.params.id);
    res.status(200).send("Event deleted");
  } catch (err) {
    res.status(500).send("Error deleting event");
  }
});

module.exports = router;
