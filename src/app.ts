import express from "express";
import cors from "cors";
import { setupSwagger } from "./config/swagger.config";
import routes from "./routes";

const app = express();
app.use(cors());
app.use(express.json());

// Swagger initialized ONCE here
setupSwagger(app);

app.use("/api", routes);

export default app;