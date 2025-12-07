const {Pool} = require('pg')
const db = new Pool({
    //json object, so the program will be doing destructuring for us, later we will crete pool object
    connectionString: process.env.DB_URL,

})

module.exports = db