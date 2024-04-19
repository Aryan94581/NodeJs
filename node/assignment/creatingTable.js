const mysql = require('mysql');

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
    createTablesAndInsertData();
});

function createTablesAndInsertData() {
    const createStudents1TableQuery = `
        CREATE TABLE IF NOT EXISTS students1 (
            std_id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255),
            age INT,
            email VARCHAR(255),
            course VARCHAR(255),
            gender VARCHAR(255)
        )
    `;

    const createStudents2TableQuery = `
        CREATE TABLE IF NOT EXISTS students2 (
            std_id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255),
            age INT,
            email VARCHAR(255),
            course VARCHAR(255),
            gender VARCHAR(255)
        )
    `;

    const insertStudents1Query = `
        INSERT INTO students1 (name, age, email, course, gender) VALUES
        ('Nitin', 20, 'nitin@example.com', 'Btech', 'Male'),
        ('Aryan', 18, 'aryan@example.com', 'BCA', 'Male'),
        ('Isha', 19, 'isha@example.com', 'BCA', 'Female'),
        ('Muskan', 19, 'muskan@example.com', 'BCA', 'Female'),
        ('Nilesh', 20, 'nilesh@example.com', 'Btech', 'Male')
    `;

    const insertStudents2Query = `
        INSERT INTO students2 (name, age, email, course, gender) VALUES
        ('Amit', 20, 'Amit@example.com', 'MBA', 'Male'),
        ('Nikhil',19, 'Nik@example.com', 'Mtech', 'Male'),
        ('Fareed', 18, 'fareed@example.com', 'BBA', 'Male'),
        ('Nik',19, 'Nikhil@example.com', 'Mtech', 'Male'),
        ('Kriti', 19, 'Kriti@example.com', 'BCA', 'Female')
    `;

    connection.query(createStudents1TableQuery, (err) => {
        if (err) {
            console.error('Error creating students1 table:', err);
            return;
        }
        console.log('students1 table created successfully!');

        connection.query(insertStudents1Query, (err) => {
            if (err) {
                console.error('Error inserting data into students1 table:', err);
                return;
            }
            console.log('Sample data inserted into students1 table!');
            createStudents2Table();
        });
    });

    function createStudents2Table() {
        connection.query(createStudents2TableQuery, (err) => {
            if (err) {
                console.error('Error creating students2 table:', err);
                return;
            }
            console.log('students2 table created successfully!');

            connection.query(insertStudents2Query, (err) => {
                if (err) {
                    console.error('Error inserting data into students2 table:', err);
                    return;
                }
                console.log('Sample data inserted into students2 table!');
                connection.end(); // Close the connection after all operations
            });
        });
    }
}
