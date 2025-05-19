const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    stage: {
      type: String,
      enum: ["Not started", "In progress"],
      default: "Not started",
    },
    priority: {
      type: String,
      enum: ["High", "Medium", "Low"],
      default: "Medium",
    },
    team: { type: String },
    due: { type: String, required: true }, // "Today", "Tomorrow", "This Week"
  },
  { timestamps: true }
);

module.exports = mongoose.model("Task", taskSchema);
