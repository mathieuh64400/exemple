const mongoose =require('mongoose');
const demande=new mongoose.Schema({
    Nom:{type:String},
    description:{type:String},
    pseudo:{type:String},
    date:{type:Date},
    type:{type:String},
    nature:{type:Boolean}
})
const Demande = mongoose.model('Demande',demande); //List: name of collection inside database
module.exports=Demande;