const mongoose = require('mongoose');

async function connectDatabase(){
      const dburi = "mongodb://127.0.0.1:27017/blogData";

      try{

        let res = await mongoose.connect(dburi)
        console.log("Connected")

      }catch(err){
         console.log("not connected")
      }
}


module.exports = {
      connectDatabase
}