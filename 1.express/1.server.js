//如果写的是一个模块的名字的话，会先从内置模块里找，再去node_modules下面找
let express = require('express');
//express是一个方法(函数),这个方法可以执行，执行后会返回一个新函数
let app = express();
//如何定义路由
//方法跟http的请求方法是一一对应 GET POST PUT DELETE OPTIONS

app.get('/',function(req,res){
  res.end('home');
});
app.get('/user',function(req,res){
  res.end('user');
});
//all表示 所有的方法，不管客户端提交过来的路径是什么全部能匹配上。
//*表示匹配所有的路径，不管客户端提交的路径是什么，也能全部匹配
app.all('*',function(req,res){
  res.end('404');// Not Found你请求的资源未找到
});
//监听8080端口
app.listen(8080);
//app的本质是一个请求监听函数
//require('http').createServer(app).listen(8080);
/*app.listen = function listen() {
  var server = http.createServer(this);
  return server.listen.apply(server, arguments);
};*/
