var mysql = require('mysql');

var con = mysql.createConnection({
  host: "db4free.net",
  user: "bancoxyz",
  password: "wilmerd1"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
