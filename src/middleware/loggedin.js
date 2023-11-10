export const isLoggedIn = (req, res, next) => {
  console.log(req.session.loggedin);
  if (!req.session.loggedin) {
    res.redirect("/auth/login");
  }
  next();
};
