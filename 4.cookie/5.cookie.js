/**
 * 用express实现统计客户端访问次数
 */
let express = require('express');
let cookieParser = require('cookie-parser');
let app = express();
//使用完此中间件之后会在req.cookies
app.use(cookieParser());
app.get('/',function(req,res){
  //先得到cookies
  let cookies = req.cookies;
  //如果cookies有值，并且cookies的visit有值
  if(cookies && cookies.visit){
    //取得老的值加1得到新的次数
    let visit = parseInt(cookies.visit)+1;
    //把新的visit的值发送给客户端
    //res.cookie('visit',visit,{path:'/visit'});
    //res.cookie('visit',visit,{path:'/'});
    res.send(`客人，欢迎你的第${visit}次光临`);
  }else{
    let visit = 1;
    res.cookie('visit',visit);
    res.send(`客人，欢迎你的第1次光临`);
  }
});
app.get('/visit',function(req,res){
  //先得到cookies
  let cookies = req.cookies;
  //如果cookies有值，并且cookies的visit有值
  if(cookies && cookies.visit){
    //取得老的值加1得到新的次数
    let visit = parseInt(cookies.visit)+1;
    //把新的visit的值发送给客户端
    //res.cookie('visit',visit,{path:'/visit'});
    //res.cookie('visit',visit,{path:'/'});
    res.send(`客人，欢迎你的第${visit}次光临`);
  }else{
    let visit = 1;
    res.cookie('visit',visit);
    res.send(`客人，欢迎你的第1次光临`);
  }
});
app.listen(8080);
