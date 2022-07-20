const mongoose = require('mongoose');


const blogSchema = new mongoose.Schema({
        title : String,
        body : String,
        categories : [{
                 type: mongoose.Types.ObjectId,
                 ref: 'categories'
        }]
},{
    timeStamps : true
})

const blogModel = mongoose.model("blogs" , blogSchema);

module.exports = {
      blogModel
}