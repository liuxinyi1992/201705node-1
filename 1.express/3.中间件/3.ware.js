/**
 * 1. 如果有多间件怎么办？
 * 2. 如果中件里发生了错误怎么处理?
 **/
let express = require('express');
let app = express();
//中央
app.use(function(req,res,next){
  //在所有的中间件里和所有的路由里请求对象和响应对象是同一个对象
   req.money = 100;
   next();
});
//省里
app.use(function(req,res,next){
  req.money -= 20;//80
  next();
});
//市里
app.use(function(req,res,next){
  req.money -= 40;//40
  //如果说中间件里了出错了,会跳过后面所有的中间件和路由，交给错误处理中间件处理
  next();
});
//村里
app.use(function(req,res,next){
  req.money -= 30;
  next();
});
app.get('/',function(req,res){
  console.log('发放'+req.money);//10
  res.send('发放'+req.money);
});
//错误处理中间件多了一个错误对象
app.use(function(err,req,res,next){
  console.log(err);
  res.send('wrong');
});
app.listen(8080);
