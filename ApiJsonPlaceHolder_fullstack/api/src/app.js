const express = require("express");
/* const cors = require("cors"); */
let cors = require("cors");

const dotenv = require("dotenv");
const morgan = require("morgan");
var path = require("path");
//const cookieParser = require("cookie-parser");

dotenv.config();

const app = express();
/* app.use(cors()); */
app.use(cors());
app.use(morgan("dev"));
app.use(express.json()); //ya usa bodyparser por adentro

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

//rutas
const notices = require("./routes/Posts");
app.use("/posts", notices);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  // next(createError(404));
  res.send("Pagina no encontrada");
});

module.exports = app;
