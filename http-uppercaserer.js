const http = require('http');
const map = require('through2-map');

const PORT = process.argv[2];

const uppercase = map(str => str.toString().toUpperCase());

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    req.pipe(uppercase).pipe(res);
  }  else {
    res.end();
  }

});

server.listen(PORT);