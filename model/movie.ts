import { Model, Sequelize, InferAttributes, InferCreationAttributes, DataTypes } from "sequelize";
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./mock.db"
});

class Movie extends Model<InferAttributes<Movie>, InferCreationAttributes<Movie>> {
  name: string;
  relevance: number;
  type: string;
  id: number;
  year: number;
  result_type: string;
  tmdb_id: number;
  tmdb_type: string;
  image_url: string;
  description: string | null;
}

export default Movie.init(
  {
    name: DataTypes.STRING,
    relevance: DataTypes.INTEGER,
    type: DataTypes.STRING,
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    year: DataTypes.INTEGER,
    result_type: DataTypes.STRING,
    tmdb_id: DataTypes.INTEGER,
    tmdb_type: DataTypes.STRING,
    image_url: DataTypes.STRING,
    description: {
      type: DataTypes.STRING,
      allowNull: true
    }
  },
  {
    timestamps: true,
    sequelize,
    modelName: "Movie"
  }
);
Movie.sync();
console.log(Movie === sequelize.models.Movie); // true
