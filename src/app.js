const express = require("express");
const router = require("./routers");

const app = express();
router(app);
module.exports = app;
