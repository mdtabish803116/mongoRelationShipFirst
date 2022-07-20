const express = require('express');
const categoryRouter = express.Router();
const {getAllCategory} = require("../handlers/category");

categoryRouter.get("/categories" , getAllCategory);


module.exports = {
     categoryRouter
}