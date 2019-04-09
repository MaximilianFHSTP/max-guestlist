import * as IO from 'socket.io';
import * as IOClient from 'socket.io-client';

import * as os from 'os';

require('dotenv').config();

export class WebSocket
{
    private quizSocket: any;
    private database: any;
    private EXPIRATION_TIME = 1000 * 60;
    private clientSocket: any;
    private clientSocketId: any;

    constructor(server: any)
    {
        this.clientSocket = new IO(server);
        this.quizSocket = IOClient.connect(process.env.QUIZ_URL, { secure: true, reconnect: true, rejectUnauthorized : false });
        //console.log("socket.ts Constructor ",this.quizSocket);
        this.attachQuizListeners();
    }

    private attachQuizListeners(): void{

        this.clientSocket.on('connection', (socket) =>{
            socket.on('connectClient', () => {
                this.clientSocketId = socket.id;
                console.log('CLIENT SOCKET: ', this.clientSocketId);
            });
        });

        this.quizSocket.emit('connectGuestlist', { hello: 'world' });

        this.quizSocket.on('guestlist', (message) => {
            console.log(message);
        });

        this.quizSocket.on('getGuestlistData', (data) => {
            console.log('getGuestlistData', data.adel);
            console.log('getGuestlistData', data.buergertum);
            this.clientSocket.emit('displayData', data);
        });
    }

}