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
exports.movieRequest = void 0;
const errHandler_1 = require("../helpers/errHandler");
function movieRequest(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { search_req } = req.query;
            if (!search_req)
                throw new errHandler_1.BadRequest("No request");
            if ((search_req === null || search_req === void 0 ? void 0 : search_req.length) < 3 || (search_req === null || search_req === void 0 ? void 0 : search_req.length) > 20)
                throw new errHandler_1.BadRequest("Search request should contain at least 3 and up to 20 characters");
            next();
        }
        catch (error) {
            next(error);
        }
    });
}
exports.movieRequest = movieRequest;
//# sourceMappingURL=validation.js.map