//http属于内置模块
let http = require('http');
//当客户端请求服务器的时候，也就是说当服务器收到客户端请求的时候会执行请求监听函数
/**
 * 路由 router
 * 服务器根据客户端请求的方法名和路径不同返回不同的响应
 * GET http://localhost:3000/
 * 1.所有的方法和路径全在一个函数里处理，代码臃肿而难以维护
 * 2.如果要修改一个方法，有可能影响其它的逻辑，不方便重构
 */
http.createServer(function(req,res){
   let method = req.method;//取得请求的方法名
   let url = req.url;//取得请求的URL路径
   res.setHeader('Content-Type','text/html;charset=utf-8')
  //如果说请求的方法是GET并且访问的url地址是/
   if(method == 'GET' && url == '/'){
     res.end('首页');//home就是响应体
   }else if(method == 'GET' && url == '/user'){
     res.end('用户管理');
   }else{
     res.end(`办不到 ${method} ${url}`);
   }
}).listen(3000);
