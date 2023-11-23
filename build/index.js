import express from 'express';
import { Server as SocketIOServer } from 'socket.io';
import http from 'http';
const app = express();
const server = http.createServer(app);
const io = new SocketIOServer(server);
app.get('/', (req, res) => {
    res.send('Hello World!');
});
io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});
server.listen(3000, () => {
    console.log('listening on *:3000');
});
