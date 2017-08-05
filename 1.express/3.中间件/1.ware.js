let express = require('express');
let app = express();
//中间件所有的路径必须要走的
//next是一个函数，执行它表示可以继续执行,如果不调用则中止在中间件里了
/**
 * 中间件的用途
 * 1. 添加一些公用的逻辑 设置响应的类型和编码
 * 2. 添加一些公用的方法
 */
app.use(function(req,res,next){
  console.log(`${req.method} ${req.path}`);
  res.setHeader('Content-Type','text/html;charset=utf-8');
  //调用next表示继续执行，不调用则不继续
  next();
});
app.get('/order',function(req,res){
  res.end('我的订单');
});
app.get('/dou',function(req,res){
  res.end('我的京豆');
});
app.listen(8080);