const process = require('process');
require('dotenv/config')

const jsonPayload = process.argv[2]
console.log("jp: ",jsonPayload)
// const jsonPayload = JSON.parse(process.env.payload)
// console.log("name: ", jsonPayload);
// console.log("name: ", typeof(jsonPayload));

