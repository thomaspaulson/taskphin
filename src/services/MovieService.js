import { Movie } from "../models/movie.js";
import { FileNotError } from "../utils/error.js";

export class MovieService {
  constructor() {
    this.model = Movie;
  }

  list(req) {
    return this.model.findAll({
      order: [["id", "desc"]],
    });
  }

  async get({ params }) {
    const { id } = params;
    const movie = await this.model.findOne({ where: { id } });
    if (!movie) {
      throw new FileNotError("Movie not found");
    }
    return movie;
  }

  create(req) {
    const { name, rating, cast, genre, releaseDate } = req.body;

    return this.model.create({
      name,
      rating,
      cast: cast.split(","),
      genre,
      releaseDate,
    });
  }

  //
  async update({ body, params }) {
    const { id } = params;
    const { name, rating, cast, genre, releaseDate } = body;

    const Movie = await this.model.update(
      {
        name,
        rating,
        cast: cast.split(","),
        genre,
        releaseDate,
      },
      {
        where: { id },
      }
    );

    if (!Movie) {
      throw new FileNotError("Movie not found");
    }

    return Movie;
  }

  //
  async delete({ params }) {
    const { id } = params;
    const Movie = await this.model.destroy({ where: { id } });
    if (!Movie) {
      throw new FileNotError("Movie not found");
    }
    return Movie;
  }
}
