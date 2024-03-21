const mysql = require("mysql");

const con = mysql.createConnection({
  host: "submit.cjyo4sauwchd.ap-south-1.rds.amazonaws.com",
  user: "root",
  password: "password",
  database: "Submit",
});

con.connect(function (error) {
  if (error) throw error;
  console.log("Connected to DB successfully");
});

module.exports = con;
