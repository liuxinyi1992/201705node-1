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
/**
 * 1.把view engine改为html
 * 2.把模板的后缀改为html
 * 3. 添加一行代码
 */
app.set('view engine','html');
//指定模板存放的根目录
//resolve 是从当前路径出发，拼出绝对路径
app.set('views',path.resolve('views'));
//如果遇到的模板后缀是html的话，使用ejs的渲染方法来进行渲染
app.engine('html',require('ejs').__express);
let users = [
  {id:1,name:'zfpx1'},
  {id:2,name:'zfpx2'}
]
app.use(function(req,res,next){
  //凡是所有的路由都需要的逻辑，全部都移到中间件里
  res.locals.title = '珠峰培训';
  next();
});
//http://localhost:8080/public/index.css
/*app.get('/public/index.css',function(req,res){
  res.sendFile('./public/index.css',{root:__dirname});
});*/
//如果客户端访问过来的路径是以/public开头的话，会自动对应成public 目录下面的文件,自动返回给客户
/*app.use('/public',function(req,res,next){
  console.log(req.path);
  res.sendFile('./public'+req.path,{root:__dirname});
});*/
//当客户端访问静态文件的时候，会自动去public目录下面找对应的文件，如果找到则返回文件内容，如果找不到则next
app.use(express.static('public'));

//所有的set 的key 都是写固定死的
//把一个静态的模板和一个动态的数据混合在一起
app.get('/',function(req,res){
  //渲染 第一个参数只能写模板相对路径
  //第二个参数是数据对象
  //ejs后缀可以省略,找模板的时候 express会自动添加view engine后缀 去查找文件
  //其实真正渲染模板的数据对象并不是第二个参数，而是res.locals。因为在真正渲染之前express会把第二个参数数据对象的属性全部拷贝或者说覆盖掉res.locals上
  res.locals.name = '名称';
  res.render('index',{users,title:"首页"});
});
app.get('/user',function(req,res){
  //渲染 第一个参数只能写模板相对路径
  //第二个参数是数据对象
  //ejs后缀可以省略,找模板的时候 express会自动添加view engine后缀 去查找文件

  res.render('user',{});
});
app.listen(8080);



/*
app.get('/',function(req,res){
  //TypeError: path must be absolute or specify root to res.sendFile
  //路径必须是一个绝对的或者指定一个根路径
  //  res.sendFile(path.join(__dirname,'./views/index.html'));
  /!*res.sendFile('./views/index.html',{root:__dirname});*!/
});*/
