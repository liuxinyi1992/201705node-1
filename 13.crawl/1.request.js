let request = require('request');
//这是一个node客户端，可以用来请求http服务器
/**
 * npm install request cheerio debug ejs express mongoose async cron iconv-lite -S
 **/
request('http://www.xinfadi.com.cn',function(err,response,body){
 //err 错误对象  response是响应对象 body响应体
  if(!err&& response.statusCode == 200){
    console.log(body);
  }else{
    console.error(err);
  }
});