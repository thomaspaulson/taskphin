import { User } from "../models/user.js";
import { FileNotError } from "../utils/error.js";

export class AuthService {
  constructor() {
    this.model = User;
  }

  create(req) {
    const { name, email, password } = req.body;

    return this.model.create({
      name,
      email,
      password,
    });
  }

  async login({ body, session }) {
    const { email, password } = body;
    const user = await this.model.findOne({ where: { email, password } });
    if (user) {
      session.loggedin = true;
      session.name = user.name;
    }
    return user;
  }

  logout({ session }) {
    if (session.loggedin) {
      session.destroy();
      // session.loggedin = false;
      // delete session.name;
    }
  }
}
