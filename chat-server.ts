import { createServer, Server} from 'http';
import * as express from 'express';
import * as socket from 'socket.io';

export class ChatServer {
    public static readonly PORT:number = 5000;
    private app: express.Application;
    private port: string | number;
    private server: Server;
    private io: SocketIO.Server;

    constructor() {
        this.createApp();
        this.config();
        this.createServer();
        this.sockets();
        this.listen();
    }

    private createApp(): void {
        this.app = express();
        this.app.use(express.static('vc'));
    }

    private config(): void {
        this.port = process.env.PORT || ChatServer.PORT;
    }

    private createServer(): void {
        this.server = createServer(this.app);
    }

    private sockets(): void {
        this.io = socket(this.server);
    }

    private listen(): void {
        this.server.listen(this.port, () => {
            console.log("Running server on port %s", this.port);
        });
        this.io.on('connection', (socket) => {
            socket.broadcast.emit('add-users', {
                users: [socket.id]
            });
        });
    }

    public getApp(): express.Application {
        return this.app;
    }
}