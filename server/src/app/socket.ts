
import { Server as SocketIOServer } from 'socket.io';


// Create Socket IO Server
export const useSocketIOServer = (server: any) => {
    const io = new SocketIOServer(server);
    io.on('connection', (socket: any) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
    });
}

