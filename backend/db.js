const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Zhomphilies.24',
  database: 'selflearning'
});

connection.connect((err) => {
  if (err) {
    console.error('Error to connect: ' + err.stack);
    return;
  }
  console.log('Success to connect');
});

module.exports = connection;