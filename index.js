

require('dotenv/config')
const jsonPayload = JSON.parse(process.env.payload)
console.log("name: ", jsonPayload);
console.log("name: ", typeof(jsonPayload));

