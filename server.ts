import express, { Express, Request, Response, NextFunction } from "express";
import { Sequelize } from "sequelize";
import dotenv from "dotenv";

import { errHandler } from "./helpers/errHandler";
import { movieRouter } from "./api/watchmode";
import { movieRequest } from "./middlewares/validation";
import { shortDescriptionRouter } from "./api/openai";

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./mock.db"
});

try {
  sequelize.authenticate();
  console.log("[db]:Connection has been established successfully.");
} catch (e) {
  console.error("Unable to connect to the database:", e);
}

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());

app.use("/api/movies", movieRequest, movieRouter);
app.use("/api/movie", shortDescriptionRouter);

app.use(errHandler);

app.use((req: Request, res: Response) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err: { status: number; message: string }, req: Request, res: Response, next: NextFunction) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json(message);
});

app.listen(port, () => {
  console.log(`[server]: Server running on port ${port}`);
});
