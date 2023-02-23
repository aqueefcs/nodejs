

require('dotenv/config')
const jsonPayload = JSON.parse(process.env.payload)
console.log("name: ", jsonPayload.month);
console.log("name: ", typeof(jsonPayload));

