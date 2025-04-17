const http = require('http');

const server = http.createServer((req, res) => {
  res.end("Hello from Node.js via Jenkins!");
});

server.listen(3002, () => {
  console.log("Server is running on http://localhost:3002");
});
