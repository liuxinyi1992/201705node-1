let express = require('express');
//这个cookieParser中间件是用来解析cookie的，它会向req添加一个cookies的属性
let cookieParser = require('cookie-parser');
let app = express();
//执行了此中间件之后，req.cookies就是对象
app.use(cookieParser());
app.get('/write',function(req,res){
  //这个是express提供的用来写cookie的方法
  //res.setHeader('Set-Cookie','name=zfpx');
  //先得到查询字符串对象
  let query = req.query;
  //循环对象的所有的属性，并全部写入cookie
  for(let attr in query){
    res.cookie(attr,query[attr]);
  }
  res.send('ok');
});
app.get('/read',function(req,res){
  //req.headers.cookie;=>
 res.json(req.cookies);
});
app.listen(8080);