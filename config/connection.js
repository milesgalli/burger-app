const mysql = require("mysql"); 

connection = mysql.createConnection({
 host: "localhost", 
 user: "root", 
 password: "root", 
 database: "burgers_db",
 use_env_variable: "JAWSDB_URL",
  dialect: "mysql"

}
);

connection.connect(function(err) {
 if (err) {
   console.error("error connecting: " + err.stack);
   return;
 }
 console.log("connected as id " + connection.threadId);
});

module.exports = connection;
