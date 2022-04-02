const hpp = require("hpp");
const xss = require("xss-clean");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const fileUpload = require("express-fileupload");
const mongooseSanitize = require("express-mongo-sanitize");
const cors = require("cors");
const express = require("express");
const appCors = require("../cors/cors");

const app = [
  express.static("client/build"),
  cookieParser(),
  cors(appCors),
  hpp(),
  xss(),
  helmet(),
  fileUpload(),
  mongooseSanitize(),
];

module.exports = app;
