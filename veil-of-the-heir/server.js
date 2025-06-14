const express = require('express');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const PORT = 5000;

// Initialize SQLite database
const db = new sqlite3.Database(path.join(__dirname, 'traffic.db'), (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to SQLite database.');
    db.run(
      `CREATE TABLE IF NOT EXISTS traffic (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        timestamp TEXT NOT NULL,
        ip_address TEXT NOT NULL
      )`,
      (err) => {
        if (err) {
          console.error('Error creating table:', err.message);
        }
      }
    );
  }
});

// Middleware to log traffic data
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  const ipAddress = req.ip;

  db.run(
    `INSERT INTO traffic (timestamp, ip_address) VALUES (?, ?)`,
    [timestamp, ipAddress],
    (err) => {
      if (err) {
        console.error('Error inserting traffic data:', err.message);
      }
    }
  );

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