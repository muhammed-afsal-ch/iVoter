var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var multer = require("multer");
var fs = require("fs");
var cors = require("cors");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var adminRouter = require("./routes/admin");
var votesRouter = require("./routes/votes");

var app = express();
app.use(cors())


// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "profiles")));
app.use(express.static(path.join(__dirname, "symbols")));

app.use("/", indexRouter);
app.use("/api/users", usersRouter);
app.use("/api/2175/admin", adminRouter);
app.use("/api/2175/vote", votesRouter);

//voter profile upload
const Storage = multer.diskStorage({
  destination: "profiles",
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, `${file.originalname}.jpg`);
  },
});

const upload = multer({
  storage: Storage,
});

app.post("/api/2175/profile/", upload.single("profile"), (req, res) => {
  res.json({ VoterAddStatus: "ADDED_PHOTO_SUCCESSFULLY" });
});

//Candidate Logo upload
const CandidateLogoStorage = multer.diskStorage({
  destination: "symbols",
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, `${file.originalname}.jpg`);
  },
});

const uploadSymbol = multer({
  storage: CandidateLogoStorage,
});

app.post("/api/2175/symbol/", uploadSymbol.single("symbol"), (req, res) => {
  res.json({ CandidateAddStatus: "CANDIDATE_PHOTO_ADDED_SUCCESSFULLY" });
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
