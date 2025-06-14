const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 5000;

// Middleware to log external traffic details
app.use((req, res, next) => {
  const localIPs = ['127.0.0.1', '::1', '::ffff:127.0.0.1'];
  if (!localIPs.includes(req.ip)) {
    const logEntry = `${new Date().toISOString()} - ${req.method} ${req.url} - ${req.ip}\n`;
    fs.appendFile('server-traffic.log', logEntry, (err) => {
      if (err) {
        console.error('Failed to write to log file:', err);
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