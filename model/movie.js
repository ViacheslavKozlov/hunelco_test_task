"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize({
    dialect: "sqlite",
    storage: "./mock.db"
});
class Movie extends sequelize_1.Model {
}
exports.default = Movie.init({
    name: sequelize_1.DataTypes.STRING,
    relevance: sequelize_1.DataTypes.INTEGER,
    type: sequelize_1.DataTypes.STRING,
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true
    },
    year: sequelize_1.DataTypes.INTEGER,
    result_type: sequelize_1.DataTypes.STRING,
    tmdb_id: sequelize_1.DataTypes.INTEGER,
    tmdb_type: sequelize_1.DataTypes.STRING,
    image_url: sequelize_1.DataTypes.STRING,
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    }
}, {
    timestamps: true,
    sequelize,
    modelName: "Movie"
});
Movie.sync();
console.log(Movie === sequelize.models.Movie); // true
//# sourceMappingURL=movie.js.map