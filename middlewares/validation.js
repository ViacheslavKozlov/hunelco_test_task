"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.movieRequest = void 0;
const errHandler_1 = require("../helpers/errHandler");
async function movieRequest(req, res, next) {
    try {
        const { search_req } = req.query;
        if (!search_req)
            throw new errHandler_1.BadRequest("No request");
        if (search_req.length < 3 || search_req.length > 20)
            throw new errHandler_1.ValidationError("Search request should contain at least 3 and up to 20 characters");
        next();
    }
    catch (e) {
        next(e);
    }
}
exports.movieRequest = movieRequest;
//# sourceMappingURL=validation.js.map