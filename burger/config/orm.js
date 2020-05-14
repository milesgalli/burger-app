const connection = require("../config/connection");

const orm = {
  selectAll: function (table, cb) {
    const dbQuery = "SELECT * FROM " + table + ";";

    connection.query(dbQuery, function (err, res) {
      if (err) {
        throw err;
      }
      cb(res);
    });
  },
};
