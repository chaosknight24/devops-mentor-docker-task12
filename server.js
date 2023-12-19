const http = require('http');

const hostname = '0.0.0.0';
const port = process.env.SERVER_PORT || 3000;
const envname = process.env.ENV_NAME || 'test';


const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`Hello, this is your Node.js web server! And your environment is ${envname}\n`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
