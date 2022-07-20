const {blogModel} = require("../database/blog");
async function getAllBlog(req , res , next){
    try{

        let blogs = await blogModel.find({}).populate(categories);

        return res.status(201).send({
              message : "successful",
              blogs
        })
         
    }catch(error){
       return res.status(404).send({
              error : "something went wrong"
        })
    }
}

module.exports = {
      getAllBlog
}