const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'Unit_Five'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to database successfully!');

    // Call the function to delete the table
    deleteTable('students2');
});

function deleteTable(tableName) {
    const dropTableQuery = `DROP TABLE IF EXISTS ${tableName}`;

    connection.query(dropTableQuery, (err, results) => {
        if (err) {
            console.error('Error deleting table:', err);
            return;
        }
        console.log(`Table '${tableName}' deleted successfully!`);

        // Close the connection after the operation
        connection.end();
    });
}
