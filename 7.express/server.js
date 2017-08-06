/**
 * GET /user/signup 获取注册表单
 * POST /user/signup 提交注册表单
 * GET /user/signin 获取登录表单
 * POST /user/signin 提交登录表单
 * GET / 首页(欢迎页)
 */
//express其实是一个函数
let express = require('express');
let session = require('express-session');

let path = require('path');
//index提供首页的路由
let index = require('./routes/index');
//user提供的是跟用户相关的路由
let user = require('./routes/user');
//请求体解析中间件 username=1&password=2
// {username:1,password:2}
//基本上所有的第三方中间件都会返回一个函数，执行这个函数才能得到真正的中间件函数
let bodyParser = require('body-parser');
//执行后又返回一个函数，请求监听函数
let app = express();
// req.session.name= xxx    req.session.name
app.use(session({
  resave:true,
  saveUninitialized:true,
  secret:'zfpx',
  cookie:{
    maxAge:10*1000
  }
}));

//  {"id":1}
//请求体是什么类型，就用什么解析器来进行解析 不管输入的格式是urlencoded,还是json格式的，输出的格式都是对象
//extended=true qs querystring
app.use(bodyParser.urlencoded({extended:true}));
//经过这个中间件得之后，我们可以通过req.body得到请求体
//配置模板引擎 html
app.set('view engine','html');
//设置模板存放的根目录
app.set('views',path.resolve('views'));
//指定html类型的模板的渲染方法
app.engine('html',require('ejs').__express);
//express只有亲生的中间件，就是静态文件中间件
//使用静态文件中间件，指定一个静态文件根目录
app.use(express.static(path.resolve('../node_modules')));
app.use('/',index);
// /user指的是前缀，就是说以/user开头
app.use('/user',user);
app.listen(8080);