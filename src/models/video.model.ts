import mongoose, { Schema, Document } from "mongoose";

export interface IVideo extends Document {
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
  genre: string;
  category: string;
  duration?: string;
  year?: number;
  createdAt: Date;
}

const VideoSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  videoUrl: { type: String, required: true },
  thumbnailUrl: { type: String, required: true },
  genre: { type: String, required: true },
  category: { type: String, required: true, default: "memory" },
  duration: { type: String },
  year: { type: Number },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<IVideo>("Video", VideoSchema);
