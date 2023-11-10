export const errorResponse = (err, res) => {
  if (err instanceof CustomError) {
    return res.status(err.status).json({
      message: err.message,
    });
  }
  return res.status(500).json({
    message: err.message,
  });
};

export class CustomError extends Error {
  constructor(message, code) {
    super(message);
    this.status = code;
  }
}

export class FileNotError extends CustomError {
  constructor(message) {
    super(message, 404);
  }
}
