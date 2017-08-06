/**
 * 当客户端第一次访问的时候，服务器返回 "欢迎你第1次访问"
 * 当客户端第二次访问的时候，服务器返回 "欢迎你第2次访问"
 */
let http = require('http');
http.createServer(function(req,res){
  if(req.url == '/visit'){

  }else{
    res.end('404');
  }
}).listen(8080);