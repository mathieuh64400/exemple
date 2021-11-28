const express= require('express');
const mongoose =require('mongoose');
const createError =require('http-errors');
const port =3555;
const cities= require('./routes/cities.route');
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
mongoose.connect("mongodb+srv://Projetelectron:ProjetElectron@cluster0.9kmgd.mongodb.net/test",{
    useNewUrlParser:true,
    // useCreateIndex:true
}).then(()=>console.log('connectez a http://localhost:'+port)).catch(err=>{
    console.log( 'sys:'+err);
});

app.use("/api/cities",cities);
app.listen(port, () => console.log(`Server started at http://localhost:${process.env.PORT}`));