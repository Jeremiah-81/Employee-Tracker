const mysql = require('mysql2');


const connections = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: 'thepassword!',
      database: 'employee_db'
    },
  );
  connections.connect(function(err){
    if(err) throw err
  }) 
  module.exports = connections