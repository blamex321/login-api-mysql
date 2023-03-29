const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'laxman',
    password: process.env.PASSWORD,
    database: 'testing'
});

connection.connect(function(err){
    if(err){
        console.log(err);
    } else {
        console.log('Connection Successful');
    }
});

module.exports = connection;