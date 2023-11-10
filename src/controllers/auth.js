import { AuthService } from "../services/AuthService.js";
import { errorResponse } from "../utils/error.js";
//

export const viewRegister = async (req, res) => {
  try {
    res.locals = {
      title: "register",
      message: "This is a message",
    };
    return res.render("user/register", {});
  } catch (err) {
    return errorResponse(err, res);
  }
};

//
export const register = async (req, res, next) => {
  try {
    const authService = new AuthService();
    const auth = await authService.create(req);
    res.locals.redirect = "/dashboard";
    next();
  } catch (err) {
    return errorResponse(err, res);
  }
};

export const viewLogin = async (req, res) => {
  try {
    res.locals = {
      title: "login",
    };
    return res.render("user/login", {});
  } catch (err) {
    return errorResponse(err, res);
  }
};

//
export const login = async (req, res, next) => {
  try {
    const authService = new AuthService();
    const user = await authService.login(req);
    if (user) {
      res.locals.redirect = "/";
      next();
    }
    req.flash("error", `Invalid login!`);
    res.locals.redirect = "/auth/login";
    next();
  } catch (err) {
    return errorResponse(err, res);
  }
};

export const logout = async (req, res, next) => {
  try {
    const authService = new AuthService();
    await authService.logout(req);
    res.locals.redirect = "/auth/login";
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
