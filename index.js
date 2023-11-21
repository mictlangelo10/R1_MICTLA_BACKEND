const express = require("express");
const cors = require("cors");
const registrosRouter = require("./controllers/registrosController");
const connection = require("./connection");

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(registrosRouter);
module.exports = app;
