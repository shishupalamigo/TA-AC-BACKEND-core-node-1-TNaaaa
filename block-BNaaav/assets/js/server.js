const http = require('http');
const fs = require('fs');

const server = http.createServer(handleRequest);

function handleRequest(req, res) {
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    fs.createReadStream('../../index.html').pipe(res);
  }
  if (req.url === '/about') {
    fs.createReadStream('../../about.html').pipe(res);
  }
  if(req.url.split('.').pop() === 'css') {
    // set header for css file
    res.setHeader('Content-Type', 'text/css');
    // read css file and send it in response
    fs.readFile('./assets/stylesheets/style.css', (err, content) => {
      if(err) return console.log(err);
      res.end(content);
    })
  }

};

server.listen(3000, () => {
    console.log('Your Server is up and Running On port 3k');
});