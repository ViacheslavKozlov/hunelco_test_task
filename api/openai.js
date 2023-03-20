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
Object.defineProperty(exports, "__esModule", { value: true });
const nanoid_1 = require("nanoid");
const openai_1 = require("openai");
const configuration = new openai_1.Configuration({
    apiKey: process.env.OPENAI_API_KEY
});
const openai = new openai_1.OpenAIApi(configuration);
function getShortDescription(req, res, next) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        let request = "Write me a short description about the movie Terminator: Dark Fate";
        try {
            const { data, status, statusText } = yield openai.createCompletion({
                model: "text-davinci-003",
                prompt: request,
                max_tokens: 500,
                temperature: 0
            });
            let result = {};
            Object.assign(result, { id: (0, nanoid_1.nanoid)() });
            Object.assign(result, { movieDescription: (_a = data === null || data === void 0 ? void 0 : data.choices[0]) === null || _a === void 0 ? void 0 : _a.text });
            res.status(status).json({
                status: statusText,
                code: status,
                data: result
            });
        }
        catch (e) {
            next(e);
        }
    });
}
exports.default = getShortDescription;
//# sourceMappingURL=openai.js.map