var StaticServer = require('static-server');
var server = new StaticServer({
  rootPath: './dist/',
  port: 8888
});

server.start(function () {
  console.log('Server Started At Port', server.port);
});