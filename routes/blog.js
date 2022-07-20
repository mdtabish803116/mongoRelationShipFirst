const express = require('express');
const blogRouter = express.Router();
const {getAllBlog , createBlog} = require("../handlers/blog");

blogRouter.get("/blogs" , getAllBlog);
blogRouter.post("/blog" , createBlog);

module.exports = {
      blogRouter
}