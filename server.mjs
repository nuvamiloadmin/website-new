import express from 'express';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import fs from 'node:fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3005;

// Explicit download handler for mobile APK packages
app.get('/downloads/:filename', (req, res, next) => {
  const safeFilename = req.params.filename.replace(/[^a-zA-Z0-9._-]/g, '');
  const filePath = join(__dirname, 'dist', 'downloads', safeFilename);
  if (fs.existsSync(filePath)) {
    res.setHeader('Content-Type', 'application/vnd.android.package-archive');
    return res.download(filePath, safeFilename);
  }
  next();
});

// Download hub redirect
app.get('/download', (req, res) => {
  res.redirect(301, 'https://product.nuvamilo.in/download');
});

// Favicon handler
app.get('/favicon.ico', (req, res, next) => {
  const iconPath = join(__dirname, 'dist', 'favicon.ico');
  if (fs.existsSync(iconPath)) {
    res.setHeader('Content-Type', 'image/x-icon');
    return res.sendFile(iconPath);
  }
  next();
});

app.use(express.static(join(__dirname, 'dist')));
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, '127.0.0.1', () => {
  console.log(`NUVAMILO Public Website listening on http://127.0.0.1:${PORT}`);
});
