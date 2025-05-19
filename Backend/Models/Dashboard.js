// --- Backend: Mongoose Model (Dashboard.js) ---
const mongoose = require("mongoose");
const dashboardSchema = new mongoose.Schema({
  userId: String,
  totalTasks: Number,
  taskList: [String],
  currentTasks: Number,
  currentTaskDetail: {
    title: String,
    description: String,
    dueDate: Date,
  },
  journal: [String],
  journalingMsg: String,
  meditationMsg: String,
  chartData: [Number],
  calendarEvents: [String],
});
module.exports = mongoose.model("Dashboard", dashboardSchema);
