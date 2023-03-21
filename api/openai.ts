import express from "express";
import { getShortDescription } from "../controllers/openaiController";
const router = express.Router();

router.post("/description", getShortDescription);

export const shortDescriptionRouter = router;
