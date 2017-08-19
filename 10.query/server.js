let express = require('express');
let app = express();
app.get('/clock',function(req,res){
  //此服务器允许所有的来源来访问此接口 跨域资源共享
  res.setHeader('Access-Control-Allow-Origin',"*");
  res.send(new Date().toLocaleString());
});
app.listen(8080);