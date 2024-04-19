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
    var sql = "DELETE FROM employees WHERE city = 'poornima University' ";
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log("Number of records deleted: " + result.affectedRows);
    });
});
