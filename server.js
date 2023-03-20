"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const errHandler_1 = require("./helpers/errHandler");
const watchmode_1 = __importDefault(require("./api/watchmode"));
const dotenv_1 = __importDefault(require("dotenv"));
const validation_1 = require("./middlewares/validation");
const openai_1 = __importDefault(require("./api/openai"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.use("/api/movies", validation_1.movieRequest, watchmode_1.default);
app.use("/api/description", openai_1.default);
app.use(errHandler_1.errHandler);
// app.use((req: Request, res: Response) => {
//   res.status(404).
// })
app.listen(port, () => {
    console.log(`[server]: Server running on port ${port}`);
});
//# sourceMappingURL=server.js.map