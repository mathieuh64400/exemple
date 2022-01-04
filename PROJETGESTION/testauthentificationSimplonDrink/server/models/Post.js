const mongoose =require('mongoose');
const post=new mongoose.Schema({
    title:{
        type:String,

        minlenght:3,
        maxlenght:50
    },
    body:{type:String},
    imgUrl:{
        type:String,
        
    },
    author:{
        type:String,
        minlenght:3,
        maxlenght:50
    },date:{
        type:Date,
        
    }
})
const Post = mongoose.model('Post',post); //List: name of collection inside database
module.exports=Post;