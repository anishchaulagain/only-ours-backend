import dotenv from "dotenv";
import { connectDB } from "./config/db.config";
import User from "./models/user.model";
import Video from "./models/video.model";
import Gallery from "./models/gallery.model";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

dotenv.config();

const seedData = async () => {
  try {
    await connectDB();

    console.log("Clearing existing data...");
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

    console.log("Seeding videos...");
    await Video.deleteMany({});
    const videos = [
      {
        title: "The Great Adventure",
        description: "A thrilling journey through the unknown.",
        videoUrl: "https://example.com/video1.mp4",
        thumbnailUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2659&auto=format&fit=crop",
        genre: "Adventure",
        category: "movie"
      },
      {
        title: "Our First Picnic",
        description: "A beautiful day at the park.",
        videoUrl: "https://example.com/video2.mp4",
        thumbnailUrl: "https://images.unsplash.com/photo-1516961642265-531546e84af2?q=80&w=2600&auto=format&fit=crop",
        genre: "Romance",
        category: "memory"
      }
    ];
    await Video.insertMany(videos);

    console.log("Seeding gallery...");
    await Gallery.deleteMany({});
    const galleryItems = [
      {
        title: "Sunset at the Beach",
        imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop",
        category: "travel"
      },
      {
        title: "Wedding Day",
        imageUrl: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
        category: "events"
      }
    ];
    await Gallery.insertMany(galleryItems);

    console.log("Seeding completed successfully!");
    
    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error("Seeding failed:", error);
    process.exit(1);
  }
};

seedData();
