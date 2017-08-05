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
//监听8080端口
app.listen(8080);

