require('./config/config');
require('./models/db');
require('./config/passportConfig');
require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');

const rtsIndex = require('./routes/index.js');
const utilisateur= require('./routes/utilisateur');
const produit= require('./routes/produit');
const event= require('./routes/event.js');
const message= require('./routes/message');
const commandes= require('./routes/commandes');
var app = express();
const http = require('http').createServer(app);
// middleware
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());
app.use('/api', rtsIndex);
app.use('/api',utilisateur);
app.use('/api',produit);
app.use('/api',event);
app.use('/api',message);
app.use('/api',commandes);
// error handler
app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    } 
});

const io=require('socket.io')(http,{
    cors:{origin : '*'}
})
let userlist = new Map() //contient des paires clé-valeur et se souvient de l'ordre d'insertion d'origine des clés
/**
 * socket permettant de réaliser les echange
 */
io.on('connection',(socket)=>{ //initialisation des échanges
    let userName = socket.handshake.query.userName;//recupère le nom authorisé par handshake.query.
    addUser(userName, socket.id);

    socket.broadcast.emit('user-list', [...userlist.keys()]);//emition multiple sur les clés de userlist donc les noms;key()renvoie un nouvel objet Array Iterator qui contient les clés de chaque index du tableau.
    socket.emit('user-list', [...userlist.keys()]);//emition ciblé
    socket.on('message', (msg) => { //ecoute evt message
        socket.broadcast.emit('message-broadcast', {message: msg, userName: userName}); // ecoute event multiple de typemessage= messsage et username =username
    })

    socket.on('disconnect', (reason) => {
        removeUser(userName, socket.id);//deconnection avec suppression du joueur
    })
})
/**
 * fonction d'ajout d'utilisateur 
 */
function addUser(userName,id){ // Set()  permet de créer des Setobjets qui stockent des valeurs uniques de tout type, qu'il s'agisse de valeurs primitives ou de références d'objet.
    // ajout utlisateur
    if (!userlist.has(userName)){ //Si pas elt username alors méthode renvoie un booléen indiquant que  élément userlist avec la clé spécifiée n'existe pas.
        userlist.set(userName, new Set(id)) //création d'un objet avec valeur unique username et nouvel objet evc clé id
    } else {
        userlist.get(userName).add(id) // Si existe renvoie un élément (username) spécifié à partir d'un Mapobjet (userlist)
    }
}
/**
 * fonction de suppression des utilisateurs
 */
function removeUser(userName,id) { 
    if (userlist.has(userName)) {
        let userids=userlist.get(userName)
        if (userids.size ==0) {//userid est vide alors:pas de username 
           userlist.delete(userName) //supprime la propriété UserName de l'objet userlist
        }
    }
}
// start server
http.listen(process.env.PORT, () => console.log(`Server started at http://localhost:${process.env.PORT}`));