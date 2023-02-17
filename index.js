// const express = require('express');

// const app = express();

// app.get("/",(req,res)=>{
//     try{

//         res.send("Jenkins Testing by Aqueef...");
//         console.log("Running in Jenkins")

//     }catch(err){
//         console.log(err.message);
//     }
// })

// app.listen(3000,(req,res)=>{
//     console.log("App is running on port:3000");
// })

const process = require('process');
  
// Printing process.argv property value
const input = process.argv[2]

console.log('Input Recived: ',input)

