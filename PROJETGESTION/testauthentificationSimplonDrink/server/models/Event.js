const mongoose = require("mongoose");

const schema = mongoose.Schema({
    // _id:String,
	titre: String,
    contenu: String,  
    author:String,
    date:Date,
    imgUrl:String
   
})

module.exports = mongoose.model("Event", schema)