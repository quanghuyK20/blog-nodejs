const path = require("path");
const express = require("express");
const app = express();
const hbs = require("express-handlebars");
const morgan = require("morgan");
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));
console.log(__dirname);
//HTTP logger
app.use(morgan("combined"));

//template engine
app.engine(
  "hbs",
  hbs.engine({
    extname: ".hbs",
  })
);

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "./resources/views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/news", (req, res) => {
  res.render("news");
});

app.listen(port);
