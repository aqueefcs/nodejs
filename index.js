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

// const process = require('process');
 
// const input = JSON.parse(process.argv[2])

// console.log('Input Recived: ',input.name)

const process = require('process');
  
// Printing process.argv property value
const input = process.argv[2]

console.log('Input Recived: ',input)


// const express = require('express')
// const app = express();

// app.use(express.json())

// app.get('/',(req,res)=>{
//     try{
//         res.json({message:"This is the home page"});
//     }catch(err){
//         console.log(err.message)
//     }
// })

// app.post("/api/input",(req,res)=>{
//     try{
//         const input = req.body;
//         if(input){

//             res.json({msg:'Input recieved successfully',data:input});
//         }else {
//             res.json({msg:"Input not recieved"})
//         }

//     }catch(err){
//         console.log(err.message);
//     }
// })

// app.listen(3000,()=>{
//     console.log("App is running...")
// })

