const http = require('http');

// Create a server
const server = http.createServer((req, res) => {
  console.log("Munnu kumar");
  
  res.end('Munnu kumar');
});

// Listen on port 4000
server.listen(4000, () => {
  console.log('Server is running on port 4000');
});
