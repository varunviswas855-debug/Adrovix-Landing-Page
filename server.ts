import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import fs from 'fs';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Health check endpoint
app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    service: 'ADROVIX Production Server',
  });
});

// Determine dist directory path (robust resolution)
let distPath = path.resolve(__dirname, 'dist');
if (!fs.existsSync(distPath)) {
  const cwdDist = path.resolve(process.cwd(), 'dist');
  if (fs.existsSync(cwdDist)) {
    distPath = cwdDist;
  }
}

// Serve dist directory with appropriate caching headers
app.use(
  express.static(distPath, {
    maxAge: '1y',
    immutable: true,
    setHeaders: (res, filePath) => {
      // index.html must not be cached aggressively
      if (filePath.endsWith('index.html')) {
        res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
        res.setHeader('Pragma', 'no-cache');
        res.setHeader('Expires', '0');
      }
    },
  })
);

// Fallback to public folder for static assets
const publicPath = path.resolve(__dirname, 'public');
if (fs.existsSync(publicPath)) {
  app.use(express.static(publicPath));
}

// Ensure missing static assets in /assets or with extensions return a 404, NOT index.html
app.use('/assets', (_req, res) => {
  res.status(404).type('text/plain').send('Asset not found');
});

// Catch-all for API endpoints
app.use('/api/*', (_req, res) => {
  res.status(404).json({ error: 'API route not found' });
});

// SPA Catch-all: Route all other requests (/terms, /privacy, /refund, etc.) to index.html
app.get('*', (req, res, next) => {
  // If the request contains a file extension (e.g. script.js, image.png), do not send HTML
  if (path.extname(req.path)) {
    return res.status(404).type('text/plain').send('File not found');
  }

  const indexPath = path.join(distPath, 'index.html');
  res.sendFile(indexPath, (err) => {
    if (err) {
      res.status(500).send('Error loading ADROVIX application');
    }
  });
});

app.listen(PORT, () => {
  console.log(`ADROVIX production server listening on port ${PORT}`);
});

export default app;
