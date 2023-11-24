import express from 'express';
import { Server as SocketIOServer } from 'socket.io';
import http from 'http';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const server = http.createServer(app);
const io = new SocketIOServer(server);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/client.html'));
});

io.on('connection', (socket: any) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(3000, () => {
  console.log('Listening on https://localhost:3000');
});