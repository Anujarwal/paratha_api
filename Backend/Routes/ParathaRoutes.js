const express = require("express");
const { getParatha } = require("../Controller/ParathaController");


const routes = express.Router()


routes.get("/paratha" , getParatha )


module.exports = routes;