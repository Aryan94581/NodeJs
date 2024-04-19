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

    // Implementing SQL JOIN operation
    var sqlJoin = 'SELECT orders.order_id, orders.order_date, customers.customer_name FROM orders INNER JOIN customers ON orders.customer_id = customers.customer_id';
    con.query(sqlJoin, function (err, resultJoin) {
        if (err) throw err;
        console.log('Joined data:', resultJoin);

        // Close the connection
        con.end(function (err) {
            if (err) throw err;
            console.log('Connection closed');
        });
    });
});
