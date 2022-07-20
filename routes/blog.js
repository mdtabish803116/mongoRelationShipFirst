const express = require('express');
const blogRouter = express.Router();
const {getAllBlog} = require("../handlers/blog");

blogRouter.get("/blogs" , getAllBlog);

module.exports = {
      blogRouter
}