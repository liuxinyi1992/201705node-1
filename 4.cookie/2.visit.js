/**
 * 当客户端第一次访问的时候，服务器返回 "欢迎你第1次访问"
 * 当客户端第二次访问的时候，服务器返回 "欢迎你第2次访问"
 */
let http = require('http');
let querystring = require('querystring');
/**
 * 1.先获取客户端传过来的cookie
 *
 */
http.createServer(function(req,res){
  res.setHeader('Content-Type','text/html;charset=utf-8');
  if(req.url == '/visit'){
      let cookie = req.headers.cookie;
      if(cookie){// visit=1
        //把cookie字符串转成对象
        //Cookie:name=zfpx; visit=NaN
        let cookieObj = querystring.parse(cookie,'; ');
        let visit = cookieObj.visit;
        visit = isNaN(visit)?1:parseInt(visit)+1;
        res.setHeader('Set-Cookie',`visit=${visit}`);
        res.end(`欢迎你的第${visit}次访问`);
      }else{
      res.setHeader('Set-Cookie','visit=1');
        res.end(`欢迎你的第1次访问`);
      }
  }else{
    res.end('404');
  }
}).listen(8080);