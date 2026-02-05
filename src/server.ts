import dotenv from "dotenv";
import app from "./app";

dotenv.config(); 
import { connectDB } from "./config/db.config";

connectDB();

const PORT = process.env.PORT ? Number(process.env.PORT) : 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
