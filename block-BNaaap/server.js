const http = require('http');

const server = http.createServer(handleRequest);

function handleRequest(req, res) {
    console.log(req.method, req.headers, req.url);
    
    res.statusCode = 201;
    res.setHeaders = ('Content-Type', 'text/html');  
    res.end(`<h1>Hello from the Server Side</h1>`);
}
server.listen(4444, () => {
    console.log('Holla! Your server is up and Running');
});