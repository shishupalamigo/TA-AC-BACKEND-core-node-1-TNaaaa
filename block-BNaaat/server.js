const http = require('http');
const fs = require('fs');

const server = http.createServer(handleRequest);

function handleRequest(req, res) {
    if (req.method === 'GET' && req.url === '/file') {
        res.setHeader('Content-Type', 'text/html');
        fs.readFile('./node.html', ((err, content) => {
            if(err) console.log(err);
            res.end(content);
          })           
        );
    }
     else if (req.method === 'GET' && req.url === '/stream') {
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream('./node.html').pipe(res); 
    } 
    else {
        res.end('Error 404 : Page Not Found!');
    }

}

server.listen(5555, () => {
    console.log('Listening on Port 5555!');
});