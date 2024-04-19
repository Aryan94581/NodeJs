const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root'
});

con.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL server');

    // Creating a new database
    con.query('CREATE DATABASE IF NOT EXISTS Unit_Five', (err, result) => {
        if (err) throw err;
        console.log('Database created successfully');
        // Close the connection
        con.end();
    });
});
