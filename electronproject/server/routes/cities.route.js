const express =require('express');
const router =express.Router();
const controller =require("../controllers/cities.controllers");

router.get("/",controller.getAllCities);

module.exports=router;