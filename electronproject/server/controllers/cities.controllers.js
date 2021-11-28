const mongoose =require('mongoose');
const {Ville}=require('../models/cities.model');
module.exports.getAllCities=async(req,res)=>{
    let ville=await Ville.find({});
    return res.send(ville);
}