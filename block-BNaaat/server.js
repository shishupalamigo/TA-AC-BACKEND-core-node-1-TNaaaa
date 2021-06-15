const http = require('http');
const fs = require('fs');

const server = http.createServer(handleRequest);

function handleRequest(req, res) {

}

server.listen(5555, () => {
    console.log('Listening on Port 5555!');
});