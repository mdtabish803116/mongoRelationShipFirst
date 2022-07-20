const {categoryModel} = require("../database/category");
async function getAllCategory(req , res , next){
    try{

        let categories = await categoryModel.find({});

        return res.status(201).send({
              message : "successful",
              categories
        })
         
    }catch(error){
       return res.status(404).send({
              error : "something went wrong"
        })
    }
}

module.exports = {
      getAllCategory
}