

require('dotenv/config')
const jsonPayload = process.env.payload
console.log("name: ", jsonPayload);
console.log("name: ", typeof(jsonPayload));

