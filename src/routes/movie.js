import { Router } from "express";
import {
  list,
  get,
  newMovie,
  create,
  edit,
  update,
  destroy,
  redirectView,
} from "../controllers/movie.js";

const movieRoute = Router();

movieRoute.get("/", list);
movieRoute.get("/new", newMovie);
movieRoute.get("/:id", get);
movieRoute.post("/", create, redirectView);
movieRoute.get("/:id/edit", edit);
movieRoute.put("/:id", update, redirectView);
movieRoute.delete("/:id", destroy, redirectView);

export default movieRoute;
