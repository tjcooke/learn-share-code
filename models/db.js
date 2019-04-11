const pgp = require('pg-promise')({
    query: e => {
    console.log(e);
    }
});

const options = {
    host: process.env.DB_HOST,
    database: process.env.DB_NAME
};
const db = pgp(options);
console.log(process.env.DB_HOST)
console.log(process.env.DB_NAME)


module.exports = db;
