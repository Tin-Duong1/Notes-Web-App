const express = require('express');
const app = express(); 
const PORT = 4000; 

app.listen(PORT, (error) => { 
    if (!error) 
        console.log("Server is Successfully Running, and App is listening on port " + PORT); 
    else 
        console.log("Error occurred, server can't start", error); 
});

const mysql = require('mysql2');
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'evandb'
});

pool.getConnection((error, connection) => {
  if (error) {
    console.error("Error connecting to the database", error);
    return;
  }

  console.log("Successfully connected to the database.");

  connection.query('SELECT * FROM evandb.table1', (err, res) => {
    if (err) {
      console.error('Failed to execute query', err);
    } else {
      console.log(res);
    }
  });

  connection.release();
});
