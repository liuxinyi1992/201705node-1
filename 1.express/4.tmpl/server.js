/**
 * 如何使用模板
 * 当渲染数据的需要模板
 * 模板一般是一个静态文件
 **/
let express = require('express');
let path = require('path');
let app = express();
//模板配置
//设置模板引擎,告诉express模板的类型
app.set('view engine','ejs');
//指定模板存放的根目录
//resolve 是从当前路径出发，拼出绝对路径
app.set('views',path.resolve('views'));
//所有的set 的key 都是写固定死的
//把一个静态的模板和一个动态的数据混合在一起
app.get('/',function(req,res){
  //渲染 第一个参数只能写模板相对路径
  //第二个参数是数据对象
  //ejs后缀可以省略,找模板的时候 express会自动添加view engine后缀 去查找文件
  res.render('index',{title:'主页'});
});
app.listen(8080);



/*
app.get('/',function(req,res){
  //TypeError: path must be absolute or specify root to res.sendFile
  //路径必须是一个绝对的或者指定一个根路径
  //  res.sendFile(path.join(__dirname,'./views/index.html'));
  /!*res.sendFile('./views/index.html',{root:__dirname});*!/
});*/
