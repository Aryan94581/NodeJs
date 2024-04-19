var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'learningDatabase'
});

con.connect(function (err) {
    if (err) throw err;
    console.log('Connected');
    con.query("SELECT * FROM employees", function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});
