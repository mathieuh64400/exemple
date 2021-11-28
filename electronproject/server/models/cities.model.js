const mongoose = require("mongoose");
const villeSchema = new mongoose.Schema({
    name:{
        type:String
    },
    Humidity:{type:Number},
    temperature:{type:Number}
})
module.exports.Ville=mongoose.model("Ville",villeSchema)