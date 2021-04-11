const mysql = require('mysql2');

//connect server to MYSQL
const db = mysql.createConnection(
    {
        host: 'localhost',
        //username,
        user: 'root',
        //password
        password: 'F67h3Yp4578jK3',
        database: 'election'
    },
    console.log('Connected to the election database')
);

module.exports = db;