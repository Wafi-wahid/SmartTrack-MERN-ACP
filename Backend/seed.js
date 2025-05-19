const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Dashboard = require("./Models/Dashboard");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("Connected to DB. Seeding...");

    await Dashboard.deleteMany();

    await Dashboard.create({
      userId: "demo_user",
      totalTasks: 12,
      currentTasks: 3,
      taskList: [
        "Design UI for SmartTrack",
        "Integrate backend API",
        "Update dashboard logic",
        "Write journal about progress",
        "Do 5-minute meditation",
      ],
      currentTaskDetail: {
  "title": "Refactor SmartTrack components",
  "description": "Improve reusability of the Dashboard and Task components for better maintainability.",
  "dueDate": "2025-05-21T18:00:00.000Z"
}

      journals: ["Felt productive today!", "Struggled with routing bug."],

      journalingMsg: "Take 5 mins to reflect 🌙",

      meditationMsg: "Close your eyes, breathe 🌿",

      chartData: [2, 4, 6, 8, 10, 12, 14, 16, 18],
      calendarEvents: ["Exam - May 25", "Therapy - May 22"],
    });

    console.log("Seed complete 🌱");
    mongoose.disconnect();
  })
  .catch((err) => console.error("Seeding failed:", err));
