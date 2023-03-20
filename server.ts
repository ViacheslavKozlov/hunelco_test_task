import express, { Express, Request, Response } from "express";
import { errHandler } from "./helpers/errHandler";
import getMovies from "./api/watchmode";
import dotenv from "dotenv";
import { movieRequest } from "./middlewares/validation";
import getShortDescription from "./api/openai";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use("/api/movies", movieRequest, getMovies);
app.use("/api/description", getShortDescription);

app.use(errHandler);

// app.use((req: Request, res: Response) => {
//   res.status(404).
// })

app.listen(port, () => {
  console.log(`[server]: Server running on port ${port}`);
});
