const mysql = require('mysql');

// mysql database connection

const dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'college'

});

dbConn.connect(function(error){
    if(error) throw error;
    console.log('connected database!!');
})
// connection giving outside
module.exports = dbConn;
