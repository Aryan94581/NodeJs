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
    var sql = 'UPDATE employees SET city = "poornima university" WHERE city = "Allahabad"';
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log(result.affectedRows + " record(s) updated");
    });
});
