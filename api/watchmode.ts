import { Request, Response, NextFunction } from "express";
import axios from "axios";
import { NotFound } from "../helpers/errHandler";

import dotenv from "dotenv";

dotenv.config();

const API_KEY = process.env.watchmode_API_key;
const SEARCH_URL = process.env.watchmode_search_URL;

type Movie = {
  name: string;
  relevance: number;
  type: string;
  id: number;
  year: number;
  result_type: string;
  tmdb_id: number;
  tmdb_type: string;
  image_url: string;
};

type GetUsersResponse = {
  results: [];
  length: number;
  data: Movie[];
};

export default async function getMovies(req: Request, res: Response, next: NextFunction) {
  const { search_req } = req.query;
  let url = `${SEARCH_URL}apiKey=${API_KEY}&search_value=${search_req}`;
  try {
    const { data, status } = await axios.get<GetUsersResponse>(url);

    if (!data?.results?.length) throw new NotFound("No data found");

    res.status(status).json({
      status: "success",
      code: status,
      data
    });
  } catch (e) {
    next(e);
  }
}

// export default router.get(url);
