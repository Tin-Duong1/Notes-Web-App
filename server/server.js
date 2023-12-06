const express = require('express');
const mysql = require('mysql2');

const app = express();
const PORT = 4000;

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Password', 
  database: 'Notes'     
});

app.get('/', (req, res) => {
  pool.query('SELECT * FROM Notes', (err, results) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).send('Error fetching notes');
    }

    const notesHtml = results.map(note => `<p><b>${note.title}</b>: ${note.content}</p>`).join('');
    res.send(notesHtml);
  });
});

app.listen(PORT, (error) => {
  if (!error) {
    console.log("Server is Successfully Running, and App is listening on port " + PORT);
  } else {
    console.error("Error occurred, server can't start", error);
  }
});

