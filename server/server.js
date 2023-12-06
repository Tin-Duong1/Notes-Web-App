const express = require('express');
const app = express(); 
const PORT = 4000; 
  
app.listen(PORT, (error) => { 
    if(!error) 
        console.log("Server is Successfully Running, and App is listening on port "+ PORT) 
    else 
        console.log("Error occurred, server can't start", error); 
    } 
); 

// Database connection make sure to close when it ends 
const mysql = require('mysql2');
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'evandb'
});

pool.query('SELECT * FROM evandb.table1', (err,res)=>{
  if(err){
    return console.log('Failed uhhh.');
  }
  else {
    return console.log(res);
  }
});

pool.getConnection((error, connection) => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
  connection.release();
});