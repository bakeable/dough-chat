import { Server as SocketIOServer } from 'socket.io';
// Create Socket IO Server
export const useSocketIOServer = (server) => {
    const io = new SocketIOServer(server);
    io.on('connection', (socket) => {
        console.log('a user connected');
        socket.on('disconnect', () => {
            console.log('user disconnected');
        });
    });
};
