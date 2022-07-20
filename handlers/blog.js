const {blogModel} = require("../database/blog");
async function getAllBlog(req , res , next){
    try{

        let blogs = await blogModel.find({});

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

async function createBlog(req , res , next){
     const {blog} = req.body
     console.log(blog);
      try{

         let blogData = await blogModel.create(blog)
         let data = await blogModel.findById(blogData._id).populate("categories");
         console.log(data);

         res.status(200).send({
               message : "Blog Created Successfully",
               blog : data
         })

      }catch(error){
           res.status(404).send({
              error : "something went wrong"
           })
      }
}

module.exports = {
      getAllBlog,
      createBlog
}