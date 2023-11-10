import { Sequelize, DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database.js";

export class Movie extends Model {}

Movie.init(
  {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      // allowNull defaults to true
    },
    cast: {
      type: DataTypes.JSON,
      // allowNull defaults to true
    },
    genre: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    releaseDate: {
      type: DataTypes.DATE,
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: "Movie", // We need to choose the model name
    tableName: "movie",
    timestamps: false,
  }
);
