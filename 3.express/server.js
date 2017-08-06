/**
 * GET /user/signup 获取注册表单
 * POST /user/signup 提交注册表单
 * GET /user/signin 获取登录表单
 * POST /user/signin 提交登录表单
 * GET / 首页(欢迎页)
 */
//express其实是一个函数
let express = require('express');
let path = require('path');
//index提供首页的路由
let index = require('./routes/index');
//user提供的是跟用户相关的路由
let user = require('./routes/user');
//执行后又返回一个函数，请求监听函数
let app = express();
//配置模板引擎 html
app.set('view engine','html');
//设置模板存放的根目录
app.set('views',path.resolve('views'));
//指定html类型的模板的渲染方法
app.engine('html',require('ejs').__express);

app.use('/',index);
// /user指的是前缀，就是说以/user开头
app.use('/user',user);
app.listen(8080);