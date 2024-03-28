var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root'
});

con.connect(function(err) {
    if (err) throw err;
    console.log('Connected');
    var sql = 'CREATE TABLE employees (id INT, name VARCHAR(255), age INT, city VARCHAR(255))';
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log('Table created');
    });
});