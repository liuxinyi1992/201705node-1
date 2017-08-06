/**
 *
 */
let http = require('http');
let url = require('url');
http.createServer(function(req,res){
  let urlObj = url.parse(req.url,true);
  let {pathname} = urlObj;
  //当第一次客户端访问服务器的时候，服务器会向客户端发送一个响应头，Set-Cookie
  if(pathname == '/write'){
    res.setHeader('Set-Cookie','name=zfpx');
    //客户端接收到这样的响应头后会把此cookie小心翼翼的保存在浏览器里
    res.end('write ok');
  }else if(pathname == '/read'){
    //当客户端再次请求服务器的时候，会把cookie发送给服务器
    // 请求头 Cookie: name=zfpx
    req.headers.cookie;//对象
    res.end(req.headers.cookie);//name=zfpx
  }
}).listen(8080);
