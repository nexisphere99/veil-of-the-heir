const express = require('express');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();
const requestIp = require('request-ip');

const app = express();
const PORT = 5000;

// Initialize SQLite database
const db = new sqlite3.Database('./traffic.db', (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to SQLite database.');
    db.run(`
      CREATE TABLE IF NOT EXISTS traffic (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        ip TEXT,
        timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `, (err) => {
      if (err) {
        console.error('Error creating table:', err.message);
      }
    });
  }
});

// Middleware to log traffic details
app.use((req, res, next) => {
  const ip = requestIp.getClientIp(req); // Get client IP
  if (ip !== '::1' && ip !== '127.0.0.1' && ip !== '::ffff:127.0.0.1') { // Filter out localhost IPs
    db.run(`INSERT INTO traffic (ip) VALUES (?)`, [ip], (err) => {
      if (err) {
        console.error('Error logging traffic:', err.message);
      }
    });
  }
  next();
});

// Serve the entire project directory as static
app.use(express.static(path.join(__dirname)));

// Serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'veil-of-the-heir.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});