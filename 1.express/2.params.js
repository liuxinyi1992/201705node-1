/**
 * 如何获取请求的参数
 * 请求里面有什么
 *   请求行  GET /user?name=zfpx&age=8 http/1.1
 *   请求头  Content-Type:application/json
 *   请求体  只有POST系列(类别)请求才有请求体
 *
 * 响应里有什么
 *   响应行  协议名  状态码  原因短语(状态描述)
 *   响应头 Content-Type
 *   响应体
 * content-type 内容类型
 * 在请求头中表示请求体的内容类型
 * 在响应头中表示响应体的内容类型
 */
let express = require('express');
let app = express();
let url = require('url');
//这里的路径是指的路径名(pathname)
//访问的url路径只要路径名能匹配上就可以，查询字符串不参与匹配
app.get('/user',function(req,res){
  //请求的方法名
  console.log(req.method);
  //url=路径名(pathname)+?传参(查询字符串)(查询参数)
  console.log(req.url);///user?name=zfpx&age=8
  //使用url模块可以解析转换url字符串
  //true意味着查询参数变成对象,否则保留字符串
 /* let urlObj = url.parse(req.url,true);
   console.log(urlObj.pathname);//路径名
   console.log(urlObj.query);//查询对象*/
  console.log(req.path);//req.path=urlObj.pathname
  console.log(req.query);//req.query=urlObj.query
  //http模块把请求头封装成了一个对象
  console.log(req.headers);//请求头对象
  console.log(req.headers.host);//取请求头中的主机名
  //告诉客户端浏览器用什么编码来进行解析读取
  res.setHeader('Content-Type','text/html;charset=utf-8');
  //写入响应体
  res.end('用户')
});
//路径参数 因为它是路径里面的参数
//查询参数 ?后面  /user?id=1
// /user/1
//如果这个参数是可选的，可有可无的 一般放在?后面
//如果这个参数是必填的，没有这个参数这个请求就没有意义，则一般放在路径里面
//菜名就是必填的要放在路径里
//比如说几成熟就是可选的
//我要向服务器查看某个用户的信息
//路径参数对象 req.params {id:100}
// http://localhost:8080/users/100
app.get('/users/:id',function(req,res){
   //路径参数对象
   let id = req.params.id;
   console.log(id);
   console.log(req.query);
   res.end(id);
});

app.listen(8080);