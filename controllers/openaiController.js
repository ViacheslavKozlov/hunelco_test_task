"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getShortDescription = void 0;
const nanoid_1 = require("nanoid");
const openai_1 = require("openai");
const dotenv_1 = __importDefault(require("dotenv"));
// import { BadRequest } from "../helpers/errHandler";
// import movie from "../model/movie";
dotenv_1.default.config();
const configuration = new openai_1.Configuration({
    apiKey: process.env.OPENAI_API_KEY
});
const openai = new openai_1.OpenAIApi(configuration);
async function getShortDescription(req, res, next) {
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
        Object.assign(result, { id: (0, nanoid_1.nanoid)() });
        Object.assign(result, { movieDescription: data.choices[0].text });
        res.status(status).json({
            status: statusText,
            code: status,
            data: result
        });
    }
    catch (e) {
        res.status(e.response.status).json({
            status: e.response.statusText
        });
        next(e);
    }
}
exports.getShortDescription = getShortDescription;
//# sourceMappingURL=openaiController.js.map