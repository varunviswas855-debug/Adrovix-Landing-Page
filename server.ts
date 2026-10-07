import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Health check endpoint
app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    service: 'ADROVIX Production Server',
  });
});

// Serve static assets from the 'dist' directory
const distPath = path.resolve(__dirname, 'dist');
app.use(
  express.static(distPath, {
    maxAge: '1y',
    immutable: true,
    setHeaders: (res, filePath) => {
      // Do not cache index.html so updates are immediate
      if (filePath.endsWith('index.html')) {
        res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
        res.setHeader('Pragma', 'no-cache');
        res.setHeader('Expires', '0');
      }
    },
  })
);

// Fallback to serve static public folder files if not yet in dist
const publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));

// SPA Catch-all: Route all other requests (including /terms, /privacy, /refund) to index.html
app.get('*', (_req, res) => {
  res.sendFile(path.join(distPath, 'index.html'), (err) => {
    if (err) {
      res.status(500).send('Error loading ADROVIX application');
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`ADROVIX production server listening on port ${PORT}`);
});

export default app;
