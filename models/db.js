const pgp = require('pg-promise')({
    query: e => {
        console.log(e)
    }

})

const option = {
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,

}

const db = pgp(option)

module.exports = db;