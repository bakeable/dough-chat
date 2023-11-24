import app from './app/index.js';
import http from 'http';
import { useSocketIOServer } from './app/socket.js';

// Create server
const server = http.createServer(app);

// Use Socket IO Server
useSocketIOServer(server);

// Start server
server.listen(3000, () => {
  console.log('Listening on https://localhost:3000');
});