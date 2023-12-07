const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');


const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Password',
  database: 'Notes'
});


app.post('/notes', (req, res) => {
  const { title, content } = req.body;
  pool.query('INSERT INTO notes (title, content) VALUES (?, ?)', [title, content], (error, results) => {
    if (error) {
      return res.status(500).json({ error });
    } 
    res.status(201).json({ id: results.insertId });
  });
});

app.get('/notes', (req, res) => {
  pool.query('SELECT * FROM notes', (error, results) => {
    if (error) {
      return res.status(500).json({ error });
    }
    res.json(results);
  });
});

app.get('/notes/:id', (req, res) => {
  const { id } = req.params;
  pool.query('SELECT * FROM notes WHERE id = ?', [id], (error, results) => {
    if (error) {
      return res.status(500).json({ error });
    }
    res.json(results[0]);
  });
});

app.put('/notes/:id', (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  pool.query('UPDATE notes SET title = ?, content = ? WHERE id = ?', [title, content, id], (error, results) => {
    if (error) {
      return res.status(500).json({ error });
    }
    res.json({ message: "Note updated successfully" });
  });
});

app.delete('/notes/:id', (req, res) => {
  const { id } = req.params;
  pool.query('DELETE FROM notes WHERE id = ?', [id], (error, results) => {
    if (error) {
      return res.status(500).json({ error });
    }
    res.json({ message: "Note deleted successfully" });
  });
});

app.listen(PORT, (error) => {
  if (!error) {
    console.log("Server is Successfully Running, and App is listening on port " + PORT);
  } else {
    console.error("Error occurred, server can't start", error);
  }
});

