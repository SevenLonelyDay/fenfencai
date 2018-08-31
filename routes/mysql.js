var mysql = require('mysql');
var connection = mysql.createConnection({
    host: '127.0.0.1:3306',
    user: 'admin',
    password: 'Zkq930913.',
    database: 'location'
});

module.exports = connection;