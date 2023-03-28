import { Request, Response, NextFunction } from "express";
import { BadRequest, ValidationError } from "../helpers/errHandler";

export async function movieRequest(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { search_req } = req.query;

    if (!search_req) throw new BadRequest("No request");

    if (search_req.length < 3 || search_req.length > 20)
      throw new ValidationError("Search request should contain at least 3 and up to 20 characters");

    next();
  } catch (e) {
    next(e);
  }
}
