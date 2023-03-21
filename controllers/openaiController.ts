import { Request, Response, NextFunction } from "express";
import { nanoid } from "nanoid";
import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";
// import { BadRequest } from "../helpers/errHandler";
// import movie from "../model/movie";

dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(configuration);

export async function getShortDescription(req: Request, res: Response, next: NextFunction) {
  try {
    // const { id, name, year }: { id: number; name: string; year: number } = req.body;

    // if (id && name && year) throw new BadRequest("Bad request");

    // const request = `Write me a short description about the movie ${name} (${year})`;

    const request = "Write me a short description about the movie Terminator: Dark Fate (2019)";

    const { data, status, statusText } = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: request,
      max_tokens: 500,
      temperature: 0
    });

    // await movie.update(
    //   { description: data.choices[0].text },
    //   {
    //     where: id
    //   }
    // );

    let result = {};
    Object.assign(result, { id: nanoid() });
    Object.assign(result, { movieDescription: data.choices[0].text });

    res.status(status).json({
      status: statusText,
      code: status,
      data: result
    });
  } catch (e) {
    res.status(e.response.status).json({
      status: e.response.statusText
    });
    next(e);
  }
}
