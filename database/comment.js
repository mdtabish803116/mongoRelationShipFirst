const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
      message : String,
      rating : Number,
      blog : {
        type: mongoose.Types.ObjectId,
        ref: 'blogs'
      },
      user: {
        type: mongoose.Types.ObjectId,
        ref: 'users'
      }
} , {
     timeStamps : true
})

const commentModel = mongoose.model("comments" , commentSchema);


module.exports = {
      commentModel
}