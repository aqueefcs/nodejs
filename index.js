const express = require('express');

const app = express();

app.get("/",(req,res)=>{
    try{

        res.send("Jenkins Testing by Aqueef...");

    }catch(err){
        console.log(err.message);
    }
})

app.listen(3000,(req,res)=>{
    console.log("App is running on port:3000");
})