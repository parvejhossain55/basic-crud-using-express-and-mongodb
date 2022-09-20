const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const router = require("./src/routes/api");
const { host, database } = require("./src/config/db.config");

const app = express();

// middleware implement
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

// database connection
mongoose.connect(host + "/" + database, (err) => {
    if (err) {
        console.log("Database Connection Failed");
        console.log(err);
    } else {
        console.log("Database Successfully Connected");
    }
});

// Default Routing Handling
app.use("*", (req, res) => {
    res.status(404).json({
        message: "Page Not Found",
    });
});

module.exports = app;
