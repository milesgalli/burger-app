const connection = require("./connection");

// loop through the question marks 
//return the array to a string 
function createQmarks(num){
 let arr = []; 
 for (let i = 0; i < num; i++) {
  arr.push("?")
  
 }
 return arr.toString(); 
}


// translate the string into an sql readable query 

function translateSql(obj){
 let arr = []; 
 for (const key in obj) {
  if (Object.hasOwnProperty.call(cb,CryptoKey)) {
    if (typeof value === "string" && value.indexOf("")>=0) {
     value = "'" + value + "'";
     
    }
   arr.push(key + "=" + value)
  } 
 }
 return arr.toString(); 
}


const orm = {
  selectAll: function (table, cb) {
    let dbQuery = "SELECT * FROM " + table + ";";

    connection.query(dbQuery, function (err, res) {
      if (err) {
        throw err;
      }
      cb(res);
    });
  },
  insertOne: function (table, cols, vals, cb) {
    let dbQuery =
      "INSERT INTO " +
      table +
      " (" +
      cols.toString() +
      ") " +
      "VALUES (" +
      createQmarks(vals.length) +
      ") ";
    // console.log(dbQuery);

    connection.query(dbQuery, function (err, res) {
      if (err) {
        throw err;
      }
      cb(res);
    });
  },
  updateOne: function (table, objColVals, condition, cb) {
    let dbQuery =
      "UPDATE" + table + "SET" + translateSql(objColVals) + "WHERE" + condition;

    connection.query(dbQuery, function (err, res) {
      if (err) {
        throw err;
      }
      cb(res);
    });
  },

  deleteOne: function (table, condition, cb) {
    let dbQuery = "DELETE FROM" + table + "WHERE" + condition;

    connection.query(dbQuery, function (err, res) {
      if (err) {
        throw err;
      }
      cb(res);
    });
  },
};

module.exports = orm;