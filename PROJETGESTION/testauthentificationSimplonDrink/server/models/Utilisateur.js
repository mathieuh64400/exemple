const mongoose = require('mongoose');
const utilisateur = new mongoose.Schema({
    nom: {
        type: String,

        minlenght: 3,
        maxlenght: 50
    },
    prenom: {
        type: String
    },
    pseudo: {
        type: String,

    },
    preference: {
        type: String,
        minlenght: 3,
        maxlenght: 50
    },
    promotion: {
        type: String,
        minlenght: 3,
        maxlenght: 10000
    },
    email: {
        type: String,
        minlenght: 30
    },
    lieu: {
        type: String
    },
    img:{type:String}
})
const Utilisateur = mongoose.model('utilisateur', utilisateur); //List: name of collection inside database
module.exports = Utilisateur;