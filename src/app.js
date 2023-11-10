import express from "express";
import homeRoute from "./routes/index.js";
import config from "./config/keys.js";
import movieRoute from "./routes/movie.js";
import authRoute from "./routes/auth.js";
import { sequelize } from "./config/database.js";
import { getCurrentWorkingFolder } from "./utils/helpers.js";
import expressEjsLayouts from "express-ejs-layouts";
import path from "path";
import { logErrors } from "./controllers/error.js";
import session from "express-session";
import connectFlash from "connect-flash";
import methodOverride from "method-override";
import { isLoggedIn } from "./middleware/loggedin.js";

//
try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

const app = express();
const port = process.env.port || 5000;

app.use(express.static("public"));

const dirname = getCurrentWorkingFolder(import.meta.url);

app.set("views", path.join(dirname, "views"));
app.set("view engine", "ejs");
app.use(expressEjsLayouts);

app.use(
  methodOverride("_method", {
    methods: ["POST", "GET"],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "keyboard",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(connectFlash());

app.use((req, res, next) => {
  res.locals.flashMessages = req.flash();
  next();
});

// app.use("/", homeRoute);
app.use("/movies", isLoggedIn, movieRoute);
app.use("/auth", authRoute);

app.get("/", isLoggedIn, function (req, res) {
  res.locals = {
    title: "Example",
    message: "This is a message",
  };
  res.render("index");
});

app.use(logErrors);

app.listen(port);
