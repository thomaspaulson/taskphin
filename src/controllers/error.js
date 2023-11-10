export const logErrors = (error, req, res, next) => {
  console.error(error.stack);
  next(error);
};
