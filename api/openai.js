"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.shortDescriptionRouter = void 0;
const express_1 = __importDefault(require("express"));
const openaiController_1 = require("../controllers/openaiController");
const router = express_1.default.Router();
router.post("/description", openaiController_1.getShortDescription);
exports.shortDescriptionRouter = router;
//# sourceMappingURL=openai.js.map