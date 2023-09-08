const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'database-1.cpmeoluhtdcm.ap-northeast-2.rds.amazonaws.com',
    user: 'admin',
    password: '11111111',
    database: 'reservation_list',
    port: '3306',
    dateStrings: 'date',
});

connection.connect();

module.exports = connection;