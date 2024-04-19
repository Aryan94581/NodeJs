const readline = require('readline');
const mysql = require('mysql');
const { log } = require('console');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'unit_Five'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to database successfully!');
    Choice();
});

function tables() {
    const tableNames = ['students1', 'students2'];

    tableNames.forEach(tableName => {
        // Fetch data from the table
        connection.query(`SELECT * FROM ${tableName}`, (err, tableResults) => {
            if (err) {
                console.error(`Error retrieving data from ${tableName}:`, err);
                return;
            }
            if (tableResults) {
                console.log(`Table: ${tableName}`);
                console.table(tableResults);
            } else {
                console.log(`No data found in ${tableName}`);
            }

            if (tableName === tableNames[tableNames.length - 1]) {
                // This is the last table, go back to the main menu
                Choice();
            }
        });
    });
}



function Join() {
    rl.question('Which Attribute You want ?, Enter with table name (ex: students1.name) (with comma separated):', (Attribute) => {
        rl.question('Which Join You want to perform INNER/RIGHT/LEFT?:', (JoinChoice) => {
            const query = `
                SELECT ${Attribute}
                FROM students1
                ${JoinChoice} JOIN students2 ON students1.std_id = students2.std_id;
            `;
            connection.query(query, (err, results) => {
                if (err) {
                    console.error('Error executing query:', err);
                } else {
                    console.table(results);
                }
                Choice(); // Go back to the main menu
            });
        });
    });
}

function SORT() {
    rl.question('Which Attribute You want to sort with table name (ex: students1.name):', (attribute) => {
        rl.question('Enter ORDER BY (ASC/DESC):', (order) => {
            const query = `
                SELECT *
                FROM students1
                INNER JOIN students2 ON students1.std_id = students2.std_id
                ORDER BY ${attribute} ${order};
            `;
            connection.query(query, (err, results) => {
                if (err) {
                    console.error('Error executing query:', err);
                } else {
                    console.table(results);
                }
                Choice(); // Go back to the main menu
            });
        });
    });
}

function Filter() {
    rl.question('Which Attribute You want with table name (ex: students1.name) (with comma separated):', (Attribute) => {
        rl.question('Enter Condition:', (condition) => {
            const query = `
                SELECT ${Attribute}
                FROM students1
                INNER JOIN students2 ON students1.std_id = students2.std_id
                WHERE ${condition};
            `;
            connection.query(query, (err, results) => {
                if (err) {
                    console.error('Error executing query:', err);
                } else {
                    console.table(results);
                }
                Choice(); // Go back to the main menu
            });
        });
    });
}

function GroupBy() {
    rl.question('Which Attribute You want?, Enter name with table-Name:', (Attribute) => {
        rl.question('Perform Aggregate Function:', (Groupmethod) => {
            rl.question('Enter AS new name:', (newName) => {
                const query = `
                    SELECT ${Attribute}, ${Groupmethod} AS ${newName}
                    FROM students1
                    INNER JOIN students2 ON students1.std_id = students2.std_id
                    GROUP BY ${Attribute};
                `;
                connection.query(query, (err, result) => {
                    if (err) {
                        console.error('Error executing query:', err);
                    } else {
                        console.table(result);
                    }
                    Choice(); // Go back to the main menu
                });
            });
        });
    });
}

function Choice() {
    rl.question('1.JOIN\n2.SORT\n3.Filter\n4.Group By\n5.Show Tables\nEnter Your Choice:', (choice) => {
        switch (choice) {
            case '1':
                Join();
                break;
            case '2':
                SORT();
                break;
            case '3':
                Filter();
                break;
            case '4':
                GroupBy();
                break;
            case '5':
                tables();
                break;
            default:
                console.log('Invalid Choice!')
                Choice();
        }
    });
}
