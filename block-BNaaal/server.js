const http = require('http');

let server = http.createServer((req,  res) => {
    console.log(req, res);
    res.end('Welcome to My Local Server');
});

server.listen(4000, 'localhost', () => {
    console.log('Listening at port 4000');
});