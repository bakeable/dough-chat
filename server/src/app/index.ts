import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import mime from 'mime';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Set MIME types
app.use((req, res, next) => {
if (path.extname(req.path).toLowerCase() === '.ts') {
    res.type(mime.lookup('ts') || 'application/x-typescript');
}
next();
});

// Set the static directory
app.use(express.static(path.join(__dirname, '../../client')));

// Set the default route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/index.html'));
});

export default app