var mysql = require('mysql');

var con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root'
});

con.connect( function(err) {
    if(err) throw err;
    console.log('connected');
    con.query('CREATE DATABASE learningDatabase',function(err, result){
        if(err) throw err;
        console.log("DB created");
    });
});