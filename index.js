const express = require("express");
const cors = require("cors");
const {connectDatabase} = require("./database/index");
const {blogRouter} = require("./routes/blog");
const {categoryRouter} = require("./routes/category")
const app = express();
app.use(cors());
app.use(express.json());
app.use(logger);
app.use(blogRouter);
app.use(categoryRouter);

function logger(req , res , next){
      console.log(new Date() , req.method , req.path);
      next()
}
connectDatabase().then(() => {
      app.listen("4001" , () => {
          console.log("server is listening at http://localhost:4001")
      })
})









