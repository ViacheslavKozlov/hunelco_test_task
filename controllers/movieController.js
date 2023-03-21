"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMovies = void 0;
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
const errHandler_1 = require("../helpers/errHandler");
const movie_1 = __importDefault(require("../model/movie"));
dotenv_1.default.config();
const API_KEY = process.env.watchmode_API_key;
const SEARCH_URL = process.env.watchmode_search_URL;
async function getMovies(req, res, next) {
    var _a;
    try {
        const { search_req } = req.query;
        const url = `${SEARCH_URL}apiKey=${API_KEY}&search_value=${search_req}`;
        const { data, status } = await axios_1.default.get(url);
        if (!((_a = data === null || data === void 0 ? void 0 : data.results) === null || _a === void 0 ? void 0 : _a.length))
            throw new errHandler_1.NotFound("No data found");
        await movie_1.default.bulkCreate(data.results, {
            ignoreDuplicates: true,
        });
        res.status(status).json({
            status: "success",
            code: status,
            data
        });
    }
    catch (e) {
        next(e);
    }
}
exports.getMovies = getMovies;
//# sourceMappingURL=movieController.js.map