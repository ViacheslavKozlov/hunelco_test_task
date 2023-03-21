import { Request, Response, NextFunction } from "express";
export class NotFound extends Error {
  status: number;

  constructor(message: string) {
    super(message);
    this.status = 404;
  }
}

export class BadRequest extends Error {
  status: number;

  constructor(message: string) {
    super(message);
    this.status = 400;
  }
}
export class ValidationError extends Error {
  status: number;

  constructor(message: string) {
    super(message);
    this.status = 400;
  }
}

export const errHandler = (error: { status: number; message: string }, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof NotFound || error instanceof BadRequest || error instanceof ValidationError) {
    return res.status(error.status).json({ message: error.message });
  }
  res.status(500).json({ message: error.message });
};
