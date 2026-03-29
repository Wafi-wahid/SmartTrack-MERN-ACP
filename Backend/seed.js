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
      totalTasks: 9,
      currentTasks: 3,
      journalingMsg: "Take 5 mins to reflect 🌙",

      meditationMsg: "Close your eyes, breathe 🌿",

      chartData: [2, 4, 6, 8, 10, 12, 14, 16, 18],
      calendarEvents: ["Exam - May 25", "Therapy - May 22"],
    });

    console.log("Seed complete 🌱");
    mongoose.disconnect();
  })
  .catch((err) => console.error("Seeding failed:", err));
