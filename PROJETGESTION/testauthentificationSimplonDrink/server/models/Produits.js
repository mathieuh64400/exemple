const mongoose =require('mongoose');
const produit=new mongoose.Schema({
    titre:{type:String},
    contenu:{type:String},
    name:{
        type:String,

        minlenght:3,
        maxlenght:50
    },
    description:{type:String},
    imageUrl:{
        type:String,
        
    },
    category:{
        type:String,
        minlenght:3,
        maxlenght:50
    },quantity:{
        type:Number,
        minlenght:3,
        maxlenght:10000
    }, description:{
        type:String,
        minlenght:30,
       
    },date:{
        type:Date,
        
    },
    etat:{
        type:String
    },NomConsommateur:{
        type:String,
        minlenght:30,
    }
})
const Produit = mongoose.model('produit',produit); //List: name of collection inside database
module.exports=Produit;