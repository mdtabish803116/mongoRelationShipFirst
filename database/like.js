const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema({
      emoji : String,
      blog: {
        type: mongoose.Types.ObjectId,
        ref: "blogs"
      },
      user: {
        type: mongoose.Types.ObjectId,
        ref: "users"
      }
} , {
      timeStamps : true
})

const likeModel = mongoose.Model("likes" , likeSchema);

module.exports = {
      likeModel
}