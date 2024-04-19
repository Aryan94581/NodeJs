var mysql = require('mysql');
var readline = require('readline');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'learningDatabase'
});

con.connect(function(err) {
    if (err) throw err;
    console.log('Connected');
    
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Enter employee ID: ', function(id) {
        rl.question('Enter employee name: ', function(name) {
            rl.question('Enter employee age: ', function(age) {
                rl.question('Enter employee city: ', function(city) {
                    var sql = 'INSERT INTO employees (id, name, age, city) VALUES ?';
                    var values = [
                        [id, name, age, city]
                    ];
                    
                    con.query(sql, [values], function(err, result) {
                        if (err) throw err;
                        console.log('1 record inserted');
                        rl.close();
                        con.end();
                    });
                });
            });
        });
    });
});
