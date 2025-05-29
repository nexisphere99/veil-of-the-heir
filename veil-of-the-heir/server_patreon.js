const express = require('express');
const path = require('path');

const app = express();
const PORT = 5002;

// Middleware: Allow only users coming from Patreon for non-static file requests
app.use((req, res, next) => {
  const referer = req.get('Referer') || '';

  // Allow static files to be served without checking Referer
  if (req.url.startsWith('/static/') || req.url.match(/\.(css|js|png|jpg|jpeg|gif|svg)$/)) {
    return next();
  }

  // Allow if referer contains "patreon.com"
  if (referer.includes('patreon.com')) {
    return next();
  }

  // Deny otherwise
  return res.status(403).send('Access denied. Please access this game via a link from Patreon.');
});

// Serve static files (CSS, JS, assets, etc.)
app.use(express.static(path.join(__dirname)));

// Serve the main HTML game file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'veil-of-the-heir-patreon.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});