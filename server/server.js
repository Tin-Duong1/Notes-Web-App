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
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'yourUsername',
  password: 'yourPassword',
  database: 'yourDatabaseName'
});

connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});
