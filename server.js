const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

//Express middle ware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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

//GET a single candidate
db.query(`SELECT * FROM candidates WHERE id = 1`, (err, row) => {
    if (err) {
        console.log(err);
    } 
    console.log(row);
});

//delete a candidate
/* db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result) => {
    if (err) {
        console.log(err);
    }
    console.log(result);
}); */

//Create a candidate
const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected)
                VALUES (?,?,?,?)`;
const params = [1, 'Ronald', 'Firbank', 1];

db.query(sql, params, (err, result) => {
    if (err) {
        console.log(err);
    }
    console.log(result);
});

/* db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
}); */

//Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});