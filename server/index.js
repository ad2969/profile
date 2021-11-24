const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const requireDir = require("./utils/requireDir");
const authValidator = require("./utils/auth");
const controllers = requireDir("./controllers");
require("./services/firebase");

const app = express(); // create express app
const jsonParser = bodyParser.json(); // create json parser

// add api routes
app.post("/api/online_status", authValidator, jsonParser, controllers.online_status);

// add react app
app.use(express.static(path.join(__dirname, "..", "build")));
app.use((req, res) => {
    res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

// start express server on port 3000
app.listen(3000, () => {
    console.log("server started on port 3000");
});
