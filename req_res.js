const http = require('http');

const server = http.createServer((req, res) => {
  // Extract the URL path from the request
  const url = req.url;

  // Set the HTTP status code and content type header for HTML
  res.writeHead(200, {'Content-Type': 'text/html'});

  // Check the URL path and return custom HTML responses
  if (url === '/home') {
    res.end('<h1>Welcome home</h1>');
  } else if (url === '/about') {
    res.end('<h1>Welcome to About Us page</h1>');
  } else if (url === '/node') {
    res.end('<h1>Welcome to my Node Js project</h1>');
  } else {
    // Return a 404 response for unknown URLs
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.end('<h1>404 Not Found</h1>');
  }
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
