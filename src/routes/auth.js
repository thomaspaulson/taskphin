import { Router } from "express";
import {
  viewRegister,
  register,
  viewLogin,
  login,
  logout,
  redirectView,
} from "../controllers/auth.js";

const authRoute = Router();

authRoute.get("/register", viewRegister);
authRoute.post("/register", register, redirectView);
authRoute.get("/login", viewLogin);
authRoute.post("/login", login, redirectView);
authRoute.get("/logout", logout, redirectView);

export default authRoute;
