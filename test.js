const http = require('http');
const parse = require('urlencoded-body-parser')
 
const server = http.createServer((req, res) => {
  parse(req).then(data => {
    console.log(data)
    res.end();
  })
});

server.listen(8866)