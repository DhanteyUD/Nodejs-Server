const http = require('http');
const url = require('url');
const fs = require('fs');
const PORT = 3000;

const server = http.createServer((req, res) => {
  var path = url.parse(req.url, true);
  var filename = '.' + path.pathname;

  fs.readFile(filename, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      return res.end('404 Not Found');
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    return res.end();
  });
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
