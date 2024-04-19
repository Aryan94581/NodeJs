var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'learningDatabase'
});

con.connect(function(err) {
    if (err) throw err;
    console.log('Connected');
    var sql = 'INSERT INTO employees (id, name, age,  city) VALUES ?';
    var values = [
        ["2", "Aman", "35", "Allahabad"],
        ["3", "Nitin", "47", "jaipur"],
        ["4", "Aryan", "17", "Hanumangarh"]
    ];
    
    con.query(sql, [values], function(err, result) {
        if (err) throw err;
        console.log('1 record inserted');
    });
});