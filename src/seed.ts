import dotenv from "dotenv";
import { connectDB } from "./config/db.config";
import User from "./models/user.model";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

dotenv.config();

const seedData = async () => {
  try {
    await connectDB();

    console.log("Clearing existing users...");
    await User.deleteMany({});

    console.log("Seeding new users...");
    const hashedPasswordAdmin = await bcrypt.hash("admin_password_secure", 10);
    const hashedPasswordUser1 = await bcrypt.hash("user1_password", 10);
    const hashedPasswordUser2 = await bcrypt.hash("user2_password", 10);

    const users = [
      {
        username: "admin",
        email: "admin@dipans.com",
        password: hashedPasswordAdmin,
        role: "admin",
      },
      {
        username: "user1",
        email: "user1@dipans.com",
        password: hashedPasswordUser1,
        role: "user",
      },
      {
        username: "user2",
        email: "user2@dipans.com",
        password: hashedPasswordUser2,
        role: "user",
      },
    ];

    await User.insertMany(users);
    console.log("Seeding completed successfully!");
    
    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error("Seeding failed:", error);
    process.exit(1);
  }
};

seedData();
