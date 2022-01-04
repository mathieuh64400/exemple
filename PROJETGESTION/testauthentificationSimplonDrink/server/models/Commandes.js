const mongoose = require('mongoose');
const commandes = new mongoose.Schema({
    
    name: {type: String},
    nameprod: {type: String},
    imageUrl:{type: String},
    quantity: {type: Number},
    date: {type: Date}
})
const Commandes = mongoose.model('commandes', commandes); //List: name of collection inside database
module.exports = Commandes;