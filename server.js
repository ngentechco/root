const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.SERVICE_PORT || 8007;
const SERVICE_NAME = process.env.SERVICE_NAME || 'root';

const MIME_TYPES = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  // Health check endpoint
  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'healthy', service: SERVICE_NAME }));
    return;
  }

  // Serve static files from src directory
  let filePath = path.join(__dirname, 'src', req.url === '/' ? 'index.html' : req.url);
  
  // Default to index.html for any unknown routes (SPA support)
  if (!fs.existsSync(filePath)) {
    filePath = path.join(__dirname, 'src', 'index.html');
  }

  const ext = path.extname(filePath);
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // Fallback to index.html
        fs.readFile(path.join(__dirname, 'src', 'index.html'), (err, content) => {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(content, 'utf-8');
        });
      } else {
        res.writeHead(500);
        res.end('Server Error');
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(PORT, () => {
  console.log(`🚀 ${SERVICE_NAME} server running on port ${PORT}`);
  console.log(`📋 Health check: http://localhost:${PORT}/health`);
});
