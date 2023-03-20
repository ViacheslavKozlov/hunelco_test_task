"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const errHandler_1 = require("../helpers/errHandler");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const API_KEY = process.env.watchmode_API_key;
const SEARCH_URL = process.env.watchmode_search_URL;
function getMovies(req, res, next) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const { search_req } = req.query;
        let url = `${SEARCH_URL}apiKey=${API_KEY}&search_value=${search_req}`;
        try {
            const { data, status } = yield axios_1.default.get(url);
            if (!((_a = data === null || data === void 0 ? void 0 : data.results) === null || _a === void 0 ? void 0 : _a.length))
                throw new errHandler_1.NotFound("No data found");
            res.status(status).json({
                status: "success",
                code: status,
                data
            });
        }
        catch (e) {
            next(e);
        }
    });
}
exports.default = getMovies;
// export default router.get(url);
//# sourceMappingURL=watchmode.js.map