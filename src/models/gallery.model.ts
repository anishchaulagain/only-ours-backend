import mongoose, { Schema, Document } from "mongoose";

export interface IGallery extends Document {
  title: string;
  imageUrl: string;
  category: string;
  description?: string;
  createdAt: Date;
}

const GallerySchema: Schema = new Schema({
  title: { type: String, required: true },
  imageUrl: { type: String, required: true },
  category: { type: String, required: true, default: "general" },
  description: { type: String },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<IGallery>("Gallery", GallerySchema);
