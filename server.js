var http = require('http');
      fs = require('fs');
var server = http.createServer();
var settings = require('./settings');
var msg;
console.log(settings)
server.on('request', function(req, res){
  switch (req.url) {
    case '/hello':
      fs.readFile(__dirname + '/hello/hello.html', 'utf-8', function(err, data) {
        if(err){
            res.writeHead(404, {'Content-Text': 'text/plain'});
            res.write("Not Found");
            return red.end();
          }
          res.writeHead(200, {'Contetent-Type': 'text/html'});
          res.write(data);
          res.end();
      })
      break;
    case '/index':
      fs.readFile(__dirname + '/hello/index.html', 'utf-8', function(err, data) {
        if(err){
          res.writeHead(404, {'Content-Text': 'text/plain'});
          res.write("Not Found");
          return red.end();
        }
        res.writeHead(200, {'Contetent-Type': 'text/html'});
        res.write(data);
        res.end();
      })
      break;
  }
});
server.listen(settings.port,settings.host);
console.log("server listening...");
