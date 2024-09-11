const express = require("express");
const usuarios = require("./router");

module.exports = app => {
    app.use(
        express.json(),
        usuarios
    )
}



