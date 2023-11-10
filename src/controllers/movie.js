import { MovieService } from "../services/MovieService.js";
import { errorResponse } from "../utils/error.js";
//
export const list = async (req, res) => {
  try {
    const movieService = new MovieService();
    const movies = await movieService.list(req);
    res.locals = {
      title: "Movies",
    };
    return res.render("movies/index", { movies });
  } catch (err) {
    return errorResponse(err, res);
  }
};

//
export const get = async (req, res) => {
  try {
    const movieService = new MovieService();
    const movie = await movieService.get(req);
    res.locals = {
      title: "Veiw movie",
    };
    return res.render("movies/show", { movie });
  } catch (err) {
    return errorResponse(err, res);
  }
};

export const newMovie = (req, res) => {
  res.locals = {
    title: "New movie",
  };
  res.render("movies/new");
};

//
export const create = async (req, res, next) => {
  try {
    const movieService = new MovieService();
    const movie = await movieService.create(req);
    res.locals.redirect = "/movies";
    next();
  } catch (err) {
    return errorResponse(err, res);
  }
};

export const edit = async (req, res) => {
  try {
    const movieService = new MovieService();
    const movie = await movieService.get(req);
    res.locals = {
      title: "Edit movie",
    };
    return res.render("movies/edit", { movie });
  } catch (err) {
    return errorResponse(err, res);
  }
};

//
export const update = async (req, res, next) => {
  try {
    const movieService = new MovieService();
    await movieService.update(req);
    res.locals.redirect = "/movies";
    next();
  } catch (err) {
    return errorResponse(err, res);
  }
};

export const destroy = async (req, res, next) => {
  try {
    const movieService = new MovieService();
    await movieService.delete(req);
    res.locals.redirect = "/movies";
    next();
  } catch (err) {
    return errorResponse(err, res);
  }
};

export const redirectView = (req, res, next) => {
  let redirectPath = res.locals.redirect;
  if (redirectPath) res.redirect(redirectPath);
  else next();
};
