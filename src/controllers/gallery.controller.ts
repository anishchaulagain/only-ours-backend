import { Request, Response } from "express";
import Gallery from "../models/gallery.model";

export const createImage = async (req: Request, res: Response) => {
  try {
    const image = new Gallery(req.body);
    await image.save();
    res.status(201).json(image);
  } catch (error) {
    res.status(500).json({ message: "Error adding image", error });
  }
};

export const getImages = async (req: Request, res: Response) => {
  try {
    const images = await Gallery.find().sort({ createdAt: -1 });
    res.json(images);
  } catch (error) {
    res.status(500).json({ message: "Error fetching images", error });
  }
};

export const deleteImage = async (req: Request, res: Response) => {
  try {
    await Gallery.findByIdAndDelete(req.params.id);
    res.json({ message: "Image deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting image", error });
  }
};
