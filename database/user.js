const mongoose = require("mongoose");


const socialSchema = new mongoose.Schema({
    linkedIn: String,
    facebook: String,
    Twiter:Styring,
    Github:String,
    Instagram : String
})

const addressSchema = new mongoose.Schema({
        Line1: String,
        City: String,
        State: String,
        PinCode:Number  
})

const userSchema = new mongoose.Schema({
        name : {
              type : String,
              required : true
        },
        email : {
              type : String,
              required : true
        },
        password : {
               required : true,
               selection : false
        },
        image : String,
        social_profile : {
              type : socialSchema
        },
        Addresses: [{
              type : addressSchema,
        }],
        blogs : [
            {
                type: mongoose.Types.ObjectId,
                ref: "blogs"
            }
        ]             
   },
   {
      timeStamps : true
})

const userModel = mongoose.model("users" , userSchema);

module.exports = {
      userModel
}