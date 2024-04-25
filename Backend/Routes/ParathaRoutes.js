const express = require("express");
const {
  getParatha,
  getPizza,
  getBurger,
  getDrink,
} = require("../Controller/ParathaController");

const routes = express.Router();

routes.get("/paratha", getParatha);

routes.get("/pizza", getPizza);
routes.get("/burger", getBurger);
routes.get("/drink", getDrink);

module.exports = routes;
