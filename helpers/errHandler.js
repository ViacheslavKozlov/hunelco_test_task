"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errHandler = exports.ValidationError = exports.BadRequest = exports.NotFound = void 0;
class NotFound extends Error {
    constructor(message) {
        super(message);
        this.status = 404;
    }
}
exports.NotFound = NotFound;
class BadRequest extends Error {
    constructor(message) {
        super(message);
        this.status = 400;
    }
}
exports.BadRequest = BadRequest;
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.status = 400;
    }
}
exports.ValidationError = ValidationError;
const errHandler = (error, req, res, next) => {
    if (error instanceof NotFound || error instanceof BadRequest) {
        return res.status(error.status).json({ message: error.message });
    }
    res.status(500).json({ message: error.message });
};
exports.errHandler = errHandler;
//# sourceMappingURL=errHandler.js.map