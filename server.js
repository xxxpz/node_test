var http = require('http');

// 创建node服务器
http
  .createServer(function(requeset, response) {
    response.writeHead('200', { 'Content-Type': 'text/plain' });

    response.end('hello world');
  })
  .listen(9999);
// listen 监听9999端口
