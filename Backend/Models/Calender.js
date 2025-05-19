const mongoose = require("mongoose");

const CalendarSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Calendar", CalendarSchema);
