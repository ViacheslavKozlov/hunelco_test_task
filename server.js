"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
const errHandler_1 = require("./helpers/errHandler");
const watchmode_1 = require("./api/watchmode");
const validation_1 = require("./middlewares/validation");
const openai_1 = require("./api/openai");
const sequelize = new sequelize_1.Sequelize({
    dialect: "sqlite",
    storage: "./mock.db"
});
try {
    sequelize.authenticate();
    console.log("[db]:Connection has been established successfully.");
}
catch (e) {
    console.error("Unable to connect to the database:", e);
}
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(express_1.default.json());
app.use("/api/movies", validation_1.movieRequest, watchmode_1.movieRouter);
app.use("/api/movie", openai_1.shortDescriptionRouter);
app.use(errHandler_1.errHandler);
app.use((req, res) => {
    res.status(404).json({ message: "Not found" });
});
app.use((err, req, res, next) => {
    const { status = 500, message = "Server error" } = err;
    res.status(status).json(message);
});
app.listen(port, () => {
    console.log(`[server]: Server running on port ${port}`);
});
//# sourceMappingURL=server.js.map