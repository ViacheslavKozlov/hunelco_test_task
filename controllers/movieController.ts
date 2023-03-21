import { Request, Response, NextFunction } from "express";
import axios from "axios";
import dotenv from "dotenv";
import { NotFound } from "../helpers/errHandler";
import movie from "../model/movie";

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

export async function getMovies(req: Request, res: Response, next: NextFunction) {
  try {
    const { search_req } = req.query;
    const url = `${SEARCH_URL}apiKey=${API_KEY}&search_value=${search_req}`;
    const { data, status } = await axios.get<GetUsersResponse>(url);

    if (!data?.results?.length) throw new NotFound("No data found");

    await movie.bulkCreate(data.results,  {
    ignoreDuplicates: true,
  })

    res.status(status).json({
      status: "success",
      code: status,
      data
    });
  } catch (e) {
    next(e);
  }
}