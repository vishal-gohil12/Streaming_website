const express = require('express');
const routes = express.Router();

routes.get("/video-stream", (req, res) => {
    res.send("Hello world");
});

module.exports = routes;
