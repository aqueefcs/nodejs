const process = require('process');
require('dotenv/config')
console.log("pay: ",process.argv[2]);
const jsonPayload = JSON.parse(process.argv[2])
console.log("jp: ",jsonPayload)
// const jsonPayload = JSON.parse(process.env.payload)
// console.log("name: ", jsonPayload);
// console.log("name: ", typeof(jsonPayload));

