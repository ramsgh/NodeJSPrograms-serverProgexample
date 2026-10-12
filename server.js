const http = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

// Create an HTTP server instance
const server = http.createServer((req, res) => {
    // Set response headers and status code
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    
    // Send the final response body
    res.end('Hello, World! You have reached the Node.js native server.\n');
});

// Start listening for traffic
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
