import mongoose, { Schema, Document } from "mongoose";

export interface IGallery extends Document {
  title: string;
  imageUrl: string;
  description?: string;
  createdAt: Date;
}

const GallerySchema: Schema = new Schema({
  title: { type: String, required: true },
  imageUrl: { type: String, required: true },
  description: { type: String },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<IGallery>("Gallery", GallerySchema);
