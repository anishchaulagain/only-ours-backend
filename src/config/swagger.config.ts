import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import YAML from "yamljs";
import { Express } from "express";

export const setupSwagger = (app: Express) => {
  const baseDoc = YAML.load("./src/docs/swagger.yaml");

  const swaggerSpec = swaggerJsdoc({
    definition: baseDoc,
    apis: ["./src/routes/*.ts"], 
  });

  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
