const http = require('http');
const url = require('url');

const server = http.createServer(handleRequest);

function handleRequest (req, res) {
    let parsedUrl = url.parse(req.url);
    let pathName = parsedUrl.pathname;
    if (req.method === 'GET' && pathName === '/') {
        res.setHeader('Content-Type', 'text/plain');
        res.end('Welcome to homepage');
    } else if (req.method === 'GET' && pathName === '/about') {
     res.writeHead(200, {'Content-Type': 'text/html'});
     res.end(`<h2>This is all about NodeJS</h2>`);   
    } else if (req.method === 'POST' && pathName === '/about') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(`{message: this is a post request}`);
        res.end();
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end(`<h2>Error 404 :Page Not found!</h2>`); 
    }
}

server.listen(5000, () => {
    console.log('localhost listening to port 5k');
});