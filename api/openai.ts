import { Request, Response, NextFunction } from "express";
import { nanoid } from "nanoid";
import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});
const openai = new OpenAIApi(configuration);

export default async function getShortDescription(req: Request, res: Response, next: NextFunction) {
  let request = "Write me a short description about the movie Terminator: Dark Fate";
  try {
    const { data, status, statusText } = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: request,
      max_tokens: 500,
      temperature: 0
    });

    let result = {};
    Object.assign(result, {id: nanoid()});
    Object.assign(result, { movieDescription: data?.choices[0]?.text });
    

    res.status(status).json({
      status: statusText,
      code: status,
      data: result
    });
  } catch (e) {
    next(e);
  }
}
